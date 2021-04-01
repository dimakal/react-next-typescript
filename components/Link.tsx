import NextLink from "next/link";

type Props = {
    text?: string
    href?: string
}

const Link: React.FC<Props> = ({text, href}) => {
    return (
        <NextLink href={href}>
            <a className={'link'}> {text} </a>
        </NextLink>
    )
}

export default Link