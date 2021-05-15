import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import mainLogo from "../img/main_Logo.png";

const Header = styled.header`
    color: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 78px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color: white;
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
    position:absolute;
    right: 0;
`;

const Item = styled.li`
    width: 150px;
    height: 50px;
    font-size: 18px;
    text-align: center;
    :last-child{
        margin-right: 30px;
    }
`;

const Span = styled.span`
    width: 200px;
    font-size: 18px;
    text-align: center;
    position: absolute;
    left: 30px;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    :first-child{
        height: 100%;
    }
`;

const Img = styled.img`
    width: 200px;
    background-repeat: no-repeat;
`;

export default withRouter(({ location: { pathname } }) => (
    <Header>
        <Span current={pathname === "/"}>
            <SLink to="/">
                <Img src={mainLogo} />
            </SLink>
        </Span>
        <List>
            <Item current={pathname === "/community"}>
                <SLink to="/community">community</SLink>
            </Item>
            <Item current={pathname === "/editorial"}>
                <SLink to="/editorial">editorial</SLink>
            </Item>
            <Item current={pathname === "/about"}>
                <SLink to="/about">about</SLink>
            </Item>
            <Item current={pathname === "/store"}>
                <SLink to="/store">store</SLink>
            </Item>
        </List>
    </Header>
));