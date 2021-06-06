import React from 'react'
import Title from '../components/Title'
import Layout from "../components/layout"
import WorkHistoryItem from "../components/WorkHistoryItem"
import experiences from "../website-assets/experience.json"


export default function Experience() {
    console.log('Experiences', experiences)

    return (
        <Layout>
            <div className="mt-5 md:mt-0 ml-5 md:ml-20">
                <Title title="Experience" />
                <div className="mt-10 pb-24">
                    {Object.keys(experiences).map(experience => 
                        <WorkHistoryItem experience={experiences[experience]}/>
                    )}
                </div>
            </div>
        </Layout>

    )

}