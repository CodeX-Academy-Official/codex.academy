export function dollars(num: Number) {
  if (!num) return NaN;
  return "$" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
