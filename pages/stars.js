// クライアントサイドでもサーバーサイドでも使用するため
import fetch from 'isomorphic-unfetch'

// getInitialPropsで取得したスター数を受け取る
export default function Stars({ stars }) {
  return (
    <div>Next stars: {stars}</div>
  )
}

// 先に実行される
Stars.getInitialProps = async () => {
  const res = await fetch('http://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return (
    { stars: json.stargazers_count }
  )
}