// import useSWR from 'swr'
import Article from '../components/Article'
import MainContainer from '../components/MainContainer'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
    // const {data, error} = useSWR('/api/articles', fetcher)

    // if (error) return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>

    return (
        <MainContainer title={'Home'}>
            <h1> Home </h1>
            {/*<ul>*/}
            {/*    {data.map((articles, i) => (*/}
            {/*        <Article key={i} articles={articles} />*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </MainContainer>
    )
}
