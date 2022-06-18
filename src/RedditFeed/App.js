import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Article from "./RedditFeed/Article";
import "./index.css"
function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("webdev");

  useEffect(() => {
    fetch("https://www.reddit.com/r/"+ subreddit +".json").then((res) => {
      if (res.status != 200) {
        console.log("EROREREOR");
        return;
      }
      res.json().then((data) => {
        if (data != null) {
          console.log(data);
          setArticles(data.data.children);
        }
      });
    });
  }, [subreddit]);
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" name="" className="input" value={subreddit} onChange= {e => setSubreddit(e.target.value)} />
      </header>
      <div className="articles">
        {articles != null
          ? articles.map((article, index) => (
              <Article key={index} article={article.data} />
            ))
          : ""}
      </div>
      heello
    </div>
  );
}

export default App;
