const putMyPassword = async (password: string) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/my/password`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      },
    );
    const updatedData = await result.json();
    console.log("updated password:", updatedData);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default putMyPassword;
