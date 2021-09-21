import styled from "styled-components";
import CardItem, { IRepo } from "./CardItem";
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

function Repo() {
  // 임시데이터
  let repo_list = [
    {
      repo_idx: 1,
      repo_name: "Helloworld",
      repo_desc: "안녕하세용",
      repo_lang_color: "#2b7489",
      repo_lang: "typescript",
      repo_stars: 5,
      repo_forked: 3,
    },
    {
      repo_idx: 2,
      repo_name: "HBDD",
      repo_desc: "생일축하 🎂",
      repo_lang_color: "#2b7489",
      repo_lang: "typescript",
      repo_stars: 1,
      repo_forked: 3,
    },
    {
      repo_idx: 3,
      repo_name: "miniroom-php",
      repo_desc: "👩‍👩‍👦 나만의 미니홈피, 미니룸!",
      repo_lang_color: "#4f5d95",
      repo_lang: "php",
      repo_stars: 3,
      repo_forked: 1,
    },

    {
      repo_idx: 4,
      repo_name: "MMTH",
      repo_desc: "해커톤 과제를 합시다",
      repo_lang_color: "#f1e05a",
      repo_lang: "javascript",
      repo_stars: 3,
      repo_forked: 1,
    },

    {
      repo_idx: 5,
      repo_name: "Frontend-example",
      repo_desc: "프론트엔드 과제 연습하깅",
      repo_lang_color: "#2b7489",
      repo_lang: "typescript",
      repo_stars: 1,
      repo_forked: 2,
    },

    {
      repo_idx: 6,
      repo_name: "HBDD",
      repo_desc: "생일축하 🎂",
      repo_lang_color: "#e34c25",
      repo_lang: "html",
      repo_stars: 5,
      repo_forked: 3,
    },
  ];

  return (
    <Wrapper>
      <Tap />
      <RepoTop>
        <h2>Pinned</h2>
        <span>Customize your pins</span>
      </RepoTop>
      <RepoWrapper>
        {repo_list?.map((repo: any) => (
          <CardItem repo={repo} />
        ))}
      </RepoWrapper>
    </Wrapper>
  );
}

export default Repo;
