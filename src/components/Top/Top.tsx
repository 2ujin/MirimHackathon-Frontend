import styled from "styled-components";
const TopWrapper = styled.div`
  height: 80px;
  background-color: ${(props) => props.theme.darkGray};
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* padding: 5px 10px; */
`;

const LeftWrapper = styled.div`
  flex: 2;
  color: white;
  padding: 10px;
  display: flex;
  padding: 10px;
  align-items: center;
`;

const RightWrapper = styled.div`
  color: white;
  display: flex;
  padding: 10px;
  align-items: center;
`;

const Img = styled.img`
  margin-left: 30px;
`;

const Search = styled.input`
  width: 350px;
  height: 40px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.darkGray};
  border: 1px solid #626a75;
  border-radius: 10px;
  font-size: 16px;
  box-sizing: border-box;
  color: #27282a;
  margin-left: 18px;

  ::placeholder {
    color: #d0d1d1;
    font-size: 20px;
  }
`;

const Text = styled.div`
  margin-left: 10px;
  span {
    margin: 10px;
    font-weight: bold;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`;

const ProfileImg = styled.img`
  width: 30px;
  border-radius: 50% 50%;
  margin-right: 15px;
`;

const Alarm = styled.div`
  position: relative;
`;

const Noti = styled.div`
  position: absolute;
  top: -6px;
  left: 8px;
  z-index: 2;
  width: 13px;
  height: 13px;
  color: #fff;
  background-image: linear-gradient(#54a3ff, #006eed);
  background-clip: padding-box;
  border: 2px solid var(--color-header-bg);
  border-radius: 50%;
`;

function Top({ user }: any) {
  return (
    <TopWrapper>
      <LeftWrapper>
        <Img src={`${process.env.PUBLIC_URL}/assets/logo.svg`}></Img>
        <Search type="text" placeholder="Search or jump to..." />
        <Text>
          <span>Pull requests</span>
          <span>Issues</span>
          <span>Marketplace</span>
          <span>Explore</span>
        </Text>
      </LeftWrapper>
      <RightWrapper>
        <Alarm>
          <Icon src={`${process.env.PUBLIC_URL}/assets/icon/alarm.svg`}></Icon>
          <Noti></Noti>
        </Alarm>
        <Icon src={`${process.env.PUBLIC_URL}/assets/icon/plus.svg`}></Icon>
        <ProfileImg src={user?.avatar_url}></ProfileImg>
      </RightWrapper>
    </TopWrapper>
  );
}

export default Top;
