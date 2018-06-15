import React from "react";
//import { Home }from "./Home";
import { Header } from "./Header";


export class Table extends React.Component {
    render() {
        return (
            <div >

                <div >
                    <h3></h3>
                </div>

                <div >
                    {this.props.children}
                </div>
            </div>
        );
    }
}


