import React, { useEffect, useState } from "react";
import axios from "axios";

const TryApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=big&opening-date=2020-01-01;2021-01-01&api-key=TZAHIfno7jTnAUT23ErUAKczxIGihXuE"
      )
      .then((res) => setData(res.data));

    console.log(data);
  }, []);
  return (
    <div className="reviews">
      <ul className="reviews-list">
        {data.map((review) => (
          <li>{review.display_title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TryApi;
