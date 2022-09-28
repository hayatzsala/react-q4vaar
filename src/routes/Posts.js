import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
function Posts() {
  const ALL_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
  const [data, setData] = useState();
  const [dataReady, setDataReady] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(ALL_POSTS_URL);
      const data = await result.json();
      setData(data);
      setDataReady(true);
      console.log(data);
    };

    fetchData();
  }, [ALL_POSTS_URL]);

  return (
    dataReady && (
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <Link to={`/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    )
  );
}

export default Posts;
