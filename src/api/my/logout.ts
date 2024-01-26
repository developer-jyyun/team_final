const logout = async () => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/logout`,
      {
        method: "POST",
        credentials: "include",
      },
    );

    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }

    const data = await result.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default logout;
