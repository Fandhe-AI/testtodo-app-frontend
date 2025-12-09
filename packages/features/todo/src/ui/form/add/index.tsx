"use client";

import { isDirty, useForm, useFormData } from "@conform-to/react/future";
import { useActionState, useState } from "react";
import type { z } from "zod/v4";
import type { createCreate } from "../../../model/actions/create";
import { createSchema } from "../../../model/schemas";

type Props = {
  /**
   * フォーム送信時のアクション
   */
  action: ReturnType<typeof createCreate>;
  /**
   * デフォルト値
   */
  defaultValue?: z.infer<typeof createSchema>;
};

/**
 * Todo 追加フォームコンポーネント
 *
 * 新しい Todo を作成するためのフォームです。
 */
export const TodoFormAdd = ({ action: formAction, defaultValue }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastResult, action, isPending] = useActionState(formAction, null);
  const { form, fields } = useForm(createSchema, {
    // 前回の送信結果を同期
    lastResult,

    // デフォルト値を設定
    defaultValue,

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
    <form
      {...form.props}
      action={action}
      className={[
        "rounded-xl border border-white/10 bg-white/5 p-4",
        "backdrop-blur-[10px] transition-all duration-200",
      ].join(" ")}
    >
      <fieldset disabled={isPending}>
        <div className="flex gap-3">
          <input
            type="text"
            name={fields.title.name}
            defaultValue={fields.title.defaultValue}
            placeholder="新しい Todo を追加..."
            onFocus={() => setIsExpanded(true)}
            className={[
              "flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2",
              "text-white placeholder-white/40",
              "focus:border-white/30 focus:outline-none",
              !fields.title.valid ? "border-red-400" : "",
            ].join(" ")}
          />
          <button
            type="submit"
            disabled={!dirty}
            className={[
              "rounded-lg bg-blue-500 px-4 py-2 font-medium text-white",
              "transition-colors duration-200",
              "hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50",
            ].join(" ")}
          >
            {isPending ? "追加中..." : "追加"}
          </button>
        </div>
        <div className="text-red-400 text-sm">{fields.title.errors}</div>

        {isExpanded && (
          <div className="mt-4 space-y-3">
            <textarea
              name={fields.description.name}
              defaultValue={fields.description.defaultValue}
              placeholder="説明（任意）"
              rows={2}
              className={[
                "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2",
                "text-white placeholder-white/40",
                "focus:border-white/30 focus:outline-none",
                !fields.description.valid ? "border-red-400" : "",
              ].join(" ")}
            />
            <div className="text-red-400 text-sm">
              {fields.description.errors}
            </div>
            <div className="flex gap-3">
              <select
                name={fields.priority.name}
                defaultValue={fields.priority.defaultValue}
                className={[
                  "rounded-lg border border-white/10 bg-white/5 px-4 py-2",
                  "text-white",
                  "focus:border-white/30 focus:outline-none",
                  !fields.priority.valid ? "border-red-400" : "",
                ].join(" ")}
              >
                <option value="low">優先度: 低</option>
                <option value="medium">優先度: 中</option>
                <option value="high">優先度: 高</option>
              </select>
              <input
                type="date"
                name={fields.dueDate.name}
                defaultValue={fields.dueDate.defaultValue}
                className={[
                  "rounded-lg border border-white/10 bg-white/5 px-4 py-2",
                  "text-white",
                  "focus:border-white/30 focus:outline-none",
                  !fields.dueDate.valid ? "border-red-400" : "",
                ].join(" ")}
              />
            </div>
            <div className="text-red-400 text-sm">{fields.priority.errors}</div>
            <div className="text-red-400 text-sm">{fields.dueDate.errors}</div>
          </div>
        )}

        <div className="text-red-400 text-sm">{form.errors}</div>
      </fieldset>
    </form>
  );
};
