import Link from "next/link"
import { useRouter } from "next/router"

interface Props {
    text: string,
    href: string
}
const style = {
    color: 'blue',
    textDecoration: 'underline'
}
const ActiveLink = ({ text, href }: Props) => {
     const { asPath } = useRouter()
    return (
        <Link href={href} style={ asPath === href ? style : undefined} >
            {text}
        </Link>
    )
}

export default ActiveLink