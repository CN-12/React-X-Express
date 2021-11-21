import React, { Component } from "react";

class write extends Component {
  render() {
    return (
      <div>
        <form method="POST" action="/add">
          {" "}
          <input type="text" className="form-control" name="title" />
          <input
            type="text"
            className="form-control"
            name="date"
            id="currentDate"
          />
          <button type="submit" className="btn btn-danger">
            전송
          </button>
          <input type="reset" value="초기화" />
        </form>
      </div>
    );
  }
}

export default write;
