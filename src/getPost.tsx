import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

import { Data } from "./mockData";
import ShowData from "./showData";

const fetchPost = async (): Promise<Data[]> => {
  const { data } = await axios.get<Data[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  console.log("Fetched data:", data);
  return data;
};

const GetPost: React.FC = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Data[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>{posts?.map((post) => <ShowData key={post.id} data={post} />)}</div>
  );
};

export default GetPost;
