import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { SocialIcon } from 'react-social-icons';
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.description}</p>
        </div>
        <div className="social-icons">
          <SocialIcon network="twitter" url="https://twitter.com/gadiray" />
          <SocialIcon network="github" url="https://github.com/GadiRay" bgColor="#7f7f7f"/>
          <SocialIcon network="linkedin" url="https://www.linkedin.com/in/gadi-raymond-8646b85a/" />
          <SocialIcon network="email" url="mailto:gadiraymond@gmail.com" />
        </div>
      </div>
    )}
  />
)