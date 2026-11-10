import Key from "../src/i18n/i18nKey";
import { en } from "../src/i18n/languages/en";

/** Translate generated UI only; code text and non-English documents stay intact. */
export function localizeCodeControls(html: string): string {
 if (!/<html[^>]+\blang=["']en(?:-[^"']*)?["']/i.test(html)) return html;
 return html
  .replace(/<span\b([^>]*\bclass=(["'])[^"']*\bec-collapse__text-(expand|collapse)\b[^"']*\2[^>]*)>[\s\S]*?<\/span>/g, (_whole: string, attrs: string, _quote: string, state: string) => "<span" + attrs + ">" + (state === "expand" ? en[Key.codeCollapsibleShowMore] : en[Key.codeCollapsibleShowLess]) + "</span>")
  .replace(/(\bdata-expanded-announcement=)(["'])[^"']*\2/g, (_whole: string, prefix: string, quote: string) => prefix + quote + en[Key.codeCollapsibleExpanded] + quote)
  .replace(/(\bdata-collapsed-announcement=)(["'])[^"']*\2/g, (_whole: string, prefix: string, quote: string) => prefix + quote + en[Key.codeCollapsibleCollapsed] + quote);
}
