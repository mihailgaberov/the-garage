import React, { FunctionComponent } from 'react';

import { Container } from './styles';

const Menu: FunctionComponent = () => {
  return (
    <Container viewBox="0 0 100 80" width="40" height="40">
      <rect width="100" height="20" rx="8" />
      <rect y="30" width="100" height="20" rx="8" />
      <rect y="60" width="100" height="20" rx="8" />
    </Container>
  );
};

export default Menu;
