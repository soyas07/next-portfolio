import "@/globals.css";
import localFont from 'next/font/local';
import { GlobalProvider } from "src/context/GlobalContext";

const LabilFont = localFont({
    src: "/fonts/LabilGrotesk-Medium.ttf", // Use leading slash
    style: "normal",
    variable: "--font-Labil",
});

export const generateMetadata = async() => {
    return {
        title: "Portfolio Soyas",
        description: "Web Design and Development Service for Small Business",
        keywords: "Web Development, Web Design, Small Business, Website",
        author: "Soyas",
        openGraph: {
            title: "Portfolio Soyas",
            description: "Web Design and Development Service for Small Business",
            url: "https://www.soyaslimbu.com",
            siteName: "Porfolio Site",
            images: [
            {
                url: "/path-to-your-image.jpg",
                width: 800,
                height: 600,
                alt: "Description of the image",
            },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Portfolio Soyas",
            description: "Web Design and Development Service for Small Business",
            image: "/path-to-your-image.jpg",
            creator: "@yourtwitterhandle",
        },
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={LabilFont.variable}>
            <body>
                <GlobalProvider>
                    {children}
                </GlobalProvider>
            </body>
        </html>
    );
}
