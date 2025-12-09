import strictConfig from "@repo/shared-config-syncpack/strict";
import typesOnlyDevConfig from "@repo/shared-config-syncpack/types-only-dev";
import type { RcFile } from "syncpack";

const config: RcFile = {
  ...(strictConfig as RcFile),
  ...(typesOnlyDevConfig as RcFile),
};

export default config;
