import React from "react";
import { BrowserRouter } from 'react-router-dom';

export class User extends React.Component {
    onNavigateHome() {
        BrowserRouter.push("/home");
    }

    render() {
        return (
            <div style={{color:'red'}}>
                <h3>The User Page</h3>

            </div>
        );
    }
}


