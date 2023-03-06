import tw from "tailwind-styled-components";

export const StyledBottomBar = tw.div`
    flex
    flex-col
    fixed
    inset-x-0
    bottom-0
    pb-2
    z-10
    bg-zinc-800
    shadow-lg
    rounded-t-2xl
    mx-3
`;

export const StyledNavigationBar = tw.div`
    flex
    flex-row
    items-center
    justify-center
    bg-transparent
    px-2
    py-2
`;

export const StyledTab = tw.button`
    w-3/12
    text-[3.6vw]
    sm:w-48
    sm:text-base
    px-4
    mx-2
    rounded-xl
    flex
    h-10
    items-center
    justify-center
    ease-in
    duration-75
    hover:-translate-y-1
    ui-selected:-translate-y-1
    ui-selected:bg-blue-800
    ui-selected:text-white
    ui-not-selected:bg-zinc-700
    ui-not-selected:text-zinc-400`;