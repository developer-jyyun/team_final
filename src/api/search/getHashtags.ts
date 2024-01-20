const getHashtags = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/search/hashtags`,
  );
  return data.json();
};

export default getHashtags;
