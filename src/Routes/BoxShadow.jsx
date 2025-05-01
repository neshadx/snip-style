import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Greeting from "../components/Greeting";
import BoxShadowDiv from "../components/BoxShadowDiv";
import { shadows } from "../data/boxshadow";

const BoxShadow = () => {


    return (
        <div>
            <Navbar></Navbar>
            <div className="boxShadow_container">
                <Greeting title="SnipStyle" />

                <div className="block-container">
                    {shadows.map((shadow) => {
                        return (
                            <BoxShadowDiv
                                key={shadow.key}
                                id={shadow.key}
                                style={shadow.style}
                                copy={shadow.copy}
                            />
                        );
                    })}
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default BoxShadow;
