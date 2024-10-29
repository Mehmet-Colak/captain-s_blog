export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date"> Date: {article.date}</p>
          <p className="location">Location: {article.location}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  )
}
