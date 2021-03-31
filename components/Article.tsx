import Link from '../components/Link'

export default function Article({ article }) {
  return (
    <li>
      <Link text={article.title} href={`/articles/${article.id}`} />
    </li>
  )
}
