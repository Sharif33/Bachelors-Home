const formatDate = (date: string) => {
  const options = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return options;
};

export default formatDate;
