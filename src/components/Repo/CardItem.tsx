import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #d0d7de;
  border-radius: 6px;
  width: 46%;
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
`;

const Badge = styled.div`
  padding: 3px 7px;
  font-size: 13px;
  border: 1px solid #d0d7de;
  border-radius: 2em;
  color: #57606a;
  font-weight: 700;
  text-align: center;
  margin-right: 15px;
`;

const TopWrapper = styled.div``;
const CardDesc = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 10px;
  color: #57606a;
`;

const LangColor = styled.div`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #2b7489;
`;

const Text = styled.span`
  color: #57606a;
  margin-left: 3px;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

function CardItem() {
  return (
    <Wrapper>
      <TopWrapper>
        <CardTop>
          <div>
            <Icon src={`${process.env.PUBLIC_URL}/assets/icon/repo.svg`} />
            <Title>HBDD</Title>
          </div>
          <div>
            <Badge>Public</Badge>
            <Icon src={`${process.env.PUBLIC_URL}/assets/icon/grabbee.svg`} />
          </div>
        </CardTop>
        <CardDesc>생일축하 🎂</CardDesc>
      </TopWrapper>
      <CardBottom>
        <Wrap>
          <LangColor />
          <Text>Typescript</Text>
        </Wrap>

        <Wrap>
          <Icon src={`${process.env.PUBLIC_URL}/assets/icon/star.svg`} />
          <Text>5</Text>
        </Wrap>

        <Wrap>
          <Icon src={`${process.env.PUBLIC_URL}/assets/icon/fork.svg`} />
          <Text>3</Text>
        </Wrap>
      </CardBottom>
    </Wrapper>
  );
}

export default CardItem;
