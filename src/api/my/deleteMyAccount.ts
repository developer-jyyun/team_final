const deleteMyAccount = async () => {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/users`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!result.ok) {
      throw new Error(`${result.status}`);
    }

    const data = await result.json();
    console.log("탈퇴", data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default deleteMyAccount;
