import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Text,
} from '@chakra-ui/react';
import { useStarknet, useStarknetInvoke } from '@starknet-react/core';
import * as React from 'react';
import { toBN } from 'starknet/dist/utils/number';
import { bnToUint256 } from 'starknet/dist/utils/uint256';

import { address as deadmanAddress, useDeadmanContract } from '~/hooks/deadman';
import { useTokenContract } from '~/hooks/token';

function isValid(address: string) {
	return /^0x[0-9a-f]{64}$/.test(address);
}

export default function SetSwitch({}): JSX.Element {
	const [address, setAddress] = React.useState('');
	const [delay, setDelay] = React.useState('');
	const [error, setError] = React.useState('');

	const { contract: token } = useTokenContract();
	const { invoke: approveToken } = useStarknetInvoke({
		contract: token,
		method: 'approve',
	});

	const { contract: deadman } = useDeadmanContract();
	const { invoke: setHeir } = useStarknetInvoke({
		contract: deadman,
		method: 'set_heir',
	});

	return (
		<Flex direction='column' gap={5}>
			<Heading>Set dead man's switch</Heading>
			<Text>
				The dead man's switch will trigger after <em>2 years</em>. Every time
				you interact with your wallet, this timer will reset. Once the chosen
				amount of time has elapsed without any wallet activity, the switch will
				trigger and the chosen addresses will gain access to the assets in your
				wallet.
			</Text>
			<FormControl isInvalid={error !== ''}>
				<FormLabel htmlFor='address'>Trusted address</FormLabel>
				<Input
					h={16}
					id='address'
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					placeholder='0x123...'
				/>
				<FormErrorMessage>{error}</FormErrorMessage>
			</FormControl>
			<FormControl>
				<FormLabel htmlFor='delay'>Time to redeamable (seconds)</FormLabel>
				<Input
					h={16}
					id='delay'
					value={delay}
					onChange={(e) => setDelay(e.target.value)}
					placeholder='3600'
				/>
			</FormControl>
			<Button
				h={16}
				_hover={{ bg: '#feba57' }}
				bgGradient='linear(to-br, #f79263, #e24b70)'
				onClick={() => {
					// if (!isValid(address)) {
					//   setError("Invalid address");
					// } else {
					//   setError("");
					//   invoke({ args: [address, delay] });
					// }
					console.log('Calling', { address, delay });
					approveToken({
						args: [deadmanAddress, bnToUint256(toBN(1000))],
					}).then(() => setHeir({ args: [address, delay] }));
				}}>
				Activate switch
			</Button>
		</Flex>
	);
}
