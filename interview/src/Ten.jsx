async function getPostWithAuthor(postId) {
// 1. Fetch /posts/postId
const postResponce = await fetch(`/posts/${postId}`);
const post = await postResponce.json();

// 2. Get authorId from result
const authorId = post.authorId

// 3. Fetch /users/authorId
const userResponce = await fetch(`/users/${authorId}`);
const user = await userResponce.json();

// 4. Return { ...post, author: user }
return{
    ...post,
    author : user
};
}