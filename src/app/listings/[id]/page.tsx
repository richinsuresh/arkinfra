// src/app/listings/[id]/page.tsx
import React from "react";

type PageProps = { params: { id: string } };

// Server component — safe to be async; fetch data here
export default async function ListingPage({ params }: PageProps) {
  const { id } = params;

  // TODO: replace with your real API call
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/${id}`, { cache: "no-store" });
  // const listing = await res.json();

  // Temporary placeholder listing while you wire the API
  const listing = {
    id,
    title: "3 BHK Spacious Apartment",
    price: "₹50,00,000",
    location: "Sample City, MG Road",
    status: "Available",
    description:
      "A bright and airy 3 BHK with ample cross-ventilation, modern fittings, and easy access to metro and shops.",
    images: [
      // replace or remove if you fetch real images
      "/placeholder-1.jpg",
      "/placeholder-2.jpg",
    ],
    features: ["3 Bedrooms", "2 Bathrooms", "Balcony", "Covered Parking"],
  };

  return <ListingClient listing={listing} />;
}

/* -------------------------------
   Client component: renders UI
   (uses Chakra primitives so it must be a client)
   ------------------------------- */
"use client";
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
import React from "react";

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

function ListingClient({ listing }: { listing: Listing }) {
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
