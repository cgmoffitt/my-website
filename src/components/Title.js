import React from 'react'

export default function Title({title}) {

    return (
        <div className="text-white items-center raanan-bold text-5xl flex">
            <span>{title}</span>
            <div className="yellow-line"></div>
        </div>
    )
}