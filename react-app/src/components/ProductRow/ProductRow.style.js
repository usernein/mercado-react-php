import tw from "tailwind-styled-components";

export const StyledProductRow = tw.div`
    flex
    flex-row
    items-center
    py-3
`;

export const ProductName = tw.div`
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