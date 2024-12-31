import * as React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

// Styles
import "./styles/folioItem.styles.scss"

const FolioItem = ({shortTitle, tags, intro, slug, published, featureImage}) => {

    const image = getImage(featureImage)

  return (
    <div className="folio-item">
        <div class="image">
            <GatsbyImage image={image} alt="Feature image" />
        </div>
        <div className="content">
            <h5>{ tags }</h5>
            <div className="title-detail">
                <h3>{ shortTitle }</h3>
                <p className="small">Written by Eoin Feely, on { published }</p>
            </div>
            <p>{ intro }</p>
        </div>
        <Link to={slug}>
            Read more 
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0B7A75"><path d="m576-288-51-51 105-105H192v-72h438L525-621l51-51 192 192-192 192Z"/></svg>
        </Link>
    </div>
  )
}

export default FolioItem