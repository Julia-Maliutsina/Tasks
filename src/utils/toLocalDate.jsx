const toLocalDate = (date) => {
  if (date.length) {
    const local = new Date(date);
    const localDate = local.toLocaleDateString();
    return localDate;
  } else {
    return date;
  }
};

export default toLocalDate;
