import PostList from "./PostList";

const App = () => {
  const posts = [
    {
      id: 1235423,
      nickname: "관리자",
      type: "notice",
      title: "제목이 스무자가 넘으면 제목이 잘립니...",
      created_at: "2024/04/24 15:25:25",
      likes: 312,
      views: 12,
    },
    {
      id: 58582,
      nickname: "관리자",
      type: "notice",
      title: "공지사항은 특별한 색깔을 넣자!",
      created_at: "2024/04/24 15:23:25",
      likes: 1,
      views: 0,
    },
    {
      id: 12341,
      nickname: "관리자",
      type: "notice",
      title: "자유게시판 공지사항입니다.",
      created_at: "2024/04/21 11:25:02",
      likes: 12,
      views: 52,
    },
    {
      id: 789724,
      nickname: "관리자",
      type: "",
      title: "gggg",
      created_at: "2024/06/25 17:20:32",
      likes: 0,
      views: 0,
    },
    {
      id: 789723,
      nickname: "관리자",
      type: "",
      title: "관리자의 일반 게시물 id=6!",
      created_at: "2024/05/21 18:15:02",
      likes: 2,
      views: 4,
    },
    {
      id: 18583,
      nickname: "관리자",
      type: "",
      title: "관리자의 일반 게시물 id=2!",
      created_at: "2024/01/21 11:25:02",
      likes: 2,
      views: 4,
    },
  ];

  return (
    <div className="app">
      <h1>자유게시판</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default App;
