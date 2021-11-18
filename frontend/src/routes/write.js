import React, { Component } from "react";

class write extends Component {
  render() {
    return (
      <div>
        <form method="post" action="/post">
          <input type="text" name="id" />
          <input type="text" name="pw" />
          <button type="submit" className="btn btn-danger">전송</button>
          <input type="reset" value="초기화"/>
        </form>
      </div>
    );
  }
}

export default write;
