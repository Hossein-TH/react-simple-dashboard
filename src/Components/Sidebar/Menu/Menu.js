import React from "react";
import styled from "styled-components";
import MenuLink from "./MenuLink";

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`;

const Menu = () => {
  return (
      <Container>
          <MenuLink title="Home" icon={'home'}/>
          <MenuLink title="Deposits" icon={'file-multiple'} active/>
          <MenuLink title="offers" icon={'gift'}/>
          <MenuLink title="Payments" icon={'bank'}/>
          <MenuLink title="Setting" icon={'cog'}/>
      </Container>
  )
};

export default Menu