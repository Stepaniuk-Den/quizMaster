import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const FormContainer = styled.div`
  box-sizing: border-box;
  margin-bottom: 219px;
  padding: 40px 20px;
  width: 335px;
  height: 383px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px var(--border-color-30) solid;
  background-color: var(--white-background);

  @media (min-width: 768px) {
    width: 580px;
    height: 463px;
    margin-bottom: 81px;
    padding: 80px 100px;
  }
`;
export const FormWrapper = styled.div``;
export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 16px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const TextRating = styled.h3`
  color: var(--text-color-60);
  font-size: 16px;
  font-family: "GilroyRegular";
  font-weight: 400;
  line-height: 16px;
  margin-right: 8px;
`;
export const StarBtn = styled.button`
  background-color: transparent;
  line-height: 10px;
`;
export const RateStar = styled(FaStar)`
  color: ${(props) =>
    props.selected ? "var(--star-color-100)" : "var(--star-color-8)"};
  width: 19px;
  height: 18px;
`;
export const FormTextarea = styled.textarea`
  height: 100%;
  padding-top: 18px;
  padding-bottom: 133px;
  padding-left: 18px;
  padding-right: 18px;
  resize: none;
  border-radius: 15px;
  border: 1px var(--bodrer-color-60) solid;
  background-color: transparent;
  color: var(--text-color-50);
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.16px;
  font-family: "GilroyRegular";

  @media (min-width: 768px) {
    font-size: 15px;
    padding-bottom: 133px;
  }
`;
export const SendBtn = styled.button`
  color: var(--text-color-100);
  font-size: 14px;
  font-family: "GilroyBold";
  font-weight: 700;
  line-height: 16px;
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  background: var(--accent-color);
  border-radius: 30px;
  border: none;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;