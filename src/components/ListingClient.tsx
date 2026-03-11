'use client';

import React from 'react';
import {
  Box,
  Stack,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Icon,
  Badge,
  Divider,
} from '@chakra-ui/react';
import { FiMapPin, FiMaximize, FiBriefcase } from 'react-icons/fi';
import ImageGallery from './ImageGallery';
import type { Property } from '@/lib/properties';

interface ListingClientProps {
  listing: Property;
}

export default function ListingClient({ listing }: ListingClientProps) {
  return (
    <Box maxW="6xl" mx="auto" px={6} py={10}>
      {/* FIX: Changed spacing={8} to gap={8} */}
      <Stack direction={{ base: "column", md: "row" }} gap={8} align="flex-start">
        
        {/* Left: Images / Gallery */}
        {/* FIX: Changed spacing={4} to gap={4} */}
        <VStack gap={4} align="stretch" w={{ base: "100%", md: "60%" }}>
          {listing.images && listing.images.length > 0 ? (
            <ImageGallery images={listing.images} />
          ) : (
            <Box h="400px" bg="gray.800" borderRadius="lg" display="flex" alignItems="center" justifyContent="center">
              <Text color="gray.500">No images available</Text>
            </Box>
          )}
          
          <Box py={4}>
            <Heading size="lg" mb={4} color="white">Description</Heading>
            <Text color="gray.400" lineHeight="tall">
              {listing.description || "No description available for this property."}
            </Text>
          </Box>
        </VStack>

        {/* Right: Details / Enquiry Card */}
        {/* FIX: Changed spacing={6} to gap={6} */}
        <VStack gap={6} align="stretch" w={{ base: "100%", md: "40%" }} position="sticky" top="100px">
          <Box p={6} bg="whiteAlpha.50" borderRadius="xl" borderWidth="1px" borderColor="whiteAlpha.100">
            <Badge colorScheme="blue" mb={3}>{listing.type}</Badge>
            <Heading size="xl" mb={2} color="white">£{listing.price.toLocaleString()}</Heading>
            
            <HStack gap={2} mb={6} color="gray.400">
              <Icon as={FiMapPin} />
              <Text fontSize="md">{listing.location}</Text>
            </HStack>

            <Divider borderColor="whiteAlpha.200" mb={6} />

            {/* FIX: Changed spacing={4} to gap={4} */}
            <VStack gap={4} align="stretch" mb={8}>
              <HStack justify="space-between">
                <HStack gap={2}>
                  <Icon as={FiBriefcase} color="gray.500" />
                  <Text color="gray.300">Bedrooms</Text>
                </HStack>
                <Text fontWeight="bold" color="white">{listing.bedrooms}</Text>
              </HStack>

              <HStack justify="space-between">
                <HStack gap={2}>
                  <Icon as={FiMaximize} color="gray.500" />
                  <Text color="gray.300">Area</Text>
                </HStack>
                <Text fontWeight="bold" color="white">{listing.sqft} sq ft</Text>
              </HStack>
            </VStack>

            <Button size="lg" width="full" bg="white" color="black" _hover={{ bg: "gray.200" }}>
              Enquire Now
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Box>
  );
}
