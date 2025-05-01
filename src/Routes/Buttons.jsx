import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Greeting from "../components/Greeting";
import Button from "../components/Button";
import { buttons } from "../data/buttons";
const Buttons = () => {
    return (
        <div>
            <Navbar />
            <div className="boxShadow_container">
                <Greeting title="BtnSnips" />
                <div className="block-container">
                    {buttons.map((btn) => {
                        return (
                            <Button
                                key={btn.key}
                                id={btn.key}
                                copy={btn.copy}
                            />
                        );
                    })}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Buttons;
