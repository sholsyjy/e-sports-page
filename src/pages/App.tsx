import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import NewsSet from "./NewsSet/NewsSet";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/news-set:set"
          render={props => <NewsSet setIndex={props.match.params.set} />}
        />
      </Router>
    </div>
  );
};

export default App;
