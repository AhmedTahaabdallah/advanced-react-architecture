import { CoverContainer, Emoji } from "./use-transition-styled-elements";

const Cover = () => {
  return (
    <CoverContainer>
      <Emoji role="img" aria-label="Book Cover Emoji">
        📚
      </Emoji>
    </CoverContainer>
  );
};

export default Cover;
