import "../styles/globals.css";
import Header from "../components/Header";

export const metadata = {
    title: 'AI Assistant',
    description: 'Your smart AI assistant'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Header />
        <main className='p-4'>{children}</main>
        </body>
        </html>
    )
}