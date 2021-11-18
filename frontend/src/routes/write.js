import React, { Component } from "react";

class write extends Component {
  render() {
    function moveOk() {
      window.location.replace("/ok");
    }
    return (
      <div>
        <form method="POST" action="/add">
          {" "}
          <input type="text" class="form-control" name="title" />
          <input
            type="text"
            class="form-control"
            name="date"
            id="currentDate"
          />
          <button type="submit" className="btn btn-danger" onClick={moveOk}>
            전송
          </button>
          <input type="reset" value="초기화" />
        </form>
      </div>
    );
  }
}

export default write;
