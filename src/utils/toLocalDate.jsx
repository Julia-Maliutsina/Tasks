const toLocalDate = (date) => {
  const local = new Date(date);
  const localDate = local.toISOString();
  const localDay = localDate.substr(0, 10);
  return localDay;
};

export default toLocalDate;
