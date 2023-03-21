import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 0.01em;
`;
export const Input = styled.input`
  width: 100%;
  height: 25px;
  padding: 5px;
  margin-top: 10px;
  padding-left: 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active,
  &:focus {
    outline: 0;
    border: 2px solid #2196f3;
  }
`;
