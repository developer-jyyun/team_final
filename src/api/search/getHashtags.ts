const getHashtags = async () => {
  const hashtags = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/search/hashtags`,
  );
  return hashtags.json();
};

export default getHashtags;
