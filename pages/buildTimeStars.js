/**************************************
 * 
 * getStaticProps の使用例
 * (*)getStaticProps は Next.js 9.3 で
 *    導入された。
 * 
 **************************************/
// クライアントサイドでは実行されないため'isomorphic-unfetch'は必要ない
import fetch from 'node-fetch'

// getStaticPropsで取得したスター数とビルド時の時刻を受け取る
const BuildTimeStars = ({ stars, build_time }) => {
    return (
        <div>ビルド時（{build_time}）のNextのstarの数は: {stars}</div>
    )
}

// ビルド時に実行される
export const getStaticProps = async () => {
//export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    const stars = json.stargazers_count
    // ビルド時刻の取得
    const build_time = new Date().toString()

    return {
        props: {
            stars,
            build_time
        },
    }
}

export default BuildTimeStars
