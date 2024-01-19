const getThemePackages = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/themes`);

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  return result.json();
};

export default getThemePackages;
