const getPackageDetail = async (
  id: number,
  query: string | null,
  cookie?: string,
) => {
  let url;
  if (query) {
    url = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/${id}?departDate=${query}`;
  } else {
    url = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/${id}`;
  }

  try {
    const result = await fetch(url, {
      cache: "no-store",
      credentials: "include",
      headers: {
        Cookie: cookie as string,
      },
    });

    const data = await result.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getPackageDetail;
