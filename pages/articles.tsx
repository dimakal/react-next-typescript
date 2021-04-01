import useSWR from 'swr'
import MainContainer from '../components/MainContainer'
import {ArticleType} from "../types";
import Link from "../components/Link";
import React from "react";

const fetcher = (url): Promise<any> => fetch(url).then((res) => res.json())

const Articles = () => {
    const {data, error} = useSWR<ArticleType[]>('/api/articles', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <MainContainer title={'Articles'}>
            <ul>
                {data.map((article, i) => (
                    <li key={i}>
                        <Link text={article.title} href={`/articles/${article.id}`} />
                    </li>
                ))}
            </ul>
        </MainContainer>
    )
}

export default Articles