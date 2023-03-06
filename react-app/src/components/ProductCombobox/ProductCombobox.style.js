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
    bg-zinc-800
    bottom-[calc(100%+2px)]
    divide-dotted
    divide-neutral-900/70
    divide-y-2
    focus:outline-none
    max-h-60
    mt-1
    overflow-x-hidden
    overflow-y-auto
    ring-2
    ring-opacity-20
    ring-zinc-400
    rounded-md
    shadow-lg
    sm:text-sm
    sm:w-64
    text-xs
    w-50
    animate-in
    duration-150
    fade-in
    slide-in-from-bottom-20
    ease-out
`;

export const StyledComboboxOptionItem = tw.li`
    cursor-default
    h-8
    pl-5
    pr-4
    py-2
    relative
    select-none
    ui-active:text-blue-500
    ui-active:translate-x-1
    duration-100
`;