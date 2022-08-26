import React from 'react';
import { Box } from "@chakra-ui/react";
import { MdClose as CloseIcon, MdMenu as MenuIcon } from "react-icons/md";

export const MenuToggle = ({ toggle, isOpen }) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <CloseIcon color='black'/> : <MenuIcon color='black'/>}
      </Box>
    )
  }

