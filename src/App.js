import React, { useState } from 'react';
import {
  ButtonGroup,
  Button,
  Flex,
  ChakraProvider,
  VStack,
  HStack,
} from '@chakra-ui/react';

import './components/button-stylesheet.scss'

// Import Data
import { teamEurope, teamUSA } from './players'

// Import Components
import { PlayerCard } from './components/PlayerCard/PlayerCard.js';

// Import Images
import teamEuropePic from './images/europe.png'
import teamUSAPic from './images/usa.png'

export const App = () => {
  const [team, setTeam] = useState(teamEurope)

  const showTeamUSA = () => {
    setTeam(teamUSA)
  };

  const showTeamEurope = () => {
    setTeam(teamEurope)
  };

  return (
    <ChakraProvider>
      <VStack h='100vh'>
        {/* <Image src={teamEuropePic} alt={teamEuropePic} position='absolute' maxH='100px'/> */}
        <VStack justifyContent='center' maxW='1200px'>

          <Flex alignItems='center' justifyContent='center' h={24} w='full'>

            {/* <ButtonGroup>
              <Button onClick={showTeamEurope} >Team Europe</Button>
              <Button onClick={showTeamUSA} >Team USA </Button>
            </ButtonGroup> */}
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
      </VStack>
    </ChakraProvider>
  )

}

export default App;
