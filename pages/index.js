import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import Layout from '/components/Layout'
import utilstyles from "../styles/utils.module.css"
import Link from 'next/link'
import { getPostsData } from '@/lib/Posts'
import { siteTitle } from '@/components/Layout'

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id,title,date,path

  return {
    props: {
      allPostsData,
    },
  };
}

//SSRの場合
/*
export async function getServerSideProps(context) {
  return{
    props:{
      //コンポーネントに渡すためのprops
    },
  };
}
*/

//SSGからallPostDataを返す
export default function Home({ allPostsData }) {
  return (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilstyles.headingMd}>
      <p>
        データサイエンティストをやってます。Next.jsもやっています。🐥
      </p>
    </section>

    <section className={`${utilstyles.headingMd} ${utilstyles.padding1px}`}>
      <h2>📝</h2>
      <div className={styles.grid}>
        {allPostsData.map(({id,title,date,thumbnail}) => (
          <article key={id}>
          <Link href={`/posts/${id}`}>
            <img src={`${thumbnail}`} className={styles.thumbnailImage} />
          </Link>
          <Link href={`/posts/${id}`} legacyBehavior>
            <a className={utilstyles.boldText}>{title}</a>
          </Link>
          <br />
          <small className={utilstyles.lightText}>{date}</small>
        </article>
        ))}
      </div>
    </section>

    
  </Layout>
  )
}
