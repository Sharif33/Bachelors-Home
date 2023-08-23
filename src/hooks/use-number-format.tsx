const getLocalNumber = (number = 0) => {
  // Get the user's language
  const userLanguage = navigator.language;

  const options = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    useGrouping: true,
  };

  return new Intl.NumberFormat(userLanguage, options).format(number);
};

export default getLocalNumber;
