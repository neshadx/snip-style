
import React from 'react'
import { Link } from 'react-router-dom'

const Tool = ({ name, route }) => {
    return (
        <Link className="tool" to={`/${route}`}>
            {name}
        </Link>
    )
}

export default Tool

