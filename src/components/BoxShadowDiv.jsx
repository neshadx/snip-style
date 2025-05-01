import React, { useState } from "react";
import Modal from "./Modal";

const BoxShadowDiv = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function copyToClipboard(string) {
        navigator.clipboard.writeText(string);
        setIsModalOpen(true);
        setTimeout(() => {
            setIsModalOpen(false);
        }, 1000);
    }
    return (
        <React.Fragment>
            <div
                style={props.style}
                className="shadow-box"
                onClick={() => copyToClipboard(props.copy)}
            >
                {`Box ${props.id + 1}`}
            </div>
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {`Box ${props.id + 1} Copied!`}
            </Modal>
        </React.Fragment>
    );
};

export default BoxShadowDiv;
