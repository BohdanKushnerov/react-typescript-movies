import { CommentList, ReviewItem, ReviewLink } from './ReviewList.styled';

type ReviewProps = {
  state: ReviewObj[];
};

type ReviewObj = {
  author: string;
  content: string;
  id: string;
  url: string;
};

const ReviewList: React.FC<ReviewProps> = ({ state }) => {
  return (
    <CommentList>
      {state.map(({ author, content, id, url }) => {
        return (
          <ReviewItem key={id}>
            <h2>Author: {author}</h2>
            <p>{content}</p>
            <ReviewLink href={url} target="_blank">
              Link
            </ReviewLink>
          </ReviewItem>
        );
      })}
    </CommentList>
  );
};

export default ReviewList;
