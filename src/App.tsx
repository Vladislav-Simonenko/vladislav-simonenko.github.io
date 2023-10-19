import { Loader } from "@atoms/Loader";
import "./App.scss";
import Router from "./router";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return <div className="wrapper">{loading ? <Loader /> : <Router />}</div>;
}

export default App;
