import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Board from "../Routes/Board";

class Route extends Router{
    state={
        islogin:false
    }

    render(){
        return(
    <Router>
        <>
            <Switch> {/* Switch : 한 번에 오직 하나의 Route만 render */}
                <Route path="/" exact component={Home} /> {/*해당 path로 가면 Home 출력 */}
                <Route path="/board" component={Board} />
                <Redirect from="*" to="/" /> {/* 일치하는 Route가 없으면 무조건 Home(/)으로 보냄 */}
            </Switch>
        </>
    </Router>
        )
    }
}

export default Route;