/************************************
 * 
 * 参照サイト3: Dynamic Routes
 * 
 ************************************/
import { useRouter } from 'nex/router'

const Post = () => {
    const router = useRouter()
    const { pid } = router.query

    return (
        <p>Post: {pid}</p>
    )
}

export default Post
