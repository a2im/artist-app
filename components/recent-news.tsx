import PostPreview from './post-preview'

export default function RecentNews({ posts }) {
  return (
    <section>
    <div className="mygrow LiberaBorder max-w-4xl mx-auto">
      <h2 className="grow text-5xl md:text-6xl font-bold leading-tight">
        Recent News
      </h2>
      <hr className="dotted"></hr>
      <div className="grid grid-cols-0 lg:gap-x-10 gap-y-5 md:gap-y-10 mb-3 p-5">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </div>
    </section>
  )
}
