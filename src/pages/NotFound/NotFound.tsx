import { LinkWrap, ReactLink } from 'pages/MovieDetails/MovieDetails.styled';

const NotFound: React.FC = () => {
  return (
    <>
      <h2>Sorry, page not found</h2>
      <LinkWrap>
        <ReactLink to={`/`}>{'\u2190'} Back to products</ReactLink>
      </LinkWrap>
    </>
  );
};

export default NotFound;
