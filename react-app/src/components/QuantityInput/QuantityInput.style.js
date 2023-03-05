import React from 'react'
import tw from "tailwind-styled-components";

export const StyledQuantityInput = tw.div`
    flex
    flex-row
    border-red-50
    sm:mx-3
    ml-auto
`;

export const StyledInput = tw.input`
    text-zing-200
    w-8
    h-8
    sm:w-10
    sm:h-10
    py-2
    px-2
    border-2
    border-gray-700
    placeholder-zinc-600
    bg-blue-700
    rounded-lg
    mx-0
    text-center
    font-extrabold
    text-base
    focus:outline-none
    focus:border-blue-500
`;

export const StyledMinusButton = tw.button`
    text-zinc-400
    w-10
    mx-0
    bg-transparent
    hover:scale-150
`;

export const StyledPlusButton = tw(StyledMinusButton)``;

function MinusButton(props) {
    return ( <StyledMinusButton {...props}> - </StyledMinusButton> );
}

function PlusButton(props) {
    return ( <StyledPlusButton {...props}> + </StyledPlusButton> );
}

export { MinusButton, PlusButton };