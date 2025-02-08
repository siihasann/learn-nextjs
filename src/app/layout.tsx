export const metadata = {
    title: 'Next.js',
    description: 'Generate By Next Js'
}

export default function RootLayot({
    children,
}: {
    children: React.ReactNode
    }) {
    return (
        <html lang="en">
            <body>
                <header
                    style={{
                        padding: '1rem',
                        backgroundColor: 'black',
                        color: 'white',
                    }}
                >
                    <p>Header</p>
                </header>
                {children}
                <footer
                    style={{
                        padding: '1rem',
                        backgroundColor: 'black',
                        color: 'white',
                    }}
                >
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    )
}