import React from 'react'

export default function Title({title}) {

    return (
        <div className="text-white items-center stix-reg text-8xl flex">
            <span>{title}</span>
            <div className="yellow-line ml-5"></div>
        </div>
    )
}