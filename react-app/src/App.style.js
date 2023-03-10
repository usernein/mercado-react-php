import tw from "tailwind-styled-components";

export const StyledApp = tw.div`
    flex
    items-center
    flex-col
    w-full
    h-screen
    bg-zinc-900
    text-slate-200
    font-bold
    overflow-hidden
`;

export const StyledTop = tw.div`
    self-start
    w-full
    items-center
    justify-center
    flex
`;

export const StyledContent = tw.div`
    w-11/12
    flex-1
    overflow-y-scroll
`;

export const StyledBottom = tw.div`
`;