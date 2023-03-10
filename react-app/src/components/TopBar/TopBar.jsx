import React, { useContext } from 'react'
import { StyledTopBar } from './TopBar.style';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { PageContext } from 'store/PageContext';
function TopBar (props) {
    const { pageTitle } = useContext(PageContext);

    return (
        <StyledTopBar>
            <GiForkKnifeSpoon className='text-5xl ml-2 mr-2'/>
            <div className='flex flex-col'>
                <a href="https://github.com/usernein" className='text-[10px] text-blue-500'>mercado-react-php</a>
                <div className='text-3xl text-bold'>{pageTitle}</div>
            </div>
        </StyledTopBar>
    );
}

export default TopBar;