import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import './globals.css'

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-gray-100">
                <Navbar />
                <div className="h-screen flex flex-row flex-wrap">
                    <Sidebar />
                    <div className="bg-gray-100 flex-1 p-6 md:mt-16">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
