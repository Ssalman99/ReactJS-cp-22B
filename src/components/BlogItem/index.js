// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="item-container">
      <div className="line">
        <h1 className="heading1">{title}</h1>
        <p className="pera1">{publishedDate}</p>
      </div>
      <p className="pera2">{description}</p>
    </li>
  )
}

export default BlogItem
