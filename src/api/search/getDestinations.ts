const getDestinations = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/search/options/destinations`,
  );
  return data.json();
};

export default getDestinations;
