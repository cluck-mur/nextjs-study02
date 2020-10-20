/************************************
 * 
 * 参照サイト3: getStaticPaths
 * 
 ************************************/
import fetch from 'node-fetch'

const Zeit = ({ name, stars }) => {
    return (
        <dev>{name} stars: {stars}</dev>
    )
}

// 最初に実行される。事前ビルドするパスを配列でreturnする。
export const getStaticPaths = async () => {
    // zeitが管理するレポジトリを(APIのデフォルトである)30件取得する
    const res = await fetch('https://api.github.com/orgs/zeit/repos')
    const repos = await res.json()
    // レポジトリの名前をパスとする
    const paths = repos.map(repo => `/zeit/${repo.name}`)
    // 事前ビルドしたいパスをpathsとして渡す fallbackについては後述
    return (
        { paths, fallback: false }
    )
}

// ルーティングの情報が入ったparamsを受け取る
export const getStaticProps = async ({ params }) => {
    // ファイル名のzeit/[name].jsに対応
    const name = params.name
    const res = await fetch(`https://api.github.com/repos/zeit/${name}`)
    const json = await res.json()
    const stars = json.stargazers_count

    return (
        { props: { name, stars } }
    )
}

export default Zeit
