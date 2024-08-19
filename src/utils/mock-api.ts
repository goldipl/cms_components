const names = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque ullamcorper augue ut dignissim. Aenean tortor eros, fermentum sed cursus vel, laoreet eu arcu. Curabitur eget nunc nec orci ornare vestibulum egestas ac nibh. Duis condimentum semper consequat. Mauris vel lectus ultricies, ultrices orci sed, pellentesque enim. Aliquam erat volutpat. Nullam scelerisque ultrices fringilla. Aliquam erat volutpat. Aenean magna risus, egestas ut magna id, elementum efficitur nisl. Nulla eu facilisis tellus.
  Morbi interdum convallis velit, auctor luctus sem pretium in. Sed sodales lacus vitae velit suscipit porta. Sed tristique luctus diam, eget sagittis mi faucibus in. Nulla et efficitur risus.
  `.split(" ");
export const generateRandomName = () => names[Math.floor(Math.random() * 99)];

export function mockApi<T>(mock: T, error?: boolean) {
  const name = `(${generateRandomName()})`;
  const timeout = Math.max(100, Math.floor(Math.random() * 1500));
  console.log(`Api mock called ${error ? "with error" : ""} ${name}`, { mock });
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      if (error) reject(new Error("Mock API error"));
      else {
        console.log(`Api mock resolved ${name} ${timeout}ms`, { mock });
        resolve(mock);
      }
    }, timeout);
  });
}
