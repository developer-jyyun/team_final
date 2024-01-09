const getPackages = async () => {
  const result = await fetch("http://localhost:8123/v1/packages/top-views");

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  return result.json();
};
export default getPackages;
