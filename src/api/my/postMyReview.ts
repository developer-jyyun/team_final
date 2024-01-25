const postMyReview = async (
  body: {
    content: string;
    productScore: number;
    scheduleScore: number;
    guideScore: number;
    appointmentScore: number;
  },
  id: number,
) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/reviews/orders/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body),
      },
    );

    const data = await result.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default postMyReview;
