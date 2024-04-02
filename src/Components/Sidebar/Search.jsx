import { Box, Link, Tooltip} from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { SearchLogo } from '../../assets/constants';

const Search = () => {
  return (
    <Tooltip
			hasArrow
			label={"Search"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link
				display={"flex"}
				to={"/"}
				as={RouterLink}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				<SearchLogo size={25} />
				<Box display={{ base: "none", md: "block" }}>Search</Box>
			</Link>
		</Tooltip>
  )
}

export default Search
