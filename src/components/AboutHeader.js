import React, {useState, useEffect} from 'react'

export default function AboutHeader(){
    const titles = [
        <h2 className="stix-reg yellow-theme text-4xl fade-in">: Software Engineer</h2>, 
        <h2 className="stix-reg yellow-theme text-4xl fade-in">: Product Manager</h2>, 
        <h2 className="stix-reg yellow-theme text-4xl fade-in">: Chief of Staff</h2>]

    const [curTitle, setCurTitle] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurTitle(prevTitle => (prevTitle + 1) % 3)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="absolute top-40 left-5 md:left-1/2 md:top-1/3">
            <h1 className="stix-reg text-white text-5xl md:text-8xl">Chris Moffitt</h1>
            <div>
                <h2 className="stix-reg yellow-theme text-4xl fade-in-out">: Software Engineer</h2>
                <h2 className="stix-reg yellow-theme text-4xl fade-in-out">: Product Manager</h2> 
                <h2 className="stix-reg yellow-theme text-4xl fade-in-out">: Chief of Staff</h2>
            </div>
            <h2 className="stix-reg grey-theme text-3xl my-12">Turning creative ideas into reality</h2>
        </div>
        
    )
}