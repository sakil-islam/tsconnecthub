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

export const formatDuration = (duration) => {
  if (!duration) return null;

  var hour = Math.floor(duration / 3600)
    .toString()
    .padStart(2, "0");
  var min = Math.floor((duration % 3600) / 60)
    .toString()
    .padStart(2, "0");
  var sec = Math.floor((duration % 3600) % 60)
    .toString()
    .padStart(2, "0");

  const durationString = `${hour}:${min}:${sec}`;

  console.log(durationString);

  return durationString;
};
