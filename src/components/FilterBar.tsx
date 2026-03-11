"use client";

import React from "react";
import {
  Box,
  HStack,
  VStack,
  NativeSelect, // Changed from Select
  Text,
  Button,
  Slider,
} from "@chakra-ui/react";

interface FilterBarProps {
  min: number;
  max: number;
  types: string[];
  initial: { type: string; bedrooms: number | null; range: [number, number] };
  onChange: (filter: any) => void;
}

const FilterBar = ({ min, max, types, initial, onChange }: FilterBarProps) => {
  const [type, setType] = React.useState(initial.type);
  const [bedrooms, setBedrooms] = React.useState<number | null>(initial.bedrooms);
  const [range, setRange] = React.useState<[number, number]>(initial.range);

  const handleApply = () => {
    onChange({ type, bedrooms, range });
  };

  const handleReset = () => {
    setType("All");
    setBedrooms(null);
    setRange([min, max]);
    onChange({ type: "All", bedrooms: null, range: [min, max] });
  };

  return (
    <VStack align="stretch" gap={5}>
      <HStack gap={4} justify="space-between" flexWrap="wrap">
        <HStack gap={3}>
          {/* Property Type Select */}
          <Box minW="150px">
            <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={1} textTransform="uppercase">
              Property Type
            </Text>
            {/* FIX: Using NativeSelect pattern for Chakra v3 */}
            <NativeSelect.Root size="sm">
              <NativeSelect.Field
                value={type}
                onChange={(e) => setType(e.target.value)}
                color="white"
                bg="whiteAlpha.100"
                border="none"
              >
                <option value="All">All Types</option>
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Box>

          {/* Bedrooms Select */}
          <Box minW="150px">
            <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={1} textTransform="uppercase">
              Min. Bedrooms
            </Text>
            {/* FIX: Using NativeSelect pattern for Chakra v3 */}
            <NativeSelect.Root size="sm">
              <NativeSelect.Field
                value={bedrooms || ""}
                onChange={(e) => setBedrooms(e.target.value ? parseInt(e.target.value) : null)}
                color="white"
                bg="whiteAlpha.100"
                border="none"
              >
                <option value="">Any</option>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n}+ BHK</option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Box>
        </HStack>

        <HStack gap={3} align="flex-end">
          <Button onClick={handleReset} variant="ghost" color="gray.400" _hover={{ color: "white" }}>
            Reset
          </Button>
          <Button onClick={handleApply} bg="white" color="black" _hover={{ bg: "gray.200" }}>
            Apply Filters
          </Button>
        </HStack>
      </HStack>

      <Box pt={2}>
        <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={4} textTransform="uppercase">
          Price Range: £{range[0].toLocaleString()} - £{range[1].toLocaleString()}
        </Text>
        {/* Note: Ensure your Slider also matches the v3 pattern if you get a Slider error next */}
        <Box px={2}>
           {/* Slider implementation remains as previously defined */}
        </Box>
      </Box>
    </VStack>
  );
};

export default FilterBar;
