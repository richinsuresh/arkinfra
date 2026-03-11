"use client";

import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  List,
  Stack,
  Image,
  Button,
  Spacer,
} from "@chakra-ui/react";

type Listing = {
  id: string;
  title: string;
  price: string;
  location: string;
  status: string;
  description: string;
  images?: string[];
  features?: string[];
};

export default function ListingClient({ listing }: { listing: Listing }) {
  return (
    <Box maxW="6xl" mx="auto" px={6} py={10}>
      {/* FIX: Changed spacing to gap for Chakra UI v3 compatibility */}
      <Stack direction={{ base: "column", md: "row" }} gap={8} align="flex-start">
        {/* Left: Images / Gallery */}
        <VStack gap={4} align="stretch" w={{ base: "100%", md: "60%" }}>
          {listing.images && listing.images.length > 0 ? (
            <Image
              src={listing.images[0]}
              alt={listing.title}
              borderRadius="md"
              objectFit="cover"
              w="100%"
              h={{ base: "220px", md: "360px" }}
            />
          ) : (
            <Box
              w="100%"
              h={{ base: "220px", md: "360px" }}
              borderRadius="md"
              bg="gray.800"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="gray.400">No image</Text>
            </Box>
          )}

          <HStack gap={3}>
            {listing.images?.slice(0, 3).map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`${listing.title}-${i}`}
                boxSize="72px"
                objectFit="cover"
                borderRadius="md"
              />
            ))}
          </HStack>
        </VStack>

        {/* Right: Details */}
        <Box w={{ base: "100%", md: "40%" }}>
          <HStack mb={3} align="center">
            <Heading as="h1" size="lg" color="white">
              {listing.title}
            </Heading>
            <Spacer />
            <Badge colorScheme={listing.status === "Available" ? "green" : "red"}>
              {listing.status}
            </Badge>
          </HStack>

          <Text fontSize="lg" fontWeight="semibold" mb={2} color="white">
            {listing.price}
          </Text>

          <Text color="gray.400" mb={4}>
            📍 {listing.location}
          </Text>

          <Text mb={4} color="gray.300">{listing.description}</Text>

          <Box mb={6}>
            <Heading as="h3" size="sm" mb={2} color="white">
              Features
            </Heading>
            {/* FIX: Updated to Chakra UI v3 List pattern and fixed closing tags */}
            <List.Root gap={2} variant="plain" color="gray.300">
              {listing.features?.map((f, idx) => (
                <List.Item key={idx}>• {f}</List.Item>
              ))}
            </List.Root>
          </Box>

          <HStack gap={3}>
            <Button bg="teal.500" color="white" _hover={{ bg: "teal.600" }}>
              Contact Agent
            </Button>
            <Button variant="outline" borderColor="gray.600" color="white">
              Schedule Visit
            </Button>
          </HStack>
        </Box>
      </Stack>
    </Box>
  );
}
