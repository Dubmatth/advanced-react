import Link from 'next/link'

const Nav = () => (
    <div>
        <p>Sell !</p>
        <Link href="/sell">
            <a>Sell !</a>
        </Link>
        <Link href="/">
            <a>Home !</a>
        </Link>
    </div>
)

export default Nav