// src/components/ImageGallery.tsx
"use client";

import { SimpleGrid, Box, Image } from "@chakra-ui/react";

type ImageItem = {
  src: string;
  alt: string;
};

export default function ImageGallery({ images }: { images: ImageItem[] }) {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3 }}
      gap={4}                // ✅ space between images
      w="100%"
      h="100%"
    >
      {images.map((img, i) => (
        <Box
          key={i}
          borderRadius="md"
          overflow="hidden"
          h="100%"
          display="flex"
          alignItems="stretch"
        >
          <Image
            src={img.src}
            alt={img.alt}
            w="100%"
            h="100%"
            objectFit="cover"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
}
