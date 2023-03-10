import tw from "tailwind-styled-components";
import { StyledInfoBox } from "components/InfoBox/InfoBox.style";

export const StyledSaleProductRow = tw.div`
    flex
    flex-row
    items-center
    mt-1
`;

export const ProductUnitPrice = tw(StyledInfoBox)`
    invisible
    sm:visible
    text-xs
    w-16
`;

export const ProductTotalPrice = tw(StyledInfoBox)`
invisible
    sm:visible
    text-xs
    w-16
`;

