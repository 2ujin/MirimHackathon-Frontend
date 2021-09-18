import styled from "styled-components";
import Profile from "../Profile/Profile";
import Repo from "../Repo/Repo";
import Top from "../Top/Top";

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

function Home() {
  return (
    <>
      <Top />
      <MainWrapper>
        <Profile />
        <Repo />
      </MainWrapper>
    </>
  );
}

export default Home;
