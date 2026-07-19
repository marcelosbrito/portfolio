import React from "react"
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6"

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon" />,
    url: "https://github.com/marcelosbrito",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon" />,
    url: "https://www.linkedin.com/in/marcelosbrito/",
  },
  {
    id: 3,
    icon: <FaInstagram className="social-icon" />,
    url: "https://www.instagram.com/marceloow__",
  },
  {
    id: 4,
    icon: <FaXTwitter className="social-icon" />,
    url: "https://x.com/_marcelo_brito",
  },
]

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass || ""}`}>
      {data.map(link => (
        <li key={link.id}>
          <a
            href={link.url}
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks