import { StyledInfoBox } from "components/InfoBox/InfoBox.style";
import tw from "tailwind-styled-components";

export const StyledInventoryProductRow = tw.div`
    flex
    flex-row
    mt-1
    w-full
`;

export const StyledProductName = tw(StyledInfoBox)`
w-full
max-w-[40%]
md:max-w-lg
lg:max-w-xl`;

export const StyledProductPrice = tw(StyledInfoBox)`
text-center
text-xs
w-13
sm:text-sm
sm:w-15
`;

export const StyledProductTaxedPrice = tw(StyledProductPrice)``;

export const ProductPriceInput = tw.input`
    bg-transparent
    w-8
    focus:outline-none
`;