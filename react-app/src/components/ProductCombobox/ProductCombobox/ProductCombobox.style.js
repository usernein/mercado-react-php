import tw from "tailwind-styled-components";

export const StyledComboboxInput = tw.input`
    text-zing-200
    px-2
    py-2
    w-full
    h-10
    max-w-[50%]
    md:max-w-lg
    lg:max-w-xl
    text-sm
    border-2
    border-gray-700
    placeholder-zinc-600
    bg-transparent
    rounded-md
    ml-3
    sm:mr-3
    focus:outline-none
    focus:border-blue-500
`;

export const StyledComboboxOptionList = tw.ul`
absolute -top-64 mt-1 max-h-60 w-full overflow-auto rounded-md bg-zinc-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm
`;

export const StyledComboboxOptionItem = tw.li`
relative cursor-default select-none py-2 pl-10 pr-4
`;