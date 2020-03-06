import React from 'react';

function Blog(props) {
    return (
        <div>
            <div>
                <h1>Blog</h1>
            </div>
            <div class="blog-posts">
            <div>
                {props.posts.map((post, i) => (
                    <div key={`posts-${i}`}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Blog;