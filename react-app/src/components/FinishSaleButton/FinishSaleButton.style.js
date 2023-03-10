import tw from "tailwind-styled-components";

export const StyledFinishSaleButton = tw.div`
    w-40
    py-2
    text-center
    rounded-md
    shadow-inner
    self-center
    mt-5

    ${(prop) =>
        prop.$finished
            ? "bg-transparent ring-1 ring-slate-600 opacity-40"
            : "bg-green-700 hover:bg-green-600 hover:shadow-md"}
`;
