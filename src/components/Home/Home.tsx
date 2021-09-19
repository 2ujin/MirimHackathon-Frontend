import styled from "styled-components";
import Profile from "../Profile/Profile";
import Repo from "../Repo/Repo";
import Top from "../Top/Top";

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const MainWrapper = styled.div`
  display: inline-flex;
  width: 80%;
  height: 100vh;
  padding: 20px 40px;
`;

function Home() {
  return (
    <Wrapper>
      <Top />
      <MainWrapper>
        <Profile />
        <Repo />
      </MainWrapper>
    </Wrapper>
  );
}

export default Home;
