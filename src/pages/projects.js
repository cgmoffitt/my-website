import React from 'react'
import Title from '../components/Title'
import Layout from "../components/layout"
import ReactIcon from "../website-assets/skills/icons8-react-16.png"
import JavaIcon from "../website-assets/skills/icons8-java-48.png"
import AndroidIcon from "../website-assets/skills/icons8-android-os-100.png"
import SwiftIcon from "../website-assets/skills/icons8-swift-48.png"
import SwiftUiIcon from "../website-assets/skills/icons8-swiftui-48.png"
import TypescriptIcon from "../website-assets/skills/icons8-typescript-48.png"
import PythonIcon from "../website-assets/skills/icons8-python-48.png"
import TensorflowIcon from "../website-assets/skills/tensorflow.svg"
import NodeIcon from "../website-assets/skills/nodejs-icon.svg"
import projects from "../website-assets/projects.json"

const skillsLibrary = {
    react: {
        icon: ReactIcon,
        label: "React.js"
    },
    node: {
        icon: NodeIcon,
        label: "Node.js"
    },
    java: {
        icon: JavaIcon,
        label: "Java"
    },
    android: {
        icon: AndroidIcon,
        label: "Android"
    },
    swift: {
        icon: SwiftIcon,
        label: "Swift"
    },
    swiftui: {
        icon: SwiftUiIcon,
        label: "SwiftUI"
    },
    typescript: {
        icon: TypescriptIcon,
        label: "Typescript"
    },
    python: {
        icon: PythonIcon,
        label: "Python"
    },
    tensorflow: {
        icon: TensorflowIcon,
        label: "Tensorflow"
    },
    
}


const Project = ({project}) => {
    const {image, name, description, skills} = project
    return (
        <div className="project-card h-96 w-80 bg-white m-10 flex flex-col">
            <div className={`bg-${image} bg-gray-100 bg-center bg-contain bg-no-repeat w-full h-1/2`}>

            </div>
            <div className="h-1/2">
                <div className="h-full flex flex-col items-start m-2">
                    <p className="stix-reg font-bold text-lg">{name}</p>
                    <div className="flex">
                        {skills.map((skill, index) => <Skill key={index} skill={skillsLibrary[skill]}/>)}
                    </div>
                    <p className="stix-reg text-sm my-2">{description}</p>
                    {/* <p className="stix-reg text-xs justify-self-end mt-auto mb-3">Read more ></p> */}
                </div>
            </div>

        </div>
    )
}

const Skill = ({skill}) => {
    const {icon, label} = skill
    return (
        <div className="flex flex-none border border-black rounded-md items-center mr-1">
            <div className="w-3 h-3"> 
                <img src={icon}></img>
            </div>
            
            <div className="stix-reg text-xs px-0.5">{label}</div>
        </div>
    )
}

export default function Projects() {
    console.log('Projects', projects)
    return (
        <Layout>
            <div className="mt-5 md:mt-0 ml-5 md:ml-20">
                <Title title="Projects" />
                <div className="mr-20 flex flex-wrap flex-row justify-center space-between">
                    {Object.keys(projects).map(projectName => <Project project={projects[projectName]}/>)}
                </div>
            </div>
        </Layout>

    )

}