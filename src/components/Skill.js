import React from 'react'

export default function Skill({ skill }) {
    const { icon, label } = skill
    return (
        <div className="flex flex-none border border-black rounded-md items-center mr-1">
            <div className="w-3 h-3">
                <img src={icon}></img>
            </div>

            <div className="stix-reg text-xs px-0.5">{label}</div>
        </div>
    )
}