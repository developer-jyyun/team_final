const getConcepts = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/search/options/hashtags`,
  );
  return data.json();
};

export default getConcepts;
