'use client';

import { usePackages } from '@/lib/graphql/hooks';
import Loader from '@/app/components/animations/Loader';
import Image from 'next/image';

// Example component showing how to use GraphQL hooks
export function PackagesList() {
  const { packages, loading, error } = usePackages();

  if (loading) return <Loader>Loading packages...</Loader>;
  
  if (error) {
    console.error('GraphQL Error:', error);
    return <div>Error loading packages. Check console for details.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <div key={pkg.id} className="border rounded-lg p-4">
          <h3 className="text-xl font-bold">{pkg.title}</h3>
          <p className="text-gray-600">{pkg.location}</p>
          <p className="text-sm">{pkg.days}</p>
          <p className="text-lg font-semibold">{pkg.price}</p>
          {pkg.images.length > 0 && (
            <Image 
              src={pkg.images[0]} 
              alt={pkg.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded mt-2"
            />
          )}
        </div>
      ))}
    </div>
  );
}