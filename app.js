import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";

function flowers() {
  return (
    <>
      <h2>flowers</h2>
      <p>This is the blue</p>
    </>
  );
}

function trees() {
  return (
    <>
      <h2>threes</h2>
      <p>the trees are green</p>
    </>
  );
}

function cars() {
  return (
    <>
      <h2>cars</h2>
      <p>This is the cars Page</p>
    </>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "#282c34" };
  }

  changeColor = (color) => {
    this.setState({ color });
  };

  render() {
    return (
      <div style={{ background: this.state.color }} id="main">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/" onClick={() => this.changeColor("#0000FF")}>
                    flowers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trees/"
                    onClick={() => this.changeColor("#008000")}
                  >
                    trees
                  </Link>
                </li>
                <li>
                  <Link to="/cars/" onClick={() => this.changeColor("#FF0000")}>
                    cars
                  </Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={flowers} />
            <Route path="/trees/" component={trees} />
            <Route path="/cars/" component={cars} />
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
