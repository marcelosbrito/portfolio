import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const About = () => {
  return (
    <Layout>
      <section className="blog-template">
        <div className="blog-content">
          <h2>Tech Enthusiast and Web Developer</h2>
          <h3>My quick story</h3>
          <p>
            <strong>Ever since I received my first PC at the age of 13,</strong>{" "}
            I've been captivated by technology. My journey began with
            programming during high school in technical computer classes. After
            completing high school, I pursued a 2-year degree in electronics
            technology before venturing into the realm of Computer Science at
            the university level.
          </p>
          <p>
            My journey kicked off with C# while using the Genexus platform.
            However, a few years down the road, as I was working as an SQL
            developer,{" "}
            <strong>
              I decided to take a different and independent path in my career.
            </strong>{" "}
            I embarked on{" "}
            <a
              class="about-link"
              href="https://web.archive.org/web/20151027174004/http://comofazerpatchwork.com/"
              target="_blank"
              rel="noreferrer"
            >
              crafting websites
            </a>{" "}
            with WordPress, focusing on generating organic traffic through
            meticulously structured SEO.
          </p>
          <h3>Exploring the digital world</h3>
          <p>
            As my skills grew,{" "}
            <strong>
              I ventured into creating{" "}
              <a
                class="about-link"
                href="https://youtu.be/tWPMtQnEbpo"
                target="_blank"
                rel="noreferrer"
              >
                dropshipping stores
              </a>
            </strong>{" "}
            on both WordPress and Shopify platforms. I also dabbled in freelance
            video editing, mastering tools like Premiere and Photoshop. This
            diverse experience fueled my passion for creativity and led me to
            explore deeper into web development.
          </p>
          <p>
            I took on the challenge of{" "}
            <strong>
              building an e-commerce{" "}
              <a
                class="about-link"
                href="https://littleones.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                pet shop
              </a>
            </strong>{" "}
            using React, harnessing the power of React Hooks (useState,
            useEffect, useStyle), MaterialUI, and CommerceJs/Stripe backend
            APIs. I honed my skills in{" "}
            <strong>
              <a
                class="about-link"
                href="https://mern-client-panel.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                client database management
              </a>{" "}
              (CRUD)
            </strong>{" "}
            using the MERN Stack—MongoDB, Express.js, React, and Node.js. I
            connected to databases with Mongoose, styled with Bootstrap, and
            implemented CD/CI with GitLab. In addition, I developed a{" "}
            <strong>
              <a
                class="about-link"
                href="https://marcelosbrito.github.io/todo-list/"
                target="_blank"
                rel="noreferrer"
              >
                task list application
              </a>
            </strong>{" "}
            using HTML, CSS, and Javascript.
          </p>
          <h3>Leisure pursuits</h3>
          <p>
            Beyond the world of code, you'll often find me immersed in{" "}
            <strong>online gaming,</strong> exploring new{" "}
            <strong>musical horizons,</strong>
            keeping up with <strong>astronomical discoveries,</strong> and
            embarking on invigorating <strong>hikes and trails.</strong>
          </p>
          <Link to="/contact" className="btn">
            contact me
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <SEO title="About" description="About me" />

export default About
