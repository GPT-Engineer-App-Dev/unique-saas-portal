import { Box, Flex, Text, Button, Heading, VStack, Container, Spacer } from '@chakra-ui/react';
import { FaStar, FaUsers, FaRocket } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading size="md" ml={5}>SaaS Company</Heading>
        <Spacer />
        <Button variant="ghost" mr={5}>Features</Button>
        <Button variant="ghost" mr={5}>Testimonials</Button>
        <Button variant="ghost" mr={5}>Contact</Button>
      </Flex>
      <Container maxW="container.xl" centerContent>
        <Box p={10} textAlign="center">
          <Heading as="h1" size="2xl">Empower Your Team with Our SaaS Solution</Heading>
          <Text fontSize="xl" mt={5}>Streamline your processes and boost productivity.</Text>
          <Button colorScheme="blue" size="lg" mt={10}>Get Started</Button>
        </Box>
        <VStack spacing={8} mt={20} mb={20}>
          <Feature icon={FaRocket} title="Launch Quickly" description="Deploy in minutes with zero downtime." />
          <Feature icon={FaUsers} title="Collaborate Effectively" description="Enhance team collaboration with real-time updates." />
          <Feature icon={FaStar} title="Top-Notch Support" description="24/7 support to help you get the most out of our product." />
        </VStack>
        <Box bg="gray.100" p={10} w="full">
          <Heading as="h3" size="lg" textAlign="center">What Our Customers Say</Heading>
          <Testimonial text="This product has revolutionized our workflow!" author="Jane Doe, CEO of Acme Inc." />
          <Testimonial text="A must-have tool for any serious business." author="John Smith, Product Manager at Startup XYZ" />
        </Box>
        <Box as="footer" p={5} bg="gray.700" color="white" textAlign="center">
          © 2023 SaaS Company. All rights reserved.
        </Box>
      </Container>
    </Box>
  );
};

const Feature = ({ icon, title, description }) => (
  <Flex direction="column" align="center" p={5} bg="white" borderRadius="md" boxShadow="md">
    <Box as={icon} size="50px" />
    <Text fontWeight="bold" mt={3}>{title}</Text>
    <Text textAlign="center" mt={1}>{description}</Text>
  </Flex>
);

const Testimonial = ({ text, author }) => (
  <Box bg="white" p={5} mt={5} borderRadius="md" boxShadow="md">
    <Text>{text}</Text>
    <Text fontWeight="bold" mt={3}>{author}</Text>
  </Box>
);

export default Index;