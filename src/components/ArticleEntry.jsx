import { useState } from "react"

export default function ArticleEntry({ addArticle, setWriting }) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [date, setDate] = useState("")
  const [location, setLocation] = useState("")
  const [error, setError] = useState(null)

  function submit(e) {
    setError(null)
    e.preventDefault()
    if (!title.trim() || !body.trim() || !date.trim() || !location.trim()) {
      setError("Title, date, location, and body must be supplied")
    } else {
      addArticle({ title, body, date, location })
    }
  }

  function cancel(){
    setWriting(false);
  }

  return (
    <article>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        Date
        <input value={date} onChange={(e) => setDate(e.target.value)} />
        Location
        <input value={location} onChange={(e) => setLocation(e.target.value)} />
        Body
        <textarea
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <p> 
          <button type="submit">Create</button>
          &nbsp;
          <button onClick={cancel}>Cancel</button>
        </p>
      </form>
    </article>
  )
}
