import React from 'react'

export default function Title({title}) {

    return (
        <div className="text-white items-baseline stix-reg text-4xl md:text-8xl flex">
            <span>{title}</span>
            <div className="yellow-line ml-5"></div>
        </div>
    )
}