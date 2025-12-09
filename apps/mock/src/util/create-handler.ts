import { NextResponse } from "next/server";

const methods = ["GET", "POST", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"];

export const createHandler =
  (baseURL: string) =>
  async (
    request: Request,
    { params }: { params: Promise<{ path: string[] }> },
  ) => {
    const { path = [] } = await params;

    if (!methods.includes(request.method)) {
      return NextResponse.json(
        { message: "Method Not Allowed" },
        { status: 405 },
      );
    }

    try {
      let url = `${baseURL}/${path.join("/")}`;
      const searchParams = new URL(request.url).searchParams.toString();
      if (searchParams) url = `${url}?${searchParams}`;

      const requestInit: RequestInit = {
        method: request.method,
        headers: request.headers,
      };

      if (["POST", "PUT", "PATCH"].includes(request.method)) {
        const contentType = request.headers.get("content-type");
        if (contentType) {
          const body = await request.text();
          if (body) requestInit.body = body;
        }
      }

      const response = await fetch(url, requestInit);

      if (response.status === 204) {
        return new NextResponse(undefined, {
          status: response.status,
          headers: Object.fromEntries(response.headers.entries()),
        });
      }

      const responseData = await response.json();
      return NextResponse.json(responseData, {
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    }
  };
