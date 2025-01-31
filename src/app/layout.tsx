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
                {children}
            </body>
        </html>
    )
}