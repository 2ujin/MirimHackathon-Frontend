import styled from "styled-components";
import CardItem from "./CardItem";
import Tap from "./Tap";

const Wrapper = styled.div`
  flex: 3.5;
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

const RepoWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function Repo() {
  return (
    <Wrapper>
      <Tap />
      <RepoTop>
        <h2>Pinned</h2>
        <span>Customize your pins</span>
      </RepoTop>
      <RepoWrapper>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </RepoWrapper>
    </Wrapper>
  );
}

export default Repo;
