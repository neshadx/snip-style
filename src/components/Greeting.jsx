import React from "react";

const Greeting = ({ title }) => {
    return (
        <div className="greeting">
            <h1>
                Welcome to {title} <span role="img" aria-label="emoji">👋</span>
            </h1>
            <p>
                Discover beautifully crafted CSS {title.toLowerCase()} you can copy in a single click.
                Perfect for your next creative UI!
            </p>
        </div>
    );
};

export default Greeting;
