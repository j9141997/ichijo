import {Heading, Box} from '@chakra-ui/react';
import {Color, Space} from '../../styles/variables';

export const Nav: React.VFC = () => {
  return (
    <Box
      as="header"
      px={`${Space}px`}
      borderBottom={`solid ${Color.BORDER.primary} 1px`}
    >
      <Box as="nav" maxW="1024px" m="0 auto" py={`${Space * 2}px`}>
        <Heading as="h1">Ichijo</Heading>
      </Box>
    </Box>
  );
};
