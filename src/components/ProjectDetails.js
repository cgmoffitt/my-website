import React, { useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Skill from './Skill'


function DemoCarousel() {

    return (

        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            transitionTime={1500}
            stopOnHover={true}
            showThumbs={false}
            showStatus={false}
        >
            <div>
                <img
                    src={'/website-assets/aispy/home-screen.png'}
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div>
                <img
                    src={'/website-assets/aispy/home-screen.png'}
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div>
                <img
                    src={'/website-assets/aispy/home-screen.png'}
                    style={{ objectFit: 'contain' }}
                />
            </div>
        </Carousel>



    );
}

function ScreenShotCarousel({ screenshots }) {

    return (

        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            transitionTime={1000}
            stopOnHover={true}
            showThumbs={false}
            showStatus={false}
        >
            {screenshots.map(screenshot =>
                <div className="bg-gray-100">
                    <img
                        src={`/website-assets/${screenshot}`}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>)
            }

        </Carousel>



    );
}

export default function ProjectDetails({ project, skillsLibrary }) {
    const { image, name, description, skills, screenshots, link, features } = project

    return (
        <div className="w-1/2 h-4/6 bg-white absolute left-0 top-0 bottom-0 right-0 m-auto">
            <div className={`w-auto h-1/2`}>
                <ScreenShotCarousel screenshots={screenshots} />
            </div>
            <div className="h-1/2">
                <div className="h-full flex flex-col items-start m-2">
                    <p className="stix-reg font-bold text-lg">{name}</p>
                    <div className="flex">
                        {skills.map((skill, index) => <Skill key={index} skill={skillsLibrary[skill]} />)}
                    </div>
                    <p className="stix-reg text-sm my-2 w-full">{description}</p>
                    <p className="stix-reg text-sm my-2 w-full font-bold">Features:</p>
                    {features.map((feature, index) =>
                        <li key={index} className="stix-reg text-sm font-light w-full">
                            {feature}
                        </li>
                    )}
                    <a className="stix-reg text-xs text-blue-700 underline my-5" href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                </div>
            </div>
        </div>
    )
}