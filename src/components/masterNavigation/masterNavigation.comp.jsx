import * as React from "react"
import { Link } from "gatsby"

// Styles
import './masterNavigation.styles.scss'

const MasterNavigation = () => {
  return (
    <nav>
        <div className="logo">
            <h6>ef.</h6>
        </div>
        <div className="navLinks">
            <Link to="/">Home</Link>
            <Link to="https://www.icloud.com/iclouddrive/0c9nZGSSo56tVqyiaxCwyDfuQ#eoin_feely_designer_resume" target="_blank">CV</Link>
            <a href="mailto:me@eoinfeely.com">Contact</a>
        </div>
    </nav>
  )
}

export default MasterNavigation