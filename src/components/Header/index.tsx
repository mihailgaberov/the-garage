import React, { FunctionComponent } from 'react';

import { Container } from "./styles";
import Menu from "../Menu";

const Header: FunctionComponent = () => {
  return (
    <Container>
      <Menu />
      <h3>Vehicles</h3>
    </Container>
  );
};

export default Header;
