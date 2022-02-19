import React from "react";
import styled from 'styled-components';
import { useThemeContext } from '../../Context/themeContext';


const Switch = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    Left: 1rem;
    margin-left: 85px;
    width: ${({ theme }) => theme.switchWidth};
    height: ${({ theme }) => theme.switchHeight};
    border-radius: 50em;
    padding: ${({ theme }) => theme.switchPadding} 0;

    .switch__input, .switch__label {
        position: absolute;
        left: 0;
        top: 0;
    }
    .switch__input {
        margin: 0;
        padding: 0;
        opacity: 0;
        height: 0;
        width: 0;
        pointer-events: none;

        &:checked + .switch__label {
            background-color: ${({ theme }) => theme.colorWhite};
        }

        &:checked + .switch__label + .switch__marker {
            left: calc(100% - ${({ theme }) => theme.switchHeight} + ${({ theme }) => theme.switchPadding});
        }

        &:focus + .switch__label,
        &:active + .switch__label {
            box-shadow: 0 0 0 3px alpha(${({ theme }) => theme.primary}, 0.2);
        }
    }
    .switch__label {
        width: 100%;
        height: 100%;
        color: transparent;
        user-select: none;
        background-color: ${({ theme }) => theme.textColor};
        border-radius: inherit;
        z-index: 1;
        transition: background ${({ theme }) => theme.switchAnimationDuration};
    }

    .switch__marker {
        position: relative;
        background-color: ${({ theme }) => theme.primary};
        width: calc(${({ theme }) => theme.switchHeight} - ${({ theme }) => theme.switchPadding} * 2);
        height: calc(${({ theme }) => theme.switchHeight} - ${({ theme }) => theme.switchPadding} * 2);
        border-radius: 50%;
        z-index: 2;
        pointer-events: none;
        box-shadow: 0 1px 1px hsla(0, 0%, 0%, 0.25);
        left: ${({ theme }) => theme.switchPadding};
        transition: left ${({ theme }) => theme.switchAnimationDuration};
        will-change: left;
    }
`;

const Text = styled.h1`
    font-size: 0.8rem;
    font-wight: 500;
    color: ${({theme}) => theme.textColor};
    margin: 0;
    margin-bottom: 3px;
    bottom: 1rem;
    Left: 1rem;
    position: absolute;
`;

const ToggleSwitch = () => {

    const { toggleTheme } = useThemeContext();

    return (
        <>
            <Text>
                Switch Mode
            </Text>
            <Switch>
                <input className="switch__input" type="checkbox" id="switchCheckbox1" onClick={toggleTheme} />
                <label aria-hidden="true" className="switch__label" htmlFor="switchCheckbox1">On</label>
                <div aria-hidden="true" className="switch__marker"></div>
            </Switch>
        </>
    )
};

export default ToggleSwitch

