import React from "react";

// 이건 함수형 컴포넌트!
const FirstComponentByFunc = () => {
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "20px",
  };
  const name = "styled span element in Func Component";

  return (
    <div>
      <p>This is the FirstComponentByFunc</p>

      {/* 닫는 태그 꼭 붙여야함! */}
      <br />

      {/* 함수 지역변수 사용 */}
      <span style={style}>{name}</span>

      {/* 꼭 div로 감싸줘야함! 좀 그렇다 싶으면 <> 이것도 가능! */}
      {/* <> => 리액트의 Fragment라고 하며, 실제 브라우저는 별도의 엘리먼트를 만들지 않음 */}
    </div>
  );
};

// 외부파일에서 사용할 수 있도록 해줌
export default FirstComponentByFunc;
