import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Blog = ({ id, title, image, date, category, slug, desc }) => {
    
const getImageUrl = (image) => {
  if (!image) return null
  
  // thumbnail já tem URL completa (Cloudinary ou local)
  const thumbnail = image.formats?.thumbnail?.url || image.formats?.small?.url
  if (thumbnail?.startsWith("http")) return thumbnail
  
  // url principal absoluta
  if (image.url?.startsWith("http")) return image.url
  
  // url relativa — só em dev
  if (typeof window !== "undefined" && window.location.hostname !== "localhost") return null
  return `http://localhost:1337${image.url}`
}

  const imageUrl = getImageUrl(image)

  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
      <article>
        {imageUrl && (
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
  image: PropTypes.object,
}

export default Blog