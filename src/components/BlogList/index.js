import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {list} = props
  return (
    <div className="blogListCard">
      <div className="profileCard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
        />
        <h1>Wade Warren</h1>
        <h4>Software developer at UK</h4>
      </div>
      <ul className="blogItemsUl">
        {list.map(eachObj => (
          <BlogItem blogList={eachObj} key={eachObj.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
