import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Grid,
} from "@chakra-ui/react";

import Layout from "~/components/Layout";
import Logo from "~/components/Logo";

interface TutorialCardProps {
  children: string;
  imageSource: string;
  stepNumber: number;
}
function TutorialCard(props: TutorialCardProps) {
  return (
    <Box
      position="relative"
      bg="gray.700"
      p={3}
      borderRadius="2xl"
      w="full"
      minW={60}
      maxW={100}
      padding={0}
    >
      <Heading
        position="absolute"
        top={3}
        left={3}
        size="3xl"
        color="red.700"
        opacity="0.75"
      >
        {props.stepNumber}
      </Heading>
      <Image w="full" borderTopRadius="2xl" h={40} src={props.imageSource} />
      <Text m={3}>{props.children}</Text>
    </Box>
  );
}

export default function Index() {
  return (
    <Layout>
      <VStack>
        <Box as="header" m={6} w="full">
          <VStack mx={6}>
            <HStack mt={6}>
              <Logo height="150" />
              <Heading
                as="h1"
                size="4xl"
                bgClip="text"
                bgGradient="linear(to-br, #f79263, #e24b70)"
              >
                Dead Man's Switch
              </Heading>
            </HStack>
            <Flex gap={6} mt={6} wrap="wrap" align="center">
              <Button
                h={16}
                bgGradient="linear(to-br, #f79263, #e24b70)"
                _hover={{ bg: "#feba57" }}
              >
                Set dead man's switch
              </Button>
              <Heading
                bgGradient="linear(to-br, #f79263, #e24b70)"
                as="h4"
                size="sm"
                bgClip="text"
              >
                Ensure that your loved ones get access to your assets <br /> in
                case of your death.
              </Heading>
            </Flex>
          </VStack>
        </Box>
        <Box
          as="main"
          bg="gray.800"
          p={6}
          maxW="xl"
          m={6}
          mt={40}
          borderRadius="3xl"
        >
          <VStack>
            <Heading as="h3" size="md" textAlign="center">
              What is Dead Man's Switch?
            </Heading>
            <Text maxW="xl" mt={3} color="text">
              Dead Man's Switch allows trusted accounts to access the assets in
              your wallet in case your wallet has not been used for a long
              period of time. You decide who gets your inheritance and how much
              much time has to elapse before the dead man's switch triggers.
            </Text>
          </VStack>
          <VStack>
            <Heading as="h3" size="md" mt={6} textAlign="center">
              How does it work?
            </Heading>
            <Grid gap={3}>
              <TutorialCard
                imageSource="./DeadMansSwitch_Step1.jpg"
                stepNumber={1}
              >
                Connect your wallet.
              </TutorialCard>
              <TutorialCard
                imageSource="./DeadMansSwitch_Step2.jpg"
                stepNumber={2}
              >
                Set your trusted address and the timer.
              </TutorialCard>
              <TutorialCard
                imageSource="./DeadMansSwitch_Step3.jpg"
                stepNumber={3}
              >
                Die.
              </TutorialCard>
              <TutorialCard
                imageSource="./DeadMansSwitch_Step4.jpg"
                stepNumber={4}
              >
                Your trusted address will be able to access your assets after
                the timer elapses.
              </TutorialCard>
            </Grid>
          </VStack>

          <Button
            w="full"
            mt={8}
            h={16}
            _hover={{ bg: "#feba57" }}
            bgGradient="linear(to-br, #f79263, #e24b70)"
          >
            Set dead man's switch
          </Button>
        </Box>
      </VStack>
    </Layout>
  );
}
