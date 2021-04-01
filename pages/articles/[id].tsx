import {useRouter} from 'next/router'
import useSWR from 'swr'
import {ArticleType} from "../../types";
import ArticlePage from "../../components/ArticlePage";

const fetcher = async (url): Promise<ArticleType> => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

const Article = () => {
    const {query} = useRouter()
    const {data, error} = useSWR<ArticleType>(
        () => query.id && `/api/articles/${query.id}`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    return (
        <ArticlePage article={data} />
    )
}

export default Article