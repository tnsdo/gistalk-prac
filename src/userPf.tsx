import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import profile from "./assets/profile.png";
import { Data } from "./mockData";

const fetchUserId = async (userId: number): Promise<Data[]> => {
  const { data } = await axios.get<Data[]>(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );
  return data;
};

const Container = styled.div`
  width: 500px;
`;

const ProfileContainer = styled.div`
  display: inline-block;
  margin-top: 20px;
  width: 500px;
`;

const Profile = styled.img`
  width: 50px;
  padding-bottom: 10px;
  margin-right: 700px;
`;

const UserId = styled.div`
  text-align: left;
  font-family: "Pretendard";
  font-size: 30px;
  font-weight: 600;
  color: black;
  padding-bottom: 17px;
`;

const Name = styled.div`
  text-align: left;
  font-family: "Pretendard";
  font-size: 17px;
  font-weight: 600;
  padding-bottom: 20px;
  color: #878787;
`;

const BoardItem = styled.li`
  background-color: #f4f4f4;
  height: auto;
  height: 120px;
  width: 500px;
  margin-bottom: 10px;
  border-radius: 15px;
  align-items: flex-start;
  flex-direction: column;
`;

const BoardTitle = styled.div`
  font-family: "Pretendard";
  font-size: 26px;
  font-weight: 600;
  line-height: 15px;
  text-align: left;
  color: black;
  margin-left: 20px;
  margin-right: 9px;
  padding-top: 23px;
  padding-bottom: 7px;
`;

const BoardBody = styled.div`
  font-family: "Pretendard";
  font-size: 15px;
  text-align: left;
  line-height: 15px;
  margin-left: 20px;
  margin-top: 10px;
  color: black;
`;

const UserPf: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  const postId = Number(userId);

  const { data, error, isLoading } = useQuery<Data[], Error>({
    queryKey: ["post", postId],
    queryFn: () => fetchUserId(postId!),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const firstPost = data?.[0];

  return (
    <Container>
      <ProfileContainer>
        <Profile src={profile} alt="profile" />
        <UserId>{firstPost?.userId}</UserId>
        <Name>Name</Name>
      </ProfileContainer>
      <BoardItem>
        <BoardTitle>Info</BoardTitle>
        <BoardBody>Sincere@april.biz</BoardBody>
        <BoardBody>
          Living in Kulas Light, Apt. 556, Gwenboroughm 92998-3874
        </BoardBody>
      </BoardItem>
    </Container>
  );
};

export default UserPf;
