import { useQuery } from "@tanstack/react-query";
import getThemeDetail from "@/api/theme/getThemeDetail";

const useThemeQuery = (
  id: string | string[],
  sortBy: string,
  page: number,
  pageSize: number,
) => {
  return useQuery({
    queryKey: ["theme", id, sortBy, page, pageSize],
    queryFn: () => getThemeDetail(Number(id), sortBy, page, pageSize),
  });
};

export default useThemeQuery;
