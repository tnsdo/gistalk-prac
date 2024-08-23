import "./App.css";

import styled from "styled-components";

import { mockData } from "./mockData";
import ShowData from "./showData";

const BoardList = styled.div`
  align-items: center;
  list-style: none;
  margin-top: 30px;
`;

const Home = () => {
  return (
    <BoardList>
      {mockData.map((post) => (
        <ShowData key={post.id} data={post} />
      ))}
    </BoardList>
  );
};

export default Home;
