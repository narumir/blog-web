import {
  NextPage,
} from "next"
import {
  PostItem,
  PostContainer,
} from "src/components/post";

const MainPage: NextPage = () => {
  return (
    <PostContainer>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </PostContainer>
  );
};

export default MainPage;
