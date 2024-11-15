import styles from "@/page.module.css"

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

export default function Home({ title }) {
    return (
        <main>
            This is test
            <div>
                This is another test
            </div>
        </main>
    );
}
