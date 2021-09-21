import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  width: 70%;
  height: 100vh;
  padding: 20px 40px;
  margin-top: 5px;
`;

function Home() {
  const params: any = useParams();
  const [user, setUsers] = useState(null);
  const [repo, serRepos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log(process.env.GITHUB_TOKEN);
      try {
        // .env 파일에 관리해야합니다
        const octokit = new Octokit({
          auth: process.env.GITHUB_TOKEN,
        });

        const _user: any = await octokit.request("GET /users/{username}", {
          username: params.user_name,
        });

        const _repo: any = await octokit.request(
          "GET /users/{username}/repos",
          {
            username: params.user_name,
            sort: "updated",
          }
        );

        setUsers(_user.data);
        serRepos(_repo.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Wrapper>
      <Top />
      <MainWrapper>
        <Profile user={user} />
        <Repo repo={repo} />
      </MainWrapper>
    </Wrapper>
  );
}

export default Home;
