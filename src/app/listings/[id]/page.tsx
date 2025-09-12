// src/app/listings/[id]/page.tsx
import React from "react";
import ListingClient from "@/components/ListingClient";

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
    images: ["/placeholder-1.jpg", "/placeholder-2.jpg"],
    features: ["3 Bedrooms", "2 Bathrooms", "Balcony", "Covered Parking"],
  };

  return <ListingClient listing={listing} />;
}
