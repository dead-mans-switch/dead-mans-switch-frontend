import type { AppProps } from 'next/app';
import NextHead from 'next/head';
import { InjectedConnector, StarknetProvider } from '@starknet-react/core';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	styles: {
		global: {
			'html, body': {
				backgroundColor: 'gray.900',
			},
			p: { color: 'gray.50' },
			h1: { color: 'gray.50' },
			h2: { color: 'gray.50' },
			h3: { color: 'gray.50' },
			h4: { color: 'gray.50' },
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	const connectors = [new InjectedConnector()];

	return (
		<StarknetProvider autoConnect connectors={connectors}>
			<ChakraProvider theme={theme}>
				<NextHead>
					<title>StarkNet ❤️ React</title>
				</NextHead>
				<Component {...pageProps} />
			</ChakraProvider>
		</StarknetProvider>
	);
}

export default MyApp;
