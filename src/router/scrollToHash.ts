export function scrollToHash(hash: string) {
  const parts = hash.split("#");
  const clean = "#" + parts[parts.length - 1];
  const selector: any = document.querySelector(clean);
  if (selector) {
    return window.scrollTo({
      top: selector.offsetTop - 100,
      behavior: "smooth"
    });
  }
}
