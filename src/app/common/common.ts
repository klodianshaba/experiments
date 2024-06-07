const promise = new Promise<string>(resolve => {
  setTimeout(() => resolve('resolved'), 2000);
});

export async function asyncCall() {
  return await promise;
}
