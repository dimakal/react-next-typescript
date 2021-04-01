import React, {ReactElement} from "react";
import {ArticleType} from "../types";
import styles from "../styles/Article.module.scss";
import MainContainer from "./MainContainer";

type Props = {
    article: ArticleType
}

const ArticlePage: React.FC<Props> = ({article}): ReactElement => {
  return (
      <MainContainer title={`Article ${article.id}`}>
          <p className={styles.description}> {article.description} </p>
          <img className={styles.image} src={article.image} alt="image"/>
      </MainContainer>
  )
}

export default ArticlePage