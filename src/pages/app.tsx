import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import { useStarknet } from "@starknet-react/core";
import * as React from "react";

import Layout from "~/components/Layout";
import Manage from "~/components/Manage";
import Redeem from "~/components/Redeem";

export default function App(): JSX.Element {
  const { account } = useStarknet();

  if (account) {
    return (
      <Layout>
        <Flex direction="column" gap={8} minW="lg" maxW="xl" m="0 auto">
          <Tabs isFitted variant="soft-rounded">
            <TabList>
              <Tab
                bg="gray.800"
                color="white"
                _selected={{
                  color: "gray.900",
                  bgGradient: "linear(to-br, #f79263, #e24b70)",
                }}
                mx={2}
              >
                Manage switch
              </Tab>
              <Tab
                bg="gray.800"
                color="white"
                _selected={{
                  color: "gray.900",
                  bgGradient: "linear(to-br, #f79263, #e24b70)",
                }}
                mx={2}
              >
                Redeem inheritance
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Manage />
              </TabPanel>
              <TabPanel>
                <Redeem />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Layout>
    );
  }

  return (
    <Layout>
      <Text fontSize="3xl" fontWeight="600" mt="32" textAlign="center">
        Connect to access the app
      </Text>
    </Layout>
  );
}
