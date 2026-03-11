import React from 'react';

// 1. Update the Type definition to wrap params in a Promise
type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

/**
 * If you use generateMetadata, it also needs to be async 
 * and await the params.
 */
export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return {
    title: `Listing ${id}`,
  };
}

export default async function ListingPage({ params, searchParams }: Props) {
  // 2. Await the params before accessing properties
  const { id } = await params;
  
  // 3. Await searchParams if you are using them (e.g., filters, sorting)
  const sParams = await searchParams;

  // Example: Fetching data using the ID
  // const listing = await getListingById(id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Listing Details</h1>
      <p className="mt-2">Displaying information for ID: <strong>{id}</strong></p>
      
      {/* Your listing UI components go here */}
      <section className="mt-6">
        {/* <ListingGallery data={listing} /> */}
      </section>
    </div>
  );
}
