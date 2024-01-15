const getHashtags = async () => {
  const hashtags = await fetch("http://localhost:8123/v1/search/hashtags");
  return hashtags.json();
};

export default getHashtags;
