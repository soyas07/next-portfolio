import "@/globals.css";
import localFont from 'next/font/local';

const LabilFont = localFont({
    src: "/fonts/LabilGrotesk-Medium.ttf", // Use leading slash
    style: "normal",
    variable: "--font-Labil",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={LabilFont.variable}>
            <body>
                {children}
            </body>
        </html>
    );
}
