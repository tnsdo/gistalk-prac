import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Home from "./home";

const queryClient = new QueryClient();

const Display = styled.div`
  width: 600px;
  height: 100vh;
  position: relative;
  overflow-y: auto;
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
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Display>
          <Header>Board</Header>
          <BoardList>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BoardList>
          <PostButton>Write My Board ✏️</PostButton>
        </Display>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
