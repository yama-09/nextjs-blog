import Head from "next/head";
import styles from "./Layout.module.css"
import utilstyles from "../styles/utils.module.css"
import Link from "next/link";


const name = "Piyo code"
export const siteTitle = "Next.js Blog"

function Layout({ children , home }) {
    return (
    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                    <img src="/images/piyo.jpg" 
                    className={`${utilstyles.borderCircle}`}
                     />
                    <h1 className={utilstyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                    <img src="/images/piyo.jpg" 
                    className={`${utilstyles.borderCircle}`}
                     />
                    <h1 className={utilstyles.heading2Xl}>{name}</h1>
                </>
            )}
            
        </header>
        <main>{children}</main>
        {!home && (
            <div>
                <Link href="/">ホームへ戻る</Link>
            </div>
        )}
    </div>
    );
}

export default Layout;