// PostList.js
import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div className="board-container container mt-4">
      <table className="table table-striped table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col" className="col-1">
              번호
            </th>
            <th scope="col" className="col-2">
              닉네임
            </th>
            <th scope="col" className="col-5">
              제목
            </th>
            <th scope="col" className="col-2">
              등록일
            </th>
            <th scope="col" className="col-1">
              좋아요
            </th>
            <th scope="col" className="col-1">
              조회
            </th>
          </tr>
        </thead>
        <tbody id="board-table-body">
          {posts.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                데이터가 없습니다.
              </td>
            </tr>
          ) : (
            posts.map((post) => <Post key={post.id} {...post} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
