import { useOktaAuth } from '@okta/okta-react';
import React from 'react';
import { Container, Menu } from 'semantic-ui-react';


const Navbar = () => {
  const { authState, authService } = useOktaAuth();
  const login = async () => authService.login('/');
  const logout = async () => authService.logout('/');

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header href="/">

          </Menu.Item>

          <nav className="navbar  navbar-light fixed-bottom  bg-dark ">

          {authState.isAuthenticated && <Menu.Item id="profile-button" as="a" href="/profile">Profile</Menu.Item>}
          {authState.isAuthenticated && <Menu.Item id="logout-button" as="a" onClick={logout}>Logout</Menu.Item>}
          {!authState.isPending && !authState.isAuthenticated && <Menu.Item as="a" onClick={login}>Login</Menu.Item>}
        
          </nav>
        </Container>
      </Menu>
    </div>
  );
};


export default Navbar;