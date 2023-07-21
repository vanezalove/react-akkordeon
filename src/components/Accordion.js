import React from "react";
import { useState, useEffect } from "react";
import "./Accordion.css"

const Accordion = () => {
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((apiData) => {
        setPosts(apiData);
        console.log(apiData);
      });
  };

  const toggle = (i) => {
if(selected === i){
    return setSelected(null)
}

setSelected(i);
  }

  return (
    <div>
      <div className="accordion">
        {posts.slice(0, 5).map((post, i) => (
          <div className="accordion_wrapper">
            <div onClick={() => toggle(i)} className="accordion_header">
                <h1>{post.name}</h1>
                <span>{selected === i ? "-" : "+"}</span>
            </div>
            <p className={selected === i ? "accordion_body show" : "accordion_body"}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
