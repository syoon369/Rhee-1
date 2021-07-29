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
    font-weight: bold;
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
        <Span current={pathname === "/Rhee/"}>
            <SLink to="/Rhee/">
                <Img src={mainLogo} />
            </SLink>
        </Span>
        <List>
            <Item current={pathname === "/Rhee/community"} key="1">
                <SLink to="/Rhee/community">community</SLink>
            </Item>
            <Item current={pathname === "/Rhee/editorial"} key="2">
                <SLink to="/Rhee/editorial">editorial</SLink>
            </Item>
            <Item current={pathname === "/Rhee/about"} key="3">
                <SLink to="/Rhee/about">about</SLink>
            </Item>
            <Item current={pathname === "/Rhee/store"} key="4">
                <SLink to="/Rhee/store">store</SLink>
            </Item>
            <Item current={pathname === "/Rhee/board"} key="5">
                <SLink to="/Rhee/board">board</SLink>
            </Item>
        </List>
    </Header>
));