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
    absolute
    -top-64
    mt-1
    max-h-60
    w-50
    sm:w-64
    text-xs
    sm:text-sm
    overflow-y-auto
    overflow-x-hidden
    rounded-md
    bg-zinc-800
    py-1
    shadow-lg
    ring-1
    ring-black
    ring-opacity-5
    focus:outline-none
    divide-dotted
    divide-y-2
    divide-neutral-900/70
`;

export const StyledComboboxOptionItem = tw.li`
    relative
    cursor-default
    select-none
    py-2
    pl-5
    pr-4
    h-8
    ui-active:text-blue-500
    ui-active:translate-x-1
`;