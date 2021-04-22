import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from '../components/about'
import Navbar from '../components/Navbar'

const IndexPage = () => (
  <Layout>
    <About />
  </Layout>
    
)

export default IndexPage

