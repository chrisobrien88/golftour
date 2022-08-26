import React from 'react';
import { Box, Text, Link, Stack } from "@chakra-ui/react"

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {

    const menuItemProps = {color: 'black', fontWeight:'semibold'};

    return (
        <Link href={to}>
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
                <MenuItem to="/">Players</MenuItem>
                <MenuItem to="/how">Stats</MenuItem>
            </Stack>

        </Box>

    )
}

