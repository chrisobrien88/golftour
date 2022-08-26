import React, { useState } from 'react';
import { VStack, Flex, HStack } from '@chakra-ui/react';
import { PlayerCard } from '../components/PlayerCard/PlayerCard';
import { teamEurope, teamUSA } from '../players';


export const Players = () => {

    const [team, setTeam] = useState(teamEurope)

    const showTeamUSA = () => {
        setTeam(teamUSA)
    };

    const showTeamEurope = () => {
        setTeam(teamEurope)
    };

    return (
        <VStack justifyContent='center' maxW='1200px'>

            <Flex alignItems='center' justifyContent='center' h={24} w='full'>
                <HStack spacing={4}>
                    <button className='button button2' onClick={showTeamEurope}>Team Europe</button>
                    <button className='button button2' onClick={showTeamUSA}>Team USA</button>
                </HStack>
            </Flex>
            <Flex mx={12} maxW='1200px' wrap='wrap' gap={4} justifyContent='center'>
                {team.map(player => (<PlayerCard
                    key={player}
                    firstName={player.firstName}
                    lastName={player.lastName}
                    nickname={player.nickname}
                    team={player.team}
                    playerBio={player.playerBio}
                    handicap={player.handicap}
                    src={player.profilePic}
                />))}
            </Flex>

        </VStack>
    )
}
