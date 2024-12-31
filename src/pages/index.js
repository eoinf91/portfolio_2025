import * as React from "react"
import { graphql } from "gatsby";
import { Link } from "gatsby";

// Components
import Hero from "../components/hero/hero.comp"
import FolioList from "../components/folioList/folioList.comp"
import MasterNavigitaion from "../components/masterNavigation/masterNavigation.comp"

// Styles
import "./styles/theme.scss"


const IndexPage = ({ data }) => {
  return (
    <main>
      <MasterNavigitaion />
      <Hero />
      < hr />
      <FolioList 
        allData = {data.allMdx}
      />
      <hr />
      <footer>
        <p className="small">&copy; Eoin Feely, 2025</p>
        <Link to="https://www.linkedin.com/in/eoinbfeely/" target="_blank">LinkedIn</Link>
      </footer>
    </main>
  )
}

export const query = graphql `
  query {
    allMdx(sort: {frontmatter: { publishedDate: DESC }}) {
      nodes {
        frontmatter {
          shortTitle
          tags
          intro
          slug
          publishedDate
          featureImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Home Page</title>
