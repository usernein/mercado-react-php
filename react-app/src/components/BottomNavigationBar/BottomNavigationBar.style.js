import tw from "tailwind-styled-components";

export const StyledBottomBar = tw.div`
    block
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
    bg-transparent
    px-2
    py-2
`;

export const StyledTab = tw.button`
    px-4
    rounded-xl
    flex
    flex-grow
    h-10
    mx-1
    items-center
    justify-center
    ui-selected:bg-blue-800
    ui-selected:text-white
    ui-not-selected:bg-zinc-700
    ui-not-selected:text-zinc-400`;