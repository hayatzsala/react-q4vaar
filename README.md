# Overview

You remember JSONPlacerHolder API? We used it when we first learned about fetch API, now we will use it with React Router.

Go [here](https://reactrouter.com/docs/en/v6/getting-started/tutorial) whenever you feel lost

## Requirements

Note: Yes, requirements, not instructions. Work with your partner to find what needs to be done to finish the needed deliverables :D. Let us know in Slack if you need any help. Also, if you finish early and think you can help, let us know.

1. Add React Router dom by entering `react-router-dom` in the Dependencies tab on the left.
2. Create a page called `<Posts />` in `/src/routes/` that will fetch all posts from this API

```jsx
const ALL_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
```

2. In the `<Posts />` page, map over all the posts and show their titles. The titles should be clickable and would take the user to a new page `<PostInfo />` that will show the rest of the post information.
3. With `<PostInfo />` you can pass the data using one of two methods: pass the object that you mapped in `<Posts />` page as a prop or only pass the ID and use fetch inside `<PostInfo />` to get the data using this API endpoing.

```jsx
const ONE_POST_URL = "https://jsonplaceholder.typicode.com/posts/${postId}";
```

BONUS (There are 2 bonuses actually):

1. When the user clicks on the post to view it in another page, can you also show the comments? You need to search for the correct API on your own though 😋
2. Style the page so it can be beautiful. Don't focus on this from the beginning.

Note: You don't have to do HTML and CSS from scratch, you can always find resources online and use them for the sake of time. Look at [this](https://tailwindcomponents.com/component/post-artical) as an example.
