import * as React from "react"
import { graphql } from "gatsby"
import { navigate } from "gatsby"

// Components
import CaseStudyHero from "../components/caseStudyHero/caseStudyHero.comp"

// Styles
import "./styles/caseStudies.styles.scss"

const CaseStudy = ({data, children}) => {

  return (
    <main>
      <header>
        <button onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0B7A75"><path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z"/></svg>
          Back
        </button>
        <hr />
      </header>
      <CaseStudyHero data={data.mdx.frontmatter} />
      <hr />
      <div className="cs-content">
        {children}
      </div>
    </main>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        company
        companyURL
        role
        expertise
        duration
        featureImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default CaseStudy

export const Head = () => <title>Case Study</title>
