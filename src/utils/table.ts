export const formatDate = (dateVariable: string | number | Date) => {
  const date = new Date(dateVariable);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const truncateString = (str: string): string => {
  const maxLength = 15;
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
};

// function truncateString(str: string): string {
//   const maxLength = 15;
//   return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
// }
