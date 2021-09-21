import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #d0d7de;
  border-radius: 6px;
  width: 49%;
  height: 150px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  /* padding: 10px; */
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
`;

const Icon = styled.img`
  width: 20px;
`;

const CardBottom = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Title = styled.span`
  margin-left: 7px;
  color: #0969da;
  font-weight: bold;
  font-size: 17px;
`;

const Badge = styled.div`
  padding: 3px 7px;
  font-size: 13px;
  border: 1px solid #d0d7de;
  border-radius: 2em;
  color: ${(props) => props.theme.textGray};
  font-weight: 700;
  text-align: center;
  margin-right: 15px;
`;

const TopWrapper = styled.div``;
const CardDesc = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 13px;
  color: ${(props) => props.theme.textGray};
  font-size: 15px;
`;

const LangColor = styled.div`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.color};
`;

const Text = styled.span`
  color: ${(props) => props.theme.textGray};
  margin-left: 3px;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export interface IRepo {
  repo?: {
    repo_idx: number;
    repo_name: string;
    repo_desc: string;
    repo_lang_color: string;
    repo_lang: string;
    repo_stars: number;
    repo_forked: number;
  };
}

function CardItem({ repo }: IRepo) {
  console.log(repo);
  return (
    <Wrapper>
      <TopWrapper>
        <CardTop>
          <div>
            <Icon src={`${process.env.PUBLIC_URL}/assets/icon/repo.svg`} />
            <Title>{repo?.repo_name}</Title>
          </div>
          <div>
            <Badge>Public</Badge>
            <Icon src={`${process.env.PUBLIC_URL}/assets/icon/grabbee.svg`} />
          </div>
        </CardTop>
        <CardDesc>{repo?.repo_desc}</CardDesc>
      </TopWrapper>
      <CardBottom>
        <Wrap>
          <LangColor color={repo?.repo_lang_color} />
          <Text>{repo?.repo_lang}</Text>
        </Wrap>
        <Wrap>
          <Icon src={`${process.env.PUBLIC_URL}/assets/icon/star.svg`} />
          <Text>{repo?.repo_stars}</Text>
        </Wrap>
        <Wrap>
          <Icon src={`${process.env.PUBLIC_URL}/assets/icon/fork.svg`} />
          <Text>{repo?.repo_forked}</Text>
        </Wrap>
      </CardBottom>
    </Wrapper>
  );
}

export default CardItem;
