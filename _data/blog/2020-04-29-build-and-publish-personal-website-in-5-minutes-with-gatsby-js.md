---
template: BlogPost
path: /gatsbyjs-website
date: 2020-04-29T19:54:20.772Z
title: How I created this blog website with Gatsby.js and Netlify
thumbnail: /assets/gatsbyjs.jpg
---
I wanted to share with you how I built this blog website using Gatsby.js and Netlify.

I won't dive in to details like how Gatsby works, I will mainly focus on getting a personal blog site up and running and how to write new blog posts in your site.

## What is Gatsby.js?

[Gatsby.js](https://www.gatsbyjs.org/) is a free open source framework that help you create and develop websites using JAM stack (JavaScript, APIs, and Markup).

Gatsby is one of the most popular [static site generator](https://www.staticgen.com/) nowadays and what's really cool about it is that it uses JavaScript, GraphQL and React.

## **How to get started?**

First and it's really basic, you need to [install Node.js and NPM](https://nodejs.org/) if don't have it already.

Now let's install getsby-cli

```shell
npm install -g gatsby-cli
```

Gatsby has many [starters template](https://www.gatsbyjs.org/starters/?v=2) to boostrap your project, I chose [gatsby-starter-delog](https://www.gatsbyjs.org/starters/W3Layouts/gatsby-starter-delog/) by [W3Layouts](https://github.com/W3Layouts)  because it is very slim, the UI looks good and it has a Netlify CMS integration.

```shell
gatsby new gatsby-starter-delog https://github.com/W3Layouts/gatsby-starter-delog
```

that will clone the repository to your computer, now you can just do:

```shell
cd my-new-blog
gatsby develop
```

\
And you site will be up and running on <http://localhost:8000> !!!

Let's save our blog now to GitHub:

* Create a new repository on Github
* push `my-new-blog` project

  ```shell
  git remote add origin https://github.com/your-username/my-new-blog.git
  git push -u origin master
  ```

## Hosting

Gatsby has many hosting options: [Netlify](https://www.gatsbyjs.org/docs/deploying-to-netlify),[AWS Amplify](https://www.gatsbyjs.org/docs/deploying-to-aws-amplify),[GitHub Pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/),[Surge.sh](https://www.gatsbyjs.org/docs/deploying-to-surge/),[Aerobatic](https://www.gatsbyjs.org/docs/deploying-to-aerobatic/),[ZEIT Now](https://www.gatsbyjs.org/docs/deploying-to-zeit-now/) and more.

I chose [Netlify](https://www.netlify.com/) because of it's popularity and their generous [free tier plan](https://www.netlify.com/pricing/).

First you need to create an account on Netlify

Then click "New site from Git"

Chose the repository we just created and it will setup a Continuous Deployment process for you, every time you will push your code to master, Netlify will deploy your site.

Wait 1-2 minutes, Netlify will build your project and deploy it with an auto generated URL: https://{funny-name}-{hash}.netlify.app 

Your site it published on the web now 🎉🎉🎉

## Domain

This is optional, but you can purchase a domain name you like from a domain name registrar, I chose [GoDaddy](https://www.godaddy.com/) because of it's cheap prices and his good reputation.

To setup your domain name in Netlify:

go to your site dashborad on Netlify -> Domain management -> Add custom domain

Ok now we have a shiny new blog website with some basic template data, let's start customising it with our blog posts content with Netlify CMS.

## Netlify CMS

First, change the repo name in `static/admin/config.yml` to yours: `your-username/my-new-blog`

commit and push it to master

Create GitHub OAuth Client ID:

* Settings -> Developer settings -> OAuth Apps -> Register a new application
* Fill in the next fields

  * Application name: your application name
  * Homepage URL: your app domain name
  * Authorization callback URL: `https://api.netlify.com/auth/done`

You will get a ClientID and a secret, save them because you will use them next

In Netlify go to your site dashboard -> Access Control -> Install provider

Select GitHub and add the ClientID and secret.

Open your browser and go to the address `your-website-domain/admin`\
Click on the login with GitHub button which will redirect you to Netlify CMS where you can create/edit/delete you blog post.

Every time you change a blog post and click publish, Netlify will push a commit to your repository master branch with the update markdown file and it will trigger a new deploy in Netlify.

## Conclusion

This is basically how I built my blog website, I did more customisations in my site but this post was made mainly for showing you how to get started with Gatsby.js, Netlify and Netlify CMS.

Gatsby.js is a rich and powerful eco-system so feel free to explore it as you go and enhance your website.

You can find my blog website GitHub source code [here](https://github.com/GadiRay/gatsby-starter-delog)

I hope you found this post useful and it helped you with building your first blog website 💪
