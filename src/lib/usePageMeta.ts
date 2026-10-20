import { useEffect } from "react";

/** Keeps the tab title, description and canonical in step with the page. */
export function usePageMeta({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attribute: string, value: string) => {
      const element = document.head.querySelector<HTMLMetaElement>(selector);
      if (element) element.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    const canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    const base = "https://decani.studio";
    if (canonical) canonical.href = `${base}${path}`;
    setMeta('meta[property="og:url"]', "content", `${base}${path}`);

    let robots: HTMLMetaElement | null = null;
    if (noindex) {
      robots = document.createElement("meta");
      robots.name = "robots";
      robots.content = "noindex";
      document.head.appendChild(robots);
    }

    return () => {
      if (robots) robots.remove();
    };
  }, [title, description, path, noindex]);
}
