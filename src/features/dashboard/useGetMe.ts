import { useQuery } from "@tanstack/react-query";
import axios from "../../facade/axios";

type User =  {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    last_login: string;
}

export const useGetMe = async () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn:  () : Promise<User> =>  axios.get("/me").then((response) => response.data),
    queryKey: ["getMe"],
  });

  return {
    data, isLoading, isError, error
  }
};
