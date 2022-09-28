import { useEffect, useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
function PostInfo() {
  const ONE_POST_URL = 'https://jsonplaceholder.typicode.com/posts/';
  const [data, setData] = useState();
  const [dataReady, setDataReady] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(ONE_POST_URL + `${id}`);
      const data = await result.json();
      setData(data);
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
      </div>
    )
  );
}

export default PostInfo;
