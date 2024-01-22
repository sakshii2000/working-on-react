import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
useLoaderData;

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/sakshii2000")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-transparent text-gray-700 p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="git pic" width={300} />
    </div>
  );
}

export default Github;

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/sakshii2000");
  return response.json();
};
