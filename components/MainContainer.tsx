import React, {ReactNode} from "react"
import Head from "next/head";
import Link from "./Link";
import styles from '../styles/MainContainer.module.scss'

type MainContainerProps = {
    children?: ReactNode
    title?: string
}

const MainContainer: React.FC<MainContainerProps> = ({children, title = 'Next.js'}: MainContainerProps) => {
    return (
        <div className={styles.mainWrapper}>
            <Head>
                <title> {title} </title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header className={styles.header}>
                <nav>
                    <Link href={'/'} text={'Home'} />
                    <Link href={'/articles'} text={'Articles'} />
                </nav>
            </header>
            <div className={styles.content}>
                {children}
            </div>
            <footer className={styles.footer}>
                Footer
            </footer>
        </div>
    )
}

export default MainContainer