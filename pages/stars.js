/**************************************
 * 
 * getInitialProps の使用例
 * (*)Next.js 9.3 以降はgetStaticProps、
 *    getStaticPaths、getServerSideProps
 *    で置き換え推奨
 * 
 **************************************/
// クライアントサイドでもサーバーサイドでも使用するため
import fetch from 'isomorphic-unfetch'

// getInitialPropsで取得したスター数を受け取る
//export default function Stars({ stars }) {
const Stars = ({ stars }) => {
    return (
    <div>Next stars: {stars}</div>
  )
}
export default Stars

// 先に実行される
Stars.getInitialProps = async () => {
  const res = await fetch('http://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return (
    { stars: json.stargazers_count }
  )
}