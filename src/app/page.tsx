'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import { FiHome, FiMapPin, FiShield, FiArrowRight } from 'react-icons/fi';
import Section from '@/components/Section';

export default function Home() {
  return (
    <Box as="main" bg="black" color="white">
      {/* Hero Section */}
      <Box
        position="relative"
        h="90vh"
        w="full"
        display="flex"
        alignItems="center"
        backgroundImage="url('/hero-large.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'rgba(0,0,0,0.6)',
          zIndex: 1,
        }}
      >
        <Container maxW="1100px" position="relative" zIndex={2}>
          <VStack align="start" gap={6} maxW="720px">
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '6xl' }}
              fontWeight="bold"
              lineHeight="1.1"
              letterSpacing="-0.02em"
            >
              Building the Infrastructure of Tomorrow
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.300">
              Arkinfra leads the way in premium real estate and sustainable
              infrastructure development. Discover spaces designed for living
              well.
            </Text>
            <HStack gap={4} pt={4}>
              {/* FIX: Used asChild to properly compose Button with Next.js Link */}
              <Button
                asChild
                size="lg"
                bg="white"
                color="black"
                px={8}
                _hover={{ bg: 'gray.200' }}
              >
                <Link href="/listings">
                  View Properties <Icon as={FiArrowRight} ml={2} />
                </Link>
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Section py={24}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 12, md: 20 }}>
          <VStack align="start" gap={4}>
            <Icon as={FiHome} boxSize={8} color="white" />
            <Heading size="md">Premium Quality</Heading>
            <Text color="gray.400">
              We use the highest grade materials and modern architectural
              designs to ensure lasting value.
            </Text>
          </VStack>

          <VStack align="start" gap={4}>
            <Icon as={FiMapPin} boxSize={8} color="white" />
            <Heading size="md">Prime Locations</Heading>
            <Text color="gray.400">
              Our projects are strategically located in high-growth areas with
              excellent connectivity.
            </Text>
          </VStack>

          <VStack align="start" gap={4}>
            <Icon as={FiShield} boxSize={8} color="white" />
            <Heading size="md">Trusted Legacy</Heading>
            <Text color="gray.400">
              With decades of experience, we have built a reputation for
              transparency and timely delivery.
            </Text>
          </VStack>
        </SimpleGrid>
      </Section>

      {/* CTA Section */}
      <Box py={24} borderTop="1px solid" borderColor="whiteAlpha.200">
        <Container maxW="1100px">
          <VStack gap={8} textAlign="center">
            <Heading size="2xl">Ready to find your next home?</Heading>
            {/* FIX: Used asChild here as well */}
            <Button
              asChild
              size="lg"
              variant="outline"
              color="white"
              px={10}
              _hover={{ bg: 'white', color: 'black' }}
            >
              <Link href="/listings">Explore Listings</Link>
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
