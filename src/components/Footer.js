import React from "react"
import SocialLinks from "../constants/socialLinks"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <Link to="/">
            <span> Marcelo Brito</span>
          </Link>{" "}
          all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
