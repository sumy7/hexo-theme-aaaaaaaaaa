module.exports = (props) => {
    return (
        props.page.posts.map((post) => {
            return <div>{post.title}</div>
        })
    )
}
