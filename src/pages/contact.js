import React, {useState, useEffect, useRef} from 'react'
import Title from '../components/Title'
import Layout from "../components/layout"
import LinkedInIcon from "../website-assets/contact-icons/linkedin-brands.png"
import InstagramIcon from "../website-assets/contact-icons/instagram-square-brands.png"
import GitHubIcon from "../website-assets/contact-icons/github-square-brands.png"

export default function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [submitClicking, setSubmitClicking] = useState(false)
    const [submitAttempted, setSubmitAttempted] = useState(false)

    //Add script for emailing
    useEffect(() => {
        setSubmitAttempted(false)
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://smtpjs.com/v3/smtp.js";
        document.head.appendChild(script);
    }, [])

    function handleSubmit(event){

        console.log(name, email, message)

        window.Email.send({
            Host : "smtp.elasticemail.com",
            Username : "chris.moffitt16@gmail.com",
            Password : "",
            To : 'cmoffitt@stanford.edu',
            From : 'chris.moffitt16@gmail.com',
            Subject : `MESSAGE FROM WEBSITE. Name: ${name}, Email: ${email}`,
            Body : message
        }).then(message => {
            if (message === "OK"){
                alert("Your message was sent successfully. Thanks for reaching out! My usual response time is < 48 hours. Chat with you soon!")
            }
        })
        setSubmitAttempted(true)

        event.preventDefault();
    }

    return (
        <Layout>
            <div className="ml-20">
                <Title title="Contact" />
                <div className="mr-20 mt-10 flex">
                    <div className="flex flex-col w-1/2 stix-reg font-bold yellow-theme text-8xl">
                        <p>Let's</p>
                        <p>Build</p>
                        <p>Something</p>
                        <p>Amazing</p>
                        <p>Together.</p>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="flex items-center justify-between mb-2">
                            <span className="stix-reg text-white ">CONTACT FORM</span>
                            <div className="yellow-line small ml-2"></div>
                        </div>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <input
                                className={`border border-white h-10 px-3 w-full background-grey text-white stix-reg mb-2 ${submitAttempted ? 'failed-attempt': ''}`}
                                placeholder="Name"
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                            <input
                                className={`border border-white h-10 px-3 w-full background-grey text-white stix-reg mb-2 ${submitAttempted ? 'failed-attempt': ''}`}
                                placeholder="Email"
                                type="text"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <textarea
                                className={`border border-white h-44 px-3 w-full background-grey text-white stix-reg mb-2 ${submitAttempted ? 'failed-attempt': ''}`}
                                placeholder="Message"
                                type="text"
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                required
                            />
                            <div className={`flex items-center justify-between mb-2`}>
                                <div className="yellow-line small mr-2"></div>
                                <div 
                                    className={`border p-1 yellow-border ${submitClicking ? 'bg-yellow-200' : 'background-grey'}`}
                                    onMouseDown={() => {
                                        if (name === "" || email === "" || message === ""){
                                            setSubmitAttempted(true)
                                            console.log("insufficient")
                                        }
                                        console.log('clicking')
                                        setSubmitClicking(true)}}
                                    onMouseUp={() => setSubmitClicking(false)}
                                >
                                    <input type="submit" value="SUBMIT" className={`stix-reg text-white cursor-pointer ${submitClicking ? 'bg-yellow-200' : 'background-grey'}`}/>
                                </div>
                            </div>
                        </form>
                        <p className="stix-reg font-bold text-white">E-MAIL: cmoffitt@stanford.edu</p>
                        <div className="flex mt-2">
                            <a href="https://www.linkedin.com/in/chrisgmoffitt/" rel="noopener noreferrer" target="_blank">
                                <img className="h-6 w-6 mr-2" src={LinkedInIcon}/>
                            </a>
                            <a href="https://www.instagram.com/chris__moffitt/" rel="noopener noreferrer" target="_blank">
                                <img className="h-6 w-6 mr-2" src={InstagramIcon}/>
                            </a>
                            <a href="https://github.com/cgmoffitt/" rel="noopener noreferrer" target="_blank">
                                <img className="h-6 w-6 mr-2" src={GitHubIcon}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )

}


/*

602C08AB6B24B9E2B3D595C2998E02E3CAC7


*/