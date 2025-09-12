// src/components/PropertyCard.tsx
"use client";

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
      borderRadius="lg"
      overflow="hidden"
      bg="gray.900"
      _hover={{ boxShadow: "lg", transform: "translateY(-6px)" }}
      transition="transform 180ms ease, box-shadow 180ms ease"
      display="flex"
      flexDirection="column"
      minH="460px"       /* ensures row alignment */
    >
      {/* Image area — fixed height so all cards align */
      /* adjust height if you want taller images (e.g. 300px) */}
      <Box height="260px" overflow="hidden" flex="0 0 auto" bg="gray.800">
        <Image
          src={property.images?.[0] ?? "/placeholder.jpg"}
          alt={property.title}
          width="100%"
          height="100%"
          objectFit="cover"
          loading="lazy"
          style={{ display: "block" }}
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

        {/* spacer to push the button to the footer of the card */}
        <Box flex="1" />

        {/* Enquire button — white rounded rectangle with black text */}
        <Button
          as={Link}
          href={`/listings/${property.id}`}
          variant="solid"
          bg="white"
          color="black"
          fontWeight="600"
          size="sm"
          width="full"
          borderRadius="md"
          _hover={{ bg: "gray.100" }}
        >
          Enquire Now
        </Button>
      </VStack>
    </Box>
  );
}
