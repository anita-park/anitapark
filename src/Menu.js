import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Home, Code, Heart, Inbox } from "react-feather";
import { Link } from "react-router-dom";

const Menu = () => {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  const Styles = {
    Wrapper: styled.main`
      display: flex;
    `,
  };

  const Navbar = {
    Wrapper: styled.nav`
      flex: 1;

      align-self: flex-start;

      padding: 1rem 3rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      background-color: #242526;
    `,
    Logo: styled.h1`
      padding: 0.5rem 1rem;
      color: #BB86FC;
    `,
    Items: styled.ul`
      display: flex;
      list-style: none;
      color: white;
      text-decoration: none;

    `,
    Item: styled.li`
      padding: 0 1rem;
      cursor: pointer;
      text-decoration: none;

    `,
  };

  const MobileNavbar = {
    Wrapper: styled(Navbar.Wrapper)`
      position: fixed;
      width: 100vw;
      bottom: 0;

      justify-content: center;
      text-decoration: none;
    `,
    Items: styled(Navbar.Items)`
      flex: 1;
      padding: 0 2rem;

      justify-content: space-around;
      text-decoration: none;

    `,
    Item: styled(Navbar.Item)`
      display: flex;
      flex-direction: column;
      align-items: center;

      font-size: 1.2rem;
      text-decoration: none;
    `,
    Icon: styled.span`
    `,
  };

  const CSSReset = createGlobalStyle`
      *, 
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    
      html {
        font-size: 62.5%;
        box-sizing: border-box;
      }
    
      body {
        font-size: 1.4rem;
        font-family: sans-serif;
        text-decoration: none;
      }
    `;
  return (
    <Styles.Wrapper className="MenuBar">
      <CSSReset />
      {isMobile ? (
        <MobileNavbar.Wrapper>
          <MobileNavbar.Items>
            <MobileNavbar.Item>
              <MobileNavbar.Icon>
                <Home size={16} />
              </MobileNavbar.Icon>
              <Link to="/"><p className="MenuFont">Home</p></Link>
            </MobileNavbar.Item>
            <MobileNavbar.Item>
              <MobileNavbar.Icon>
                <Code size={16} />
              </MobileNavbar.Icon>
              <Link to="/projects" className="MenuFont">Projects</Link>
            </MobileNavbar.Item>
            <MobileNavbar.Item>
              <MobileNavbar.Icon>
                <Heart size={16} />
              </MobileNavbar.Icon>
              <Link to="/about" className="MenuFont">About</Link>
            </MobileNavbar.Item>
            <MobileNavbar.Item>
              <MobileNavbar.Icon>
                <Inbox size={16} />
              </MobileNavbar.Icon>
              <Link to="contact" className="MenuFont">Contact</Link>
            </MobileNavbar.Item>
          </MobileNavbar.Items>
        </MobileNavbar.Wrapper>
      ) : (
        <Navbar.Wrapper className="MenuBar">
          <Navbar.Logo>Anita Park</Navbar.Logo>
          <Navbar.Items>
            <Navbar.Item>
              <Link to="/"><p className="MenuFont">Home</p></Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link to="/projects"><p className="MenuFont">Projects</p></Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link to="/about"><p className="MenuFont">About</p></Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link to="/contact"><p className="MenuFont">Contact</p></Link>
            </Navbar.Item>
          </Navbar.Items>
        </Navbar.Wrapper>
      )}
    </Styles.Wrapper>
  );
};

export default Menu;
