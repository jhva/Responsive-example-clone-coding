import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

const Button = (props) => {
  let { icon, text } = props;
  if (icon === undefined) icon = <BsArrowRight />;
  return (
    <Btn>
      {icon}
      {text}
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  font-weight: bold;
  svg {
    font-size: 1.1rem;
  }
`;
