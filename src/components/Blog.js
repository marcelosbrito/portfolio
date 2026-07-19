import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  const cloudinaryBase = "https://res.cloudinary.com/dgavhp6sc/image/upload/"
  let imageUrl = image?.url || ""

  if (imageUrl && !imageUrl.startsWith("http")) {
    const hash = image?.hash || imageUrl.split("/").pop()?.replace(/\.\w+$/, "")
    const ext = image?.ext || ".jpg"
    imageUrl = `${cloudinaryBase}${hash}${ext}`
  }

  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
      <article>
        {image?.url && (
          <img src={imageUrl} className="blog-img" alt={title} />
        )}
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Blog