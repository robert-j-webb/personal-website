import { useEffect } from "react";

const textTags = ["p", "span", "h1", "h2", "li"];

let originalClone: HTMLElement | null;
let originalEl: HTMLElement | null;

const range = 3;
const dif = range / 2;

export default function ResumeCode() {
  useEffect(() => {
    document.onmousemove = function (e) {
      if (originalEl) {
        originalEl.innerHTML = originalClone!.innerHTML;
      }
      originalEl = document.elementFromPoint(
        e.clientX,
        e.clientY,
      ) as HTMLElement;
      originalClone = originalEl?.cloneNode(true) as HTMLElement;

      if (!originalEl) {
        return;
      }
      let textNodes;

      if (textTags.includes(originalEl.tagName.toLowerCase())) {
        textNodes = [originalEl];
      } else {
        textNodes = [
          ...originalEl.querySelectorAll("p"),
          ...originalEl.querySelectorAll("span"),
          ...originalEl.querySelectorAll("h1"),
          ...originalEl.querySelectorAll("h2"),
        ];
      }
      if (textNodes.length > 30) {
        return;
      }
      textNodes.forEach((node) => {
        node.innerHTML = node.textContent
          .split("")
          .map(
            (a) =>
              `<span style="
            display: inline-block;
            transform: translate(${Math.random() * range - dif}px, ${Math.random() * range - dif}px)
            ">${a === " " ? "&nbsp;" : a}</span>`,
          )
          .join("");
      });
    };
    return () => {
      document.onmousemove = null;
    };
  }, []);
  return <></>;
}
