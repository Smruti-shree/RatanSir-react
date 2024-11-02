import PostBody from "./PostBody";
import PostTitle from "./PostTitle";

function Post({post})
{
    return(
        <>
        <PostTitle title1 ={post.title}/>
        <PostBody body1 ={post.body}/>
        </>
    )
}
export default Post;