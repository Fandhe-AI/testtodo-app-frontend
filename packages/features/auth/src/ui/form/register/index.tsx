"use client";

import { isDirty, useForm, useFormData } from "@conform-to/react/future";
import { useActionState } from "react";
import type { z } from "zod/v4";
import type { createRegister } from "../../../model/actions/register";
import { registerSchema } from "../../../model/schemas";

type Props = {
  /**
   * フォーム送信時のアクション
   */
  action: ReturnType<typeof createRegister>;
  /**
   * デフォルトのリダイレクト先URL
   */
  callbackURL?: string;
  /**
   * デフォルト値
   */
  defaultValue?: z.infer<typeof registerSchema>;
};

/**
 * 登録フォームコンポーネント
 *
 * @example
 * ```tsx
 * import { AuthFormRegister } from "@repo/features-auth/ui/form/register";
 *
 * const RegisterPage = () => {
 *   return <AuthFormRegister action={registerAction} />;
 * };
 * ```
 */
export const AuthFormRegister = ({
  action: formAction,
  callbackURL,
  defaultValue,
}: Props) => {
  const [lastResult, action, isPending] = useActionState(formAction, null);
  const { form, fields } = useForm(registerSchema, {
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
          <label htmlFor="name" className="block text-sm text-white/70">
            ユーザー名
          </label>
          <input
            type="text"
            name={fields.name.name}
            defaultValue={fields.name.defaultValue}
            autoComplete="name"
            placeholder="山田 太郎"
            className={[
              "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2",
              "text-white placeholder-white/40",
              "focus:border-white/30 focus:outline-none",
              !fields.name.valid ? "border-red-400" : "",
            ].join(" ")}
          />
          <div className="text-red-400 text-sm">{fields.name.errors}</div>
        </div>

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
            autoComplete="new-password"
            placeholder="••••••••"
            className={[
              "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2",
              "text-white placeholder-white/40",
              "focus:border-white/30 focus:outline-none",
              !fields.password.valid ? "border-red-400" : "",
            ].join(" ")}
          />
          <div className="text-red-400 text-sm">{fields.password.errors}</div>
          <p className="text-white/50 text-xs">8文字以上で入力してください</p>
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
            "w-full rounded-lg bg-green-500 px-4 py-3 font-medium text-white",
            "transition-colors duration-200",
            "hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50",
          ].join(" ")}
        >
          {isPending ? "登録中..." : "アカウント作成"}
        </button>

        <p className="text-center text-sm text-white/50">
          すでにアカウントをお持ちですか？{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            ログイン
          </a>
        </p>
      </fieldset>
    </form>
  );
};
