import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios.post("http://localhost:9000/upload", data, {}).then((res) => {
      console.log(res.statusText);
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form method="post" action="#" id="#">
              <div className="form-group files">
                <h1>File Uploader</h1>
                <input
                  type="file"
                  name="file"
                  className="form-control"
                  onChange={this.onChangeHandler}
                ></input>
                <button
                  type="button"
                  className="btn btn-success btn-block"
                  onClick={this.onClickHandler}
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
