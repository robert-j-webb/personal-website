const textSelector = "p, span, h1, h2, li, a";
const range = 3;
const dif = range / 2;
let interval: ReturnType<typeof setInterval> | undefined;
let replacements: { text: Text; characters: HTMLSpanElement[] }[] = [];
let timeout: ReturnType<typeof setTimeout> | undefined;
function restoreText() {
  clearInterval(interval);
  clearTimeout(timeout);
  replacements.forEach(({ text, characters }) => {
    characters[0].replaceWith(text);
    characters.slice(1).forEach((character) => character.remove());
  });
  replacements = [];
}

function prepareText(target: Element | null) {
  if (!target) return;

  const closestText = target.closest(textSelector);
  const elements = closestText
    ? [closestText]
    : [...target.querySelectorAll(textSelector)];
  if (elements.length > 30) return;

  // Collect before replacing so nested text elements are only processed once.
  const textNodes = new Set<Text>();
  elements.forEach((element) => {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      textNodes.add(node as Text);
    }
  });

  textNodes.forEach((text) => {
    if (!text.data) return;
    const fragment = document.createDocumentFragment();
    const characters: HTMLSpanElement[] = [];
    for (const character of text.data) {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.textContent = character === " " ? "\u00a0" : character;
      fragment.append(span);
      characters.push(span);
    }
    text.replaceWith(fragment);
    replacements.push({ text, characters });
  });
}

function scrambleText() {
  replacements.forEach(({ characters }) => {
    for (const character of characters) {
      character.style.transform = `translate(${Math.random() * range - dif}px, ${Math.random() * range - dif}px)`;
    }
  });
}

document.onpointerdown = (event) => {
  let target = event.target instanceof Element ? event.target : null;
  // Resolve a touched character before restoring and removing its span.
  if (
    replacements.some(({ characters }) =>
      characters.some((span) => span === target),
    )
  ) {
    target = target!.parentElement;
  }
  restoreText();
  prepareText(target);
  scrambleText();
  if (replacements.length) interval = setInterval(scrambleText, 100);
  timeout = setTimeout(() => restoreText(), 1000);
};

document.onpointermove = (event) => {
  // Touch-generated mouse events must not cancel the animation interval.
  if (event.pointerType !== "mouse") return;
  restoreText();
  prepareText(document.elementFromPoint(event.clientX, event.clientY));
  scrambleText();
  timeout = setTimeout(() => restoreText(), 1000);
};
