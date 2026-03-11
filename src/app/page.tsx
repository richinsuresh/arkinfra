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
      {/* FULLSCREEN HERO */}
      <Box
        as="header"
        position="relative"
        width="100%"
        height="100vh"
        maxHeight="1000px"
        overflow="hidden"
        bgImage="url('/hero-large.jpg')"
        bgSize="cover"
        bgPos="center"
      >
        {/* Darker overlay so white text shines */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-b, rgba(0,0,0,0.75), rgba(0,0,0,0.5))"
          zIndex={1}
        />

        <Container
          maxW="1100px"
          position="relative"
          zIndex={2}
          height="100%"
          display="flex"
          alignItems="center"
        >
          <VStack align="start" gap={6} maxW="720px">
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              color="white"
              fontWeight={800}
              lineHeight="1.05"
              letterSpacing="-0.02em"
            >
              Exceptional properties, crafted for living.
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.300"
              maxW="2xl"
              fontWeight={400}
            >
              Discover our curated portfolio of premium apartments, villas and commercial spaces —
              photography-first presentation and international standards.
            </Text>

            <HStack gap={4}>
              {/* Fix: Use asChild for Link composition in Chakra v3 */}
              <Button asChild size="lg" bg="white" color="black" _hover={{ bg: "gray.200" }}>
                <Link href="/listings">
                  View listings <Icon as={FiArrowRight} ml={2} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                borderColor="gray.500"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
              >
                <Link href="/contact">Contact us</Link>
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* FEATURED FEATURES SECTION */}
      {/* Fix: Changed 'py={24}' to 'size="hero"' as the Section component does not accept 'py' */}
      <Section size="hero">
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

      {/* CTA SECTION */}
      <Box py={24} borderTop="1px solid" borderColor="whiteAlpha.200">
        <Container maxW="1100px">
          <VStack gap={8} textAlign="center">
            <Heading size="2xl">Ready to find your next home?</Heading>
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
