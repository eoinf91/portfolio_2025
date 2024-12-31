import * as React from "react"
import { Link } from "gatsby"

// Styles
import "./caseStudyHero.styles.scss"

const CaseStudyHero = ({data}) => {

  return (
    <div className="cs-hero">
        <div className="heading">
            <h5 className="secondary">Case Study</h5>
            <h1>{data.title}</h1>
        </div>
        <div className="detail">
            <div className="item">
                <h5>Company</h5>
                <Link to={data.companyURL} target="_blank">
                    <p className="large">{data.company}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0B7A75"><path d="m243-192-51-51 429-429H384v-72h360v360h-72v-237L243-192Z"/></svg>
                </Link>
            </div>
            <div className="item">
                <h5>Role</h5>
                <p className="large">{data.role}</p>
            </div>
            <div className="item">
                <h5>Expertise</h5>
                <p className="large">{data.expertise}</p>
            </div>
            <div className="item">
                <h5>Duration</h5>
                <p className="large">{data.duration}</p>
            </div>
        </div>
    </div>
  )
}

export default CaseStudyHero