import React from 'react';
import { Logo } from './Logo';
import { MenuToggle } from './MenuToggle';
import { MenuLinks } from './MenuLinks';
import { NavBarContainer } from './NavBarContainer';

export const NavBar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <NavBarContainer {...props}>
            <Logo
                w="100px"
                color={["gray.500", "gray.500", "gray.500", "gray.500"]}
            />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
            {/* <Button>Button</Button> */}
        </NavBarContainer>
        
    )
};












