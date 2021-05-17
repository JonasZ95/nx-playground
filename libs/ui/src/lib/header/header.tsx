import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  const { title } = props;
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
