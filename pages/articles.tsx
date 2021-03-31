import useSWR from 'swr'
import Article from '../components/Article'
import MainContainer from '../components/MainContainer'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Articles() {
    const {data, error} = useSWR('/api/articles', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <MainContainer title={'Home'}>
            <ul>
                {data.map((article, i) => (
                    <Article key={i} article={article} />
                ))}
            </ul>
        </MainContainer>
    )
}