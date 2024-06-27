import React, { Component } from "react";

// 이건 클래스형 컴포넌트
class FirstComponentByClass extends Component {
  style = {
    backgroundColor: "black",
    color: "yellow",
    fontSize: "20px",
  };
  name = "styled span element in Class Component";

  render() {
    return (
      <div>
        <p>This is the FirstComponentByClass</p>

        {/* 닫는 태그 꼭 붙여야함! */}
        <br />

        {/* 클래스의 인스턴스변수 사용. 따라서 this 필요! */}
        <span style={this.style}>{this.name}</span>

        {/* 꼭 div로 감싸줘야함! 좀 그렇다 싶으면 <> 이것도 가능! */}
        {/* <> => 리액트의 Fragment라고 하며, 실제 브라우저는 별도의 엘리먼트를 만들지 않음 */}
      </div>
    );
  }
}

export default FirstComponentByClass;
