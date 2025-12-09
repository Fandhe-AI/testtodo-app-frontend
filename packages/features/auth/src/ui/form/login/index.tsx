"use client";

import { isDirty, useForm, useFormData } from "@conform-to/react/future";
import { useActionState } from "react";
import type { z } from "zod/v4";
import type { createLogin } from "../../../model/actions/login";
import { loginSchema } from "../../../model/schemas";

type Props = {
  /**
   * フォーム送信時のアクション
   */
  action: ReturnType<typeof createLogin>;
  /**
   * デフォルトのリダイレクト先URL
   */
  callbackURL?: string;
  /**
   * デフォルト値
   */
  defaultValue?: z.infer<typeof loginSchema>;
};

/**
 * ログインフォームコンポーネント
 *
 * @example
 * ```tsx
 * import { FormLogin } from "@repo/features-auth/ui";
 * import { useAuth } from "@repo/features-auth/model";
 *
 * const LoginPage = () => {
 *   const { login } = useAuth();
 *   return <FormLogin onSubmit={login} />;
 * };
 * ```
 */
export const AuthFormLogin = ({
  action: formAction,
  callbackURL,
  defaultValue,
}: Props) => {
  const [lastResult, action, isPending] = useActionState(formAction, null);
  const { form, fields } = useForm(loginSchema, {
    // 前回の送信結果を同期
    lastResult,

    // デフォルト値を設定
    defaultValue: {
      ...defaultValue,
      callbackURL,
    },

    // blurイベント発生時にフォームを検証する
    shouldValidate: "onBlur",
  });

  const dirty = useFormData(form.id, (formData) =>
    isDirty(formData, {
      defaultValue,
      skipEntry(name) {
        // We need to skip NextJS internal fields when checking for dirty state
        return name.startsWith("$ACTION_");
      },
    }),
  );

  return (
    <form {...form.props} action={action} className="space-y-4">
      <fieldset disabled={isPending} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-white/70">
            メールアドレス
          </label>
          <input
            type="email"
            name={fields.email.name}
            defaultValue={fields.email.defaultValue}
            autoComplete="email"
            placeholder="user@example.com"
            className={[
              "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2",
              "text-white placeholder-white/40",
              "focus:border-white/30 focus:outline-none",
              !fields.email.valid ? "border-red-400" : "",
            ].join(" ")}
          />
          <div className="text-red-400 text-sm">{fields.email.errors}</div>
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm text-white/70">
            パスワード
          </label>
          <input
            type="password"
            name={fields.password.name}
            defaultValue={fields.password.defaultValue}
            autoComplete="current-password"
            placeholder="••••••••"
            className={[
              "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2",
              "text-white placeholder-white/40",
              "focus:border-white/30 focus:outline-none",
              !fields.password.valid ? "border-red-400" : "",
            ].join(" ")}
          />
          <div className="text-red-400 text-sm">{fields.password.errors}</div>
        </div>

        <input
          type="hidden"
          name={fields.callbackURL.name}
          defaultValue={fields.callbackURL.defaultValue}
        />

        <div className="text-red-400 text-sm">{form.errors}</div>

        <button
          type="submit"
          disabled={!dirty}
          className={[
            "w-full rounded-lg bg-blue-500 px-4 py-3 font-medium text-white",
            "transition-colors duration-200",
            "hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50",
          ].join(" ")}
        >
          {isPending ? "ログイン中..." : "ログイン"}
        </button>

        <p className="text-center text-sm text-white/50">
          アカウントをお持ちでないですか？{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            新規登録
          </a>
        </p>
      </fieldset>
    </form>
  );
};
