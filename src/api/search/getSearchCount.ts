const getSearchCount = async (options: string) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/search/count${options}`,
  );
  return data.json();
};

export default getSearchCount;
