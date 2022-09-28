import { useEffect, useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
function PostInfo() {
  const ONE_POST_URL = 'https://jsonplaceholder.typicode.com/posts/';
  const COMMENT_URL = 'https://jsonplaceholder.typicode.com/comments?postId=';
  const [data, setData] = useState();
  const [comments, setComments] = useState();
  const [dataReady, setDataReady] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(ONE_POST_URL + `${id}`);
      const data = await result.json();
      setData(data);
      const comments = await fetch(COMMENT_URL + `${id}`);
      const commentsData = await comments.json();
      console.log(commentsData);
      setComments(commentsData);
      setDataReady(true);
      console.log(data);
    };

    fetchData();
  }, [ONE_POST_URL]);
  return (
    dataReady && (
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        {comments.map((comment) => (
          <div>
            <h3>{comment.name}</h3>
            <h5>{comment.email}</h5>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    )
  );
}

export default PostInfo;
