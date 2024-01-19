import getMyOrders from "@/api/my/getMyOrders";
import { useQuery } from "@tanstack/react-query";

const useMyOrdersQuery = (page: number, pageSize: number) => {
  return useQuery({
    queryKey: ["myOrders", page, pageSize],
    queryFn: () => getMyOrders(page, pageSize),
  });
};
export default useMyOrdersQuery;
