// src/app/listings/[id]/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/lib/properties";
import { Box, Container, Heading, Text, SimpleGrid, Image, HStack, Tag } from "@chakra-ui/react";

export default function PropertyDetail({ params }: { params: { id: string } }) {
  const prop = properties.find((p) => p.id === params.id);
  if (!prop) return notFound();

  return (
    <Container maxW="container.lg" py={8}>
      <HStack justify="space-between" align="start" mb={4}>
        <div>
          <Heading>{prop.title}</Heading>
          <Text color="muted.500">{prop.location} · {prop.type}</Text>
        </div>
        <Tag colorScheme="brand" fontWeight="600" size="lg">₹{prop.price.toLocaleString("en-IN")}</Tag>
      </HStack>

      <Box mb={6}>
        <Link href="/listings" style={{ color: "inherit", textDecoration: "underline" }}>
          ← Back to listings
        </Link>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        <Box gridColumn={{ base: "1", md: "1 / span 2" }}>
          <Image src={prop.images[0]} alt={prop.title} width="100%" height="480px" objectFit="cover" borderRadius="md" />
        </Box>

        <Box>
          <Heading size="sm" mb={3}>Quick facts</Heading>
          <Text mb={2}><strong>Bedrooms:</strong> {prop.bedrooms}</Text>
          <Text mb={2}><strong>Type:</strong> {prop.type}</Text>
          <Text mb={2}><strong>Location:</strong> {prop.location}</Text>
          <Box mt={4} borderWidth="1px" borderRadius="md" p={3}>
            <Text fontSize="sm" color="muted.500">{prop.description}</Text>
          </Box>
        </Box>

        {/* extra photos below */}
        <Box gridColumn={{ base: "1", md: "1 / span 3" }} mt={6}>
          <Heading size="md" mb={3}>Photos</Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3}>
            {prop.images.map((src) => (
              <Image key={src} src={src} alt={prop.title} objectFit="cover" height="140px" width="100%" borderRadius="md" />
            ))}
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
