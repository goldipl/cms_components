export function getInitials(fullName: string): string {
  const [firstName, surname] = fullName.split(" ");

  if (firstName && surname) {
    return `${firstName.charAt(0).toUpperCase()}${surname
      .charAt(0)
      .toUpperCase()}`;
  }

  return firstName ? `${firstName.charAt(0).toUpperCase()}` : "";
}
