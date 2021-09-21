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
  margin-top: 25px;
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
  margin-top: 15px;
`;

function Repo({ repo }: any) {
  // 6개만 기본으로 보여준당
  repo = repo?.slice(0, 6);
  return (
    <Wrapper>
      <Tap />
      <RepoTop>
        <h2>Pinned</h2>
        <span>Customize your pins</span>
      </RepoTop>
      <RepoWrapper>
        {repo?.map((repo: any) => (
          <CardItem repo={repo} />
        ))}
      </RepoWrapper>
    </Wrapper>
  );
}

export default Repo;
