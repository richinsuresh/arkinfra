"use client";

import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { properties, type Property } from "@/lib/properties";
import PropertyCard from "@/components/PropertyCard";
import FilterBar from "@/components/FilterBar";

/**
 * Listings Page — more spacing between cards, consistent card heights and inner padding.
 */
export default function ListingsPage() {
  // Compute price bounds
  const prices = properties.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const types = useMemo(() => Array.from(new Set(properties.map((p) => p.type))), []);

  // memoize initial filter so it remains stable across renders
  const initialFilter = useMemo(
    () => ({ type: "All", bedrooms: null as number | null, range: [minPrice, maxPrice] as [number, number] }),
    [minPrice, maxPrice]
  );

  const [filter, setFilter] = useState(initialFilter);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filter.type !== "All" && p.type !== filter.type) return false;
      if (filter.bedrooms !== null && p.bedrooms < filter.bedrooms) return false;
      if (p.price < filter.range[0] || p.price > filter.range[1]) return false;
      return true;
    });
  }, [filter]);

  return (
    <Box as="main" bg="black" minH="100vh" py={{ base: 12, md: 16 }}>
      <Container maxW="1100px">
        {/* Page heading */}
        <Heading mb={4} color="white">
          Listings
        </Heading>
        <Text color="gray.300" mb={10}>
          Browse properties. Click “Enquire Now” to view details and request more information.
        </Text>

        {/* Filter bar */}
        <Box mb={12}>
          <FilterBar
            min={minPrice}
            max={maxPrice}
            types={types}
            onChange={setFilter}
            initial={initialFilter}
          />
        </Box>

        {/* Property cards grid — responsive, roomy spacing */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: 10, md: 14, lg: 20 }} // 40px, 56px, 80px
        >
          {filtered.map((p: Property) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </SimpleGrid>

        {/* Empty state */}
        {filtered.length === 0 && (
          <Box mt={12} textAlign="center" color="gray.400">
            No properties match your filters.
          </Box>
        )}
      </Container>
    </Box>
  );
}
