import "./App.css";

import styled from "styled-components";

import { Data } from "./mockData";

interface ShowDataProps {
  data: Data;
}

const BoardItem = styled.li`
  background-color: #f4f4f4;
  height: auto;
  height: 80px;
  width: 500px;
  margin-bottom: 10px;
  border-radius: 15px;
  align-items: flex-start;
  flex-direction: column;
`;

const BoardTitle = styled.div`
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 600;
  line-height: 15px;
  text-align: left;
  color: black;
  margin-left: 20px;
  margin-right: 9px;
  padding-top: 13px;
`;

const BoardBody = styled.div`
  font-family: "Pretendard";
  font-size: 10px;
  text-align: left;
  line-height: 15px;
  margin-left: 20px;
  margin-top: 5px;
  color: black;
`;

const ShowData: React.FC<ShowDataProps> = ({ data }) => (
  <div>
    <BoardItem>
      <BoardTitle>{data.title}</BoardTitle>
      <BoardBody>{data.body}</BoardBody>
    </BoardItem>
  </div>
);

export default ShowData;
