import useSearchCountQuery from "@/hooks/query/useSearchCountQuery";
import useSearchFilterStore from "@/store/useSearchFilterStore";
import { useEffect } from "react";

const useSearchCount = () => {
  const { price, concepts, nations, continents } = useSearchFilterStore();
  const conceptParams = concepts.join();
  const nationsParams = nations.join();
  const continentsParams = continents.join();

  let params = `?maxPrice=${price}0000`;
  if (conceptParams) params += `&hashtags=${conceptParams}`;
  if (nationsParams) params += `&nations=${nationsParams}`;
  if (continentsParams) params += `&continents=${continentsParams}`;

  const { refetch, data } = useSearchCountQuery(params);

  useEffect(() => {
    refetch();
  }, [price, concepts, nations, continents, refetch]);

  return { data, params };
};

export default useSearchCount;
