import toLocalDate from "./toLocalDate";

const DATE_UTC = "2011-10-05T23:48:00.000Z";

it("local date", () => {
  const local = toLocalDate(DATE_UTC);
  expect(local).toEqual("06.10.2011");
});
