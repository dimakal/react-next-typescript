import {useRouter} from 'next/router'
import useSWR from 'swr'
import MainContainer from "../../components/MainContainer";
import styles from '../../styles/Article.module.scss'
import {ArticleType} from "../../types";

const fetcher = async (url): Promise<ArticleType> => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function Article() {
    const {query} = useRouter()
    const {data, error} = useSWR(
        () => query.id && `/api/articles/${query.id}`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    return (
        <MainContainer title={`Article ${data.id}`}>
            <p className={styles.description}> {data.description} </p>
            <img src={data.image} alt="image"/>
        </MainContainer>
    )
}
