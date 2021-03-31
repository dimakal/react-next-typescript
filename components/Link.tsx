import NextLink from "next/link";
// import styles from '../styles/A.module.css'

type LiinkProps = {
    text?: string
    href?: string
}

export default function Link ({text, href}: LiinkProps) {
    return (
        <NextLink href={href}>
            <a className={'link'}> {text} </a>
        </NextLink>
    )
}