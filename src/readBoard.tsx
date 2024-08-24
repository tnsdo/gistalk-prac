import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Data } from "./mockData";

const fetchPostById = async (id: number): Promise<Data> => {
  const { data } = await axios.get<Data>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return data;
};

const Container = styled.div`
  width: 500px;
`;

const Title = styled.div`
  font-family: "Pretendard";
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  padding-bottom: 10px;
`;

const Body = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
`;

const UserId = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: #878787;
  padding-bottom: 10px;
`;

const ReadBoard: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const postId = Number(id);

  const { data, error, isLoading } = useQuery<Data, Error>({
    queryKey: ["post", postId],
    queryFn: () => fetchPostById(postId!),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <Title>{data?.title}</Title>
      <UserId>Written by {data?.userId}</UserId>
      <Body>{data?.body}</Body>
    </Container>
  );
};

export default ReadBoard;
