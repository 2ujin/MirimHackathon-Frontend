import styled from "styled-components";
import Tap from "./Tap";

const Wrapper = styled.div`
  flex: 4;
  padding: 10px 50px;
`;

const RepoTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  h2 {
    font-size: 20px;
  }
`;

function Repo() {
  return (
    <Wrapper>
      <Tap />
      <RepoTop>
        <h2>Pinned</h2>
        <span>Customize your pins</span>
      </RepoTop>
    </Wrapper>
  );
}

export default Repo;
