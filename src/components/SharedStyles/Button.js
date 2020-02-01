import styled from "styled-components";

const Button = styled.button`
    padding: 6px;
    margin: 5px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    box-shadow: -2px -2px 8px rgba(255, 255, 255, 1), -2px -2px 12px rgba(255, 255, 255, 0.5), inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        2px 2px 8px rgba(0, 0, 0, 0.15);

    &:hover {
        box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1), inset -2px -2px 12px rgba(255, 255, 255, 0.5),
            inset 2px 2px 4px rgba(255, 255, 255, 0.1), inset 2px 2px 8px rgba(0, 0, 0, 0.15);
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: none;
    }
`;

export default Button;

export const ActiveButton = `inset -2px -2px 8px rgba(255, 255, 255, 1), inset -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1), inset 2px 2px 8px rgba(0, 0, 0, 0.15)`;
