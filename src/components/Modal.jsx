import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ open, onClose, children }) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <React.Fragment>
            <div className="modal__overlay" onClick={onClose}>
                <div className="modal">
                    {children}
                </div>
            </div>
        </React.Fragment>,
        document.getElementById("modal-root")
    );
}
