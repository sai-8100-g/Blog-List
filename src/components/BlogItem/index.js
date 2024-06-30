import './index.css'

const BlogItem = props => {
  const {blogList} = props
  const {title, description, publishedDate} = blogList
  return (
    <>
      <li>
        <div className="titleCard">
          <h1 className="title">{title}</h1>
          <h3 className="date">{publishedDate}</h3>
        </div>
        <p className="details">{description}</p>
      </li>
      <hr />
    </>
  )
}

export default BlogItem
