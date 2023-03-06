import tw from "tailwind-styled-components";
import React from 'react';
import { HiTrash, HiCheck } from 'react-icons/hi';

export const StyledProductActionsBar = tw.div`
    bg-blend-multiply
    py-2
    px-2
    h-10
    w-20
    sm:w-24
    min-w-[6rem]

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
    w-8
    h-8
    rounded-lg
    items-center
    justify-center
    flex
`;

export const StyledSubmitButton = tw(StyledDeleteButton)`
    bg-green-500
    hover:bg-green-600
`;

export const DeleteButton = (props) => (
    (<StyledDeleteButton {...props}><HiTrash /></StyledDeleteButton>)
);

export const SubmitButton = (props) => (
    (<StyledSubmitButton {...props}><HiCheck /></StyledSubmitButton>)
);