"use client";

import React from "react";
import {
  Box,
  HStack,
  VStack,
  Select,
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
    // FIX: Changed spacing={5} to gap={5}
    <VStack align="stretch" gap={5}>
      {/* Top row */}
      {/* FIX: Changed spacing={4} to gap={4} */}
      <HStack gap={4} justify="space-between" flexWrap="wrap">
        {/* FIX: Changed spacing={3} to gap={3} */}
        <HStack gap={3}>
          <Box minW="150px">
            <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={1} textTransform="uppercase">
              Property Type
            </Text>
            <Select value={type} onChange={(e) => setType(e.target.value)} color="white" bg="whiteAlpha.100" border="none">
              <option value="All">All Types</option>
              {types.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </Select>
          </Box>

          <Box minW="150px">
            <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={1} textTransform="uppercase">
              Min. Bedrooms
            </Text>
            <Select 
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
            </Select>
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

      {/* Price Range Row */}
      <Box pt={2}>
        <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={4} textTransform="uppercase">
          Price Range: £{range[0].toLocaleString()} - £{range[1].toLocaleString()}
        </Text>
        {/* If your Slider component also fails, ensure it follows the new v3 pattern or use standard inputs */}
        <Box px={2}>
          {/* Note: In Chakra v3, RangeSlider often requires specific sub-components. 
              If this Slider causes a type error next, we may need to update its structure. */}
          <Slider.Root 
            min={min} 
            max={max} 
            step={10000} 
            value={range} 
            onValueChange={(details) => setRange(details.value as [number, number])}
          >
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumb index={0} />
              <Slider.Thumb index={1} />
            </Slider.Control>
          </Slider.Root>
        </Box>
      </Box>
    </VStack>
  );
};

export default FilterBar;
