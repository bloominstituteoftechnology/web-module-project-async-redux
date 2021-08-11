import React from 'react'

export default function Chapter(props) {
    const { chapter: { name_complex } } = props;
    return (
        <li>
            {name_complex}
        </li>
    )
}
