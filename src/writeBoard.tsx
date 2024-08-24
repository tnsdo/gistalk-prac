import React, { useState } from "react";
import styled from "styled-components";

const TitleInput = styled.input`
  width: 500px;
  height: 30px;
  color: black;
  font-weight: 600;
  font-size: 23px;
  font-family: "Pretendard";
  margin-bottom: 10px;
  border: none;

  ::placeholder {
    color: #bababa;
  }
`;

const BodyInput = styled.input`
  width: 500px;
  color: black;
  font-weight: 400;
  font-size: 15px;
  border: none;
  height: 200px;
  padding-bottom: 170px;
  box-sizing: border-box;

  ::placeholder {
    color: #bababa;
  }
`;

const Publish = styled.button`
  border-radius: 0;
  border-color: black;
  background-color: white;
  margin-top: 30px;
  transform: translateX(230%);
`;

const WriteBoard: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = () => {
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <div>
      <TitleInput
        type="text"
        placeholder="Write Title Here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <BodyInput
        type="text"
        placeholder="Write Content Here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Publish onClick={handlePublish}>Publish</Publish>
    </div>
  );
};

export default WriteBoard;
