import type { AppProps } from 'next/app';
import NextHead from 'next/head';
import { InjectedConnector, StarknetProvider } from '@starknet-react/core';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

import { Global } from '@emotion/react';

const Fonts = () => (
	<Global
		styles={`
      @font-face {
        font-family: 'Heading Font Name';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./BabakOne-Regular.ttf') format('ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
	/>
);

const theme = extendTheme({
	//	fonts: { heading: 'BabakOne-Regular' },
	styles: {
		global: {
			'html, body': {
				color: 'orange.100',
				backgroundColor: 'gray.900',
			},
			button: {
				color: 'gray.900',
				backgroundColor: 'red.500',
				backgroundImage: 'linear-gradient(to right, red.500, orange.500)',
				backgroundGradient: 'linear(to-br, #f79263, #e24b70',
			},
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	const connectors = [new InjectedConnector()];

	return (
		<>
			<DefaultSeo
				defaultTitle='Deadman.me'
				description='Make sure that your loved ones can get your stuff once you hit the curb.
      '
				openGraph={{
					type: 'website',
					locale: 'en',
					url: 'https://deadman.me',
					site_name: 'Deadman.me',
					images: [
						{
							url: `~/public/site-preview.png`,
							width: 1728,
							height: 972,
						},
					],
				}}
			/>

			<StarknetProvider autoConnect connectors={connectors}>
				<ChakraProvider theme={theme}>
					<NextHead>
						<title>Dead Man's Switch</title>
					</NextHead>
					<Component {...pageProps} />
				</ChakraProvider>
			</StarknetProvider>
		</>
	);
}

export default MyApp;
