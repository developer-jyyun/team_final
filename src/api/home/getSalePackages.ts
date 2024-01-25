const getSalePackages = async (
  page: number,
  nation: string,
  continent: string,
) => {
  let url;
  if (nation !== "전체") {
    url = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/top-views?continentName=${continent}&nationName=${nation}&page=${page}&pageSize=5`;
  } else {
    url = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/top-views?page=${page}&pageSize=5`;
  }

  try {
    const result = await fetch(url, {
      credentials: "include",
      cache: "no-store",
    });
    return await result.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default getSalePackages;
