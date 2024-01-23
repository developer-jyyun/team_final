const postSignup = async (body: {
  email: string;
  username: string;
  password: string;
  isTermsAgreed: boolean;
}) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body),
      },
    );

    // console.log(result.);

    const data = await result.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default postSignup;
