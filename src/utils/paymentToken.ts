export function encode(payload: any): string {
  const encoded = window.btoa(JSON.stringify(payload));
  return encoded;
}

export function decode(str: string): any {
  const decoded = window.atob(str);
  const obj = JSON.parse(decoded);
  return obj;
}
