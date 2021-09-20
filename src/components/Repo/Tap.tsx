import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 70px;
  border-bottom: 2px solid #d4d4d4;
  div {
    display: flex;
    align-items: center;
    padding: 6px 30px;
  }

  .select {
    border-bottom: 3px solid #fd8c73;
    font-weight: bold;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 8px;
`;

function Tap() {
  return (
    <Wrapper>
      <div className="select">
        <Icon src={`${process.env.PUBLIC_URL}/assets/icon/overview.svg`} />
        Overview
      </div>
      <div>
        <Icon src={`${process.env.PUBLIC_URL}/assets/icon/repo.svg`} />
        Repositories
      </div>
      <div>
        <Icon src={`${process.env.PUBLIC_URL}/assets/icon/projects.svg`} />
        Project
      </div>
      <div>
        <Icon src={`${process.env.PUBLIC_URL}/assets/icon/packages.svg`} />
        Packages
      </div>
    </Wrapper>
  );
}

export default Tap;
