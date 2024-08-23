import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Post from "./getPost";
import Home from "./home";

const Display = styled.div`
  width: 600px;
  height: 100vh;
  position: relative;
`;

const Header = styled.div`
  font-family: "Goblin One";
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: 50px;
  color: black;
`;

const BoardList = styled.ul`
  align-items: center;
  list-style: none;
  margin-top: 30px;
`;

const PostButton = styled.button`
  border-radius: 0;
  border-color: black;
  background-color: white;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`;

const App = () => {
  return (
    <Display>
      <Header>Board</Header>
      <BoardList>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Post />} />
          </Routes>
        </Router>
      </BoardList>
      <PostButton>Write My Board ✏️</PostButton>
    </Display>
  );
};

export default App;
