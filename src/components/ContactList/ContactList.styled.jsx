import styled from '@emotion/styled';

export const Box = styled.ul`
  width: 100%;
  border-top: 2px solid #006400;
  margin: 20px auto;
  padding: 5px;
  list-style: none;

  font-size: 18px;
`;
export const List = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 30px repeat(2, 240px) 100px;
  margin-bottom: 8px;
`;
export const ContactName = styled.span`
  min-width: 120px;
  margin-right: 10px;
  color: #8b4513;
`;
export const ContactNumber = styled.span`
  min-width: 150px;
  margin-right: 10px;
  color: #2d2d2d;
  font-size: 20px;
`;

export const Btn = styled.button`
  border: none;
  width: 90px;
  padding: 0 5px;
  cursor: pointer;

  font-family: 'Roboto Slab', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  border-radius: 4px;
  color: #ff4500;
  background-color: #deb887;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }
`;
