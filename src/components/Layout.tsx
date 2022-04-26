import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { SiGithub, SiTwitter, SiYoutube } from 'react-icons/si';

import { ConnectButton } from '~/components/ConnectButton';
import Logo from '~/components/Logo';

interface LayoutProps {
	children?: React.ReactNode;
}

function Navbar() {
	return (
		<Flex as='nav' justify='space-between' align='center' py={5} px={8}>
			<NextLink href='/' passHref>
				<Link>
					<Logo height='50' />
				</Link>
			</NextLink>
			<ConnectButton />
		</Flex>
	);
}

function Footer() {
	return (
		<Flex as='nav' justify='space-between' w='full' p={6}>
			<HStack spacing={3}>
				<Link target='blank' href='https://github.com/dead-mans-switch'>
					<SiGithub />
				</Link>
				<Link target='blank' href='https://twitter.com/DeadMansSwitch3'>
					<SiTwitter />
				</Link>
				<Link
					target='blank'
					href='https://www.youtube.com/channel/UCfIluAbtfV-AYYia1XrWd2Q'>
					<SiYoutube />
				</Link>
			</HStack>
			<Text align='center'>Built with ❤️ on top of StarkNet and Argent X</Text>
		</Flex>
	);
}

export default function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<Flex direction='column' minH='100vh'>
			<Navbar />
			<Box flexGrow={1}>{children}</Box>
			<Footer />
		</Flex>
	);
}
