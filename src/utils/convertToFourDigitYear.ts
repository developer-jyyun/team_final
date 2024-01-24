const convertToFourDigitYear = (travelPeriod: string): string => {
  const parts = travelPeriod.split("~");
  return parts
    .map((part: string) => {
      const [year, month, day] = part.split(".");
      return `20${year}.${month}.${day}`;
    })
    .join("~");
};
export default convertToFourDigitYear;
