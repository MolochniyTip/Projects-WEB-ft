import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-100 p-4">
            <nav className="flex gap-4">
                <Link href="/">Переводчик</Link>
                <Link href='/camera'>ИИ камера</Link>
                <Link href="/voice">Разговорник</Link>
                <Link href="/">О нас</Link>
            </nav>
        </header>
    )
}
