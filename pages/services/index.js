import Link from 'next/link'
import Layout from '../../components/Layout'

const importServiceItems = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const jsonFiles = require
    .context('../../content/serviceItems', false, /\.json$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    jsonFiles.map(async (path) => {
      const json = await import(`../../content/serviceItems/${path}`)
      return { ...json, slug: path.substring(0, path.length - 3) }
    })
  )
}

const Service = ({ postsList }) => (
  <Layout>
    {postsList.map((post) => (
      <div key={post.slug} className="post">
        <Link
          href="/blog/post/[slug]"
          as={`/blog/post/${post.slug}`}
          legacyBehavior
        >
          <a>
            <img src={post.attributes.thumbnail} />
            <h2>{post.attributes.title}</h2>
          </a>
        </Link>
      </div>
    ))}
    <style jsx>{`
      .post {
        text-align: center;
      }
      img {
        max-width: 100%;
        max-height: 300px;
      }
    `}</style>
  </Layout>
)

export async function getStaticProps() {
  const postsList = await importServiceItems()

  return {
    props: {
      postsList,
    }, // will be passed to the page component as props
  }
}

export default Service
