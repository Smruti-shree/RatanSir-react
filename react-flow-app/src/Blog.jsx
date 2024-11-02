import Post from "./Post"

function Blog()
{
    const data1={title:'Post one Title',body:'This is the body of post one'}
    const data2={title:'Post two Title',body:'This is the body of post two'}
    return(
        <>
        <Post post={data1}/>
        <Post post ={data2}/>
        </>
    )
}
export default Blog;