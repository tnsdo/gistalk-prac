import "./App.css";

import styled from "styled-components";

import { Data, mockData } from "./mockData";

const Display = styled.div`
  width: 600px;
  height: 100vh;
`;

const Header = styled.div`
  font-family: "Goblin One";
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: 50px;
  color: black;
`;

interface ShowDataProps {
  data: Data;
}

const BoardList = styled.ul`
  align-items: center;
  list-style: none;
  margin-top: 30px;
`;

const BoardItem = styled.li`
  background-color: #f4f4f4;
  height: 80px;
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
  line-height: 31.03px;
  text-align: left;
  color: black;
  margin-left: 20px;
  padding-top: 13px;
`;

const BoardBody = styled.div`
  font-family: "Pretendard";
  font-size: 18px;
  text-align: left;
  margin-left: 20px;
`;

interface ShowDataProps {
  data: Data;
}

const ShowData: React.FC<ShowDataProps> = ({ data }) => (
  <BoardItem>
    <BoardTitle>{data.title}</BoardTitle>
    <BoardBody>{data.body}</BoardBody>
  </BoardItem>
);

const App = () => {
  return (
    <Display>
      <Header>Board</Header>
      <BoardList>
        {mockData.map((post) => (
          <ShowData key={post.id} data={post} />
        ))}
      </BoardList>
    </Display>
  );
};

export default App;
