import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
  padding: 10px;
`;
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

export const Btn = styled.button`
  min-width: 160px;
  height: 40px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 4px;
  color: #ffffff;
  background-color: #188ce8;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }
`;
