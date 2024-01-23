const deleteWish = async (body: { packageId: number }) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/wishes`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body),
      },
    );

    if (result.status === 401) return { code: 401 };

    const data = await result.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default deleteWish;
