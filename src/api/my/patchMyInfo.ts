const patchMyInfo = async (myInfo) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/my/info`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: myInfo.phone || "",
          addr1: myInfo.addr1 || "",
          addr2: myInfo.addr2 || "",
          postCode: myInfo.postCode || "",
        }),
      },
    );

    const updatedData = await result.json();
    console.log(updatedData);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default patchMyInfo;
