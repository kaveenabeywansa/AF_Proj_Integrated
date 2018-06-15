import React from "react";

import {Header} from "./Header";
import {Sidebar} from "./Sidebar";


export class Root extends React.Component {
    render() {
        return (
            <div >
                
                    <div >
                        <Header />
        
                    </div>
                    <div >
                   {/*dapan side bar eka*/}
                    </div>
                    
                    <div >
                        {this.props.children}
                    </div>
            </div>
        );
    }
}
