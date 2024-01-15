const getPackageDetail = async (id: number, query?: string | null) => {
  let url;
  if (query) {
    url = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/${id}?departDate=${query}`;
  } else {
    url = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/${id}`;
  }
  const result = await fetch(url, {
    cache: "no-store",
  });

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  return result.json();
};

export default getPackageDetail;
