export function overload(f1: number): number;
export function overload(f1: number, f2: number): number;
export function overload(f1: number, f2?: number): number {
  if (f2 !== undefined) {
    return f1 * f2;
  }
  if (f1 !== undefined) {
    return Math.PI * f1;
  }
  return f1 * f1;
}
