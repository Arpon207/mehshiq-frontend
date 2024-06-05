import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../axios";

const useFetch = (queryKey, url) => {
  const { data: { data } = {}, isLoading } = useQuery({
    queryKey: queryKey,
    queryFn: () => {
      return makeRequest.get(url);
    },
  });
  return { data, isLoading };
};

export default useFetch;
