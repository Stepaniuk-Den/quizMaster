import styled from "styled-components";

export const StyledReview = styled.div`
  height: 168px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid var(--border-color-60);

  div{
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 12px;
  }

  p{
    letter-spacing: normal;
    max-height: 60px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: black;
    scrollbar-track-color: black;
  }
  @media only screen and (max-width: 767px) {
    max-width: 335px;
  }

  @media only screen and (min-width: 768px) {
    padding: 24px;
    width: 704px;
    height: 144px;
  }

  @media only screen and (min-width: 1440px) {
    width: 608px;
    height: 164px;
  }
`;
