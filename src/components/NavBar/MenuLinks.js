import React from 'react';
import { Box, Text, Stack, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {

    const menuItemProps = {color: 'black', fontWeight:'semibold'};

    return (
        <Link to={to}>
            <Text display="block" {...rest} {...menuItemProps}>
                {children}
            </Text>
        </Link>
    )
};

export const MenuLinks = () => {
    return (
        <Box
            display={{ base: "none", md: "block" }}
            // display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/players">Players</MenuItem>
                <MenuItem to="/stats    ">Stats</MenuItem>
                <Button leftIcon={<FcGoogle />} colorScheme='twitter' variant='outline'>Log in with Google</Button>
            </Stack>

        </Box>

    )
}

