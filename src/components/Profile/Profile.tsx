import styled from "styled-components";

const ProfileWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const ProfileImg = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const ProfileName = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 20px;
`;

const Name = styled.div`
  font-size: 26px;
  font-weight: bold; ;
`;

const Id = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: #596069;
  margin-top: 7px;
`;

const Button = styled.button`
  color: #24292f;
  width: 100%;
  border-radius: 6px;
  border: 1px solid;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  color: #24292f;
  border-color: rgb(27 31 36 / 15%);
  background-color: #f6f8fa;
  margin-top: 15px;
`;

const Follow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #596069;
  margin-top: 15px;
  b {
    font-weight: bold;
    color: black;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: left;
  margin-top: 15px;
  div {
    width: 100%;
    margin-top: 8px;
    color: #24292f;
    display: flex;
    align-items: center;
    b {
      font-weight: bold;
      color: black;
    }
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 8px;
`;

function Profile() {
  return (
    <ProfileWrapper>
      <ProfileImg
        src={`${process.env.PUBLIC_URL}/assets/profile.jpeg`}
      ></ProfileImg>
      <ProfileName>
        <Name>YOUJIN LEE</Name>
        <Id>2ujin</Id>
      </ProfileName>
      <Button>Edit profile</Button>
      <Follow>
        <Icon src={`${process.env.PUBLIC_URL}/assets/icon/follow.svg`}></Icon>
        <b>64&nbsp;</b> followers ·&nbsp;<b>52&nbsp;</b> following ·
        <Icon
          style={{ marginLeft: "10px" }}
          src={`${process.env.PUBLIC_URL}/assets/icon/star.svg`}
        ></Icon>
        <b>70</b>
      </Follow>
      <Info>
        <div>
          <Icon
            src={`${process.env.PUBLIC_URL}/assets/icon/company.svg`}
          ></Icon>
          <b>@giftistar</b>
        </div>

        <div>
          <Icon
            src={`${process.env.PUBLIC_URL}/assets/icon/location.svg`}
          ></Icon>
          Seoul, Republic of Korea
        </div>

        <div>
          <Icon src={`${process.env.PUBLIC_URL}/assets/icon/mail.svg`}></Icon>
          suddenlydisappear200@gmail.com
        </div>
      </Info>
    </ProfileWrapper>
  );
}

export default Profile;
