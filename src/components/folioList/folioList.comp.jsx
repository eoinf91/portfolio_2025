import * as React from "react"
import FolioItem from "./folioItem.comp"

// Styles
import './styles/folioList.styles.scss'

const FolioList = ({allData}) => {
  return (
    <div className="folio-list">
      <h2>Case studies</h2>
      {
        allData.nodes.map((node) => (
            <FolioItem
                shortTitle = {node.frontmatter.shortTitle}
                tags = {node.frontmatter.tags}
                intro = {node.frontmatter.intro}
                slug = {node.frontmatter.slug}
                published = {node.frontmatter.publishedDate}
                featureImage = {node.frontmatter.featureImage}
            />
        ))
      }
    </div>
  )
}

export default FolioList