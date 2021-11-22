const toLocalDate = (date) => {
  const local = new Date(date);
  const localDate = local.toLocaleDateString();
  return localDate;
};

export default toLocalDate;
