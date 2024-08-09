export const formatMyDate = (date) => {
  // Check if the input is a string and parse it into a Date object
  if (typeof date === "string" || date instanceof String) {
    date = new Date(date);
  }

  // Ensure the date is valid
  if (isNaN(date)) {
    return "Invalid Date";
  }

  let options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate;
};
