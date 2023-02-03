import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

let posts = [
    { id: 1, message: 'Hi, how are you?', likeCounter: 11 },
    { id: 2, message: "it's my first project", likeCounter: 12 }
]

let postElements =
    posts.map(p => <Post message={p.message} likeCounter={p.likeCounter} />)

const MyPosts = () => {
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>

        </div>
        <div className={s.posts}>
            {postElements}

        </div>
    </div>

}

export default MyPosts;