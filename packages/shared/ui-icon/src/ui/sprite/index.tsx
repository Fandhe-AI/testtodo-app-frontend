import { Hidden } from "../hidden";

/**
 * SVGスプライトコンポーネント
 *
 * アプリケーションのルートに配置して、全アイコンのSVGシンボルを定義します。
 */
export const IconSprite = () => (
  <Hidden>
    {/* 優先度アイコン */}
    <symbol id="icon-symbol-arrow-down" viewBox="0 0 24 24">
      <path
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </symbol>

    <symbol id="icon-symbol-arrow-up" viewBox="0 0 24 24">
      <path
        d="M5 10l7-7m0 0l7 7m-7-7v18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </symbol>

    <symbol id="icon-symbol-minus" viewBox="0 0 24 24">
      <path
        d="M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </symbol>

    <symbol id="icon-symbol-plus" viewBox="0 0 24 24">
      <path
        d="M12 5v14m-7-7h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </symbol>
  </Hidden>
);
