//[]は、URLを任意の文字列に置換できる

import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/Posts";
import utilstyles from "@/styles/utils.module.css"
import Head from "next/head";

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback:false, //pathに含まれないものを404にする
    }
}

// URLに応じてSSGとしてデータを取得したい
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return{
        props: {
            postData,
        },
    }
  }

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilstyles.headingXl}>{postData.title}</h1>
                <div className={utilstyles.lightText}>{postData.date}</div>
                <div dangerouslySetInnerHTML={{__html:postData.blogContentHTML}} />
                
            </article>
        </Layout>
    );
}

// dangerouslySetInnerHTMLは悪意あるものを侵入できるので、サニタイズ処理が必要