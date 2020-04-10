export function scrollToHash(hash: string) {
  const parts = hash.split("#");
  const clean = "#" + parts[parts.length - 1];
  if (clean.indexOf("/") > -1) return;
  const selector: any = document.querySelector(clean);
  if (selector) {
    return window.scrollTo({
      top: selector.offsetTop - 135,
      behavior: "smooth",
    });
  }
}
