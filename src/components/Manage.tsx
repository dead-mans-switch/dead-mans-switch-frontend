import {
	Button,
	Flex,
	Heading,
	Text,
	Stat,
	StatLabel,
	StatNumber,
	Wrap,
} from '@chakra-ui/react';
import { useStarknet, useStarknetCall } from '@starknet-react/core';
import * as React from 'react';

import SetSwitch from '~/components/SetSwitch';
import { useDeadmanContract } from '~/hooks/deadman';
import truncateAddress from '~/lib/truncateAddress';
import { AliveButton } from './AliveButton';

const countdown = [
	[1, 'Year'],
	[11, 'Months'],
	[3, 'Weeks'],
	[6, 'Days'],
	[22, 'Hours'],
	[34, 'Minutes'],
	[35, 'Seconds'],
];

export default function Manage() {
	const { account } = useStarknet();
	const { contract: deadman } = useDeadmanContract();
	const { data: heirOf } = useStarknetCall({
		contract: deadman,
		method: 'heir_of',
		args: [account],
	});
	const { data: timeUntilDeath } = useStarknetCall({
		contract: deadman,
		method: 'time_until_death',
		args: [account],
	});

	const heirAddress = Array.isArray(heirOf) ? heirOf[0].toString(16) : '';
	const timeLeft = Array.isArray(timeUntilDeath)
		? timeUntilDeath[0].toString(10)
		: '';

	if (Array.isArray(heirOf) && heirOf[0].isZero()) {
		return <SetSwitch />;
	}

	return (
		<Flex direction='column' gap={5}>
			<Heading>Active dead man's switch</Heading>
			<Text>Trusted address</Text>
			<Text fontSize='3xl'>{truncateAddress(`0x${heirAddress}`)}</Text>
			<Text>Countdown</Text>
			<Text fontSize='3xl'>{timeLeft}</Text>
			{/* <Wrap>
        {countdown.map(([amount, unit]) => (
          <Stat>
            <StatNumber>{amount}</StatNumber>
            <StatLabel>{unit}</StatLabel>
          </Stat>
        ))}
      </Wrap> */}
			<Text>Click the button to reset the timer</Text>
			<AliveButton />
			<Button
				variant='outline'
				h={16}
				_hover={{ bg: '#feba57' }}
				color='gray.50'
				bg='gray.800'>
				Edit switch
			</Button>
		</Flex>
	);
}
