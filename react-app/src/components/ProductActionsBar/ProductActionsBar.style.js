import tw from "tailwind-styled-components";
import React from 'react';
import { HiTrash, HiCheck } from 'react-icons/hi';

export const StyledProductActionsBar = tw.div`
    bg-blend-multiply
    py-1
    px-1
    mr-3
    bg-zinc-700
    rounded-lg
    flex
    flex-row
    justify-around
    items-center
`;

export const StyledDeleteButton = tw.button`
    bg-red-500
    hover:bg-red-600
    hover:scale-110
    w-6
    h-6
    sm:w-8
    sm:h-8
    rounded-lg
    items-center
    justify-center
    flex
    duration-75
`;

export const StyledSubmitButton = tw(StyledDeleteButton)`
    ml-3
    bg-green-500
    hover:bg-green-600
`;

export const DeleteButton = (props) => (
    (<StyledDeleteButton {...props}><HiTrash /></StyledDeleteButton>)
);

export const SubmitButton = (props) => (
    (<StyledSubmitButton {...props}><HiCheck /></StyledSubmitButton>)
);