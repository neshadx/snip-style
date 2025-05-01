import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Tool from "../components/Tool";

const index = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className="home__main">
                <h1>SnipStyle</h1>
                <p>Your fastest way to beautiful CSS. Just click & paste.<span role="img" aria-label="emoji">
                🎯
                    </span>
                </p>
            </main>

            <section className="tools">
                <h1>Style Toolbox</h1>

                <div className="tools_tool" >
                    <Tool name="ShadowKit" route="box-shadow" />
                    <Tool name="BtnSnips" route="buttons" />
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default index;
