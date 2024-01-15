const hashtagStyle = (rank: number) => {
  const fontSize = `text-[${10 + (10 - rank)}px]`;
  const fontWeight = rank < 3 ? "font-bold" : "font-normal";

  return { fontSize, fontWeight };
};

export default hashtagStyle;
