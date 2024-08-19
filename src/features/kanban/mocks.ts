export function generateMockData(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    image: `https://placekitten.com/200/300?image=${index}`,
    title: `Title ${index + 1}`,
    subtitle: `Subtitle ${index + 1}`,
    editors: [
      {
        src: `https://placekitten.com/50/50?image=${index}`,
        fullName: `Editor ${index + 1}`,
      },
      {
        src: `https://placekitten.com/50/50?image=${index + 1}`,
        fullName: `Assistant ${index + 1}`,
      },
    ],
    actions: {
      video: {
        onClick: () => console.log(`Video clicked for record ${index + 1}`),
      },
      image: {
        onClick: () => console.log(`Image clicked for record ${index + 1}`),
      },
      edit: {
        onClick: () => console.log(`Edit clicked for record ${index + 1}`),
      },
    },
  }));
}
