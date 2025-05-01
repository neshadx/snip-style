import React, { useState } from "react";
import Modal from "./Modal";

const Button = (props) => {
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
            <button
                className={`btn btn-${props.id}`}
                onClick={() => copyToClipboard(props.copy)}
            >
                {`Button ${props.id}`}
            </button>
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {`Button ${props.id} Copied!`}
            </Modal>
        </React.Fragment>
    );
};

export default Button;
