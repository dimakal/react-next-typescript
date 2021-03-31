import { articles } from '../../../data'

export default function articleHandler({ query: { id } }, res) {
  const filtered = articles.filter((article) => article.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}
