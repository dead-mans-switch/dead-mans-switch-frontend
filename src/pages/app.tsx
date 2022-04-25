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

import Layout from "~/components/Layout";
import SetSwitch from "~/components/SetSwitch";

export default function App(): JSX.Element {
  const { account } = useStarknet();
  if (account) {
    return (
      <Layout>
        <Flex direction="column" gap={8} minW="lg" maxW="xl" m="0 auto">
          <Tabs isFitted>
            <TabList>
              <Tab>Manage switch</Tab>
              <Tab>Redeem inheritance</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SetSwitch />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Layout>
    );
  }

  return (
    <Layout>
      <Text fontSize="xl" fontWeight="600">
        Connect to access the app
      </Text>
    </Layout>
  );
}
