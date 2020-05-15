import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import { SocialIcon } from 'react-social-icons';
import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const postUrl = `${site.siteMetadata.siteUrl}${frontmatter.path}`;
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}>
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="blog-post-content share-posts">
            <p className="share-description">
              If you liked this post, feel free to share it:
            </p>
            <div className="social-icons">
              <SocialIcon network="twitter" url={`https://twitter.com/intent/tweet?text=${encodeURI(frontmatter.title)}%20by%20%40gadiray%20${postUrl}`} />
              <SocialIcon network="linkedin" url={`https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}&title=${encodeURI(frontmatter.title)}`} />
              <SocialIcon network="facebook" url={`https://www.facebook.com/sharer.php?u=${postUrl}`} />
              <SocialIcon network="reddit" url={`https://www.reddit.com/submit?url=${postUrl}&title=${encodeURI(frontmatter.title)}`} />
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
  }
`