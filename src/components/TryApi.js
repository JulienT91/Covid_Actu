import React, { useState } from "react";

const TryApi = () => {
  const [data, setData] = useState(["hello"]);

  return <div>{data}</div>;
};

export default TryApi;
