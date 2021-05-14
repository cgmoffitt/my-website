import React from 'react'
import Title from '../components/Title'
import Layout from "../components/layout"
import WorkHistoryItem from "../components/WorkHistoryItem"


export default function Experience() {

    return (
        <Layout>
            <div className="ml-20">
                <Title title="Experience" />
                <div className="mt-10">
                    <WorkHistoryItem />
                    <WorkHistoryItem />
                    <WorkHistoryItem />
                    <WorkHistoryItem />
                </div>
            </div>
        </Layout>

    )

}