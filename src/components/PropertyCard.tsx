// src/components/PropertyCard.tsx
import React from "react";
import Link from "next/link";
import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  Button,
  VStack,
} from "@chakra-ui/react";
import type { Property } from "@/lib/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Box
      borderWidth="1px"
      borderColor="gray.700"
      borderRadius="md"
      overflow="hidden"
      bg="gray.900"
      _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
      transition="all 200ms ease"
      display="flex"
      flexDirection="column"
    >
      {/* Image */}
      <Box height="220px" overflow="hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          width="100%"
          height="100%"
          objectFit="cover"
          loading="lazy"
        />
      </Box>

      {/* Details */}
      <VStack align="stretch" spacing={4} flex="1" p={6}>
        <HStack justify="space-between" align="start">
          <Box>
            <Heading size="sm" mb={1} color="white">
              {property.title}
            </Heading>
            <Text fontSize="sm" color="gray.400">
              {property.location} · {property.type}
            </Text>
          </Box>

          {/* price badge */}
          <Box
            as="div"
            px={3}
            py={1}
            borderRadius="md"
            backgroundColor="brand.500"
            color="white"
            fontWeight={600}
            fontSize="0.95rem"
            whiteSpace="nowrap"
          >
            ₹{property.price.toLocaleString("en-IN")}
          </Box>
        </HStack>

        <Text fontSize="sm" color="gray.400">
          {property.bedrooms} bd
        </Text>

        <Box flex="1" />

        {/* Enquire button (white rectangle, black text) */}
        <Button
          as={Link}
          href={`/listings/${property.id}`}
          variant="outline"
          border="2px solid white"
          borderRadius="md"
          bg="white"
          color="black"
          fontWeight="600"
          size="sm"
          width="full"
          _hover={{ bg: "gray.100" }}
        >
          Enquire Now
        </Button>
      </VStack>
    </Box>
  );
}
