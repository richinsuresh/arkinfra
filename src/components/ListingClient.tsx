// src/components/ListingClient.tsx
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
  ListItem,
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
      <Stack direction={{ base: "column", md: "row" }} spacing={8} align="flex-start">
        {/* Left: Images / Gallery */}
        <VStack spacing={4} align="stretch" w={{ base: "100%", md: "60%" }}>
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
              bg="gray.50"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="gray.400">No image</Text>
            </Box>
          )}

          <HStack spacing={3}>
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
            <Heading as="h1" size="lg">
              {listing.title}
            </Heading>
            <Spacer />
            <Badge colorScheme={listing.status === "Available" ? "green" : "red"}>
              {listing.status}
            </Badge>
          </HStack>

          <Text fontSize="lg" fontWeight="semibold" mb={2}>
            {listing.price}
          </Text>

          <Text color="gray.600" mb={4}>
            📍 {listing.location}
          </Text>

          <Text mb={4}>{listing.description}</Text>

          <Box mb={6}>
            <Heading as="h3" size="sm" mb={2}>
              Features
            </Heading>
            <List spacing={2}>
              {listing.features?.map((f, idx) => (
                <ListItem key={idx}>• {f}</ListItem>
              ))}
            </List>
          </Box>

          <HStack spacing={3}>
            <Button colorScheme="teal">Contact Agent</Button>
            <Button variant="outline">Schedule Visit</Button>
          </HStack>
        </Box>
      </Stack>
    </Box>
  );
}
