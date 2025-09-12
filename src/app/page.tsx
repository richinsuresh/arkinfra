// src/app/page.tsx
import { Box, Container, Heading, Text, HStack, Button, VStack } from "@chakra-ui/react";
import ImageGallery from "@/components/ImageGallery";

const GALLERY_IMAGES = [
  { src: "/properties/p1/1.jpg", alt: "Skyline 2BHK Apartment" },
  { src: "/properties/p2/1.jpg", alt: "Seaside Luxury Villa" },
  { src: "/properties/p3/1.jpg", alt: "Urban Studio" },
  { src: "/properties/p4/1.jpg", alt: "Business Park Office" },
  { src: "/properties/p5/1.jpg", alt: "Green Meadows 3BHK" },
  { src: "/properties/p6/1.jpg", alt: "Penthouse Royale" },
];

export default function Home() {
  return (
    <>
      {/* FULLSCREEN HERO */}
      <Box
        as="header"
        position="relative"
        width="100%"
        height="100vh"
        maxHeight="1000px"
        overflow="hidden"
        bgImage="url('/hero-large.jpg')"
        bgSize="cover"
        bgPos="center"
      >
        {/* darker overlay so white text shines */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-b, rgba(0,0,0,0.75), rgba(0,0,0,0.5))"
          zIndex={1}
        />

        <Container
          maxW="1100px"
          position="relative"
          zIndex={2}
          height="100%"
          display="flex"
          alignItems="center"
        >
          <VStack align="start" spacing={6} maxW="720px">
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              color="white"
              fontWeight={800}
              lineHeight="1.05"
              letterSpacing="-0.02em"
            >
              Exceptional properties, crafted for living.
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.300"
              maxW="2xl"
              fontWeight={400}
            >
              Discover our curated portfolio of premium apartments, villas and commercial spaces —
              photography-first presentation and international standards.
            </Text>

            <HStack spacing={4}>
              <Button size="lg" colorScheme="brand" as="a" href="/listings">
                View listings
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="gray.500"
                color="white"
                as="a"
                href="/contact"
              >
                Contact us
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* FEATURED GALLERY */}
      <Box
        as="section"
        width="100%"
        minHeight="80vh"
        py={{ base: 12, md: 20 }}
        bg="var(--page-bg)"
      >
        <Container maxW="1100px" mb={10} textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontWeight={800}
            color="white"
            mb={6}
          >
            Handpicked portfolio
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.400"
            maxW="3xl"
            marginLeft="auto"
            marginRight="auto"
            fontWeight={400}
            mb={10}
          >
            Photography-first presentation — click any image to view larger. We feature a selection
            of premium properties curated for international standards.
          </Text>
        </Container>

        <Container maxW="1100px" px={0}>
          <ImageGallery images={GALLERY_IMAGES} />
        </Container>
      </Box>
    </>
  );
}
