import getEmailAuth from "@/api/signin/getEmailAuth";
import { useQuery } from "@tanstack/react-query";

const useGetEmailAuthQuery = (email: string, code: string) => {
  return useQuery({
    queryKey: ["email-auth"],
    queryFn: async () => {
      return getEmailAuth(email, code);
    },
    enabled: false,
  });
};

export default useGetEmailAuthQuery;
