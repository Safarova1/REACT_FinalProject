import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.875rem 1.25rem;
  background-color: white;
  color: black;
  transition: background-color 0.3s;

  &:hover {
    background-color: red;
  }

  &:hover .text {
    background: linear-gradient(to right, #1e3a8a, #ec4899);
    background-clip: text;
    color: transparent;
  }
`;

export default ListItem;
