'use client';

import { useQuery } from '@apollo/client/react';
import { GET_PACKAGES, GET_PACKAGE_BY_ID, GET_SERVICES, GET_STORIES } from './queries';
import { 
  PackagesV5Response,
  PackageV5Response,
  ServicesV5Response,
  StoriesV5Response,
  LegacyPackage,
  LegacyService,
  LegacyStory,
  PackageV5,
  ServiceV5,
  StoryV5
} from './types';

// Custom hook for fetching packages
export function usePackages() {
  const { data, loading, error } = useQuery<PackagesV5Response>(GET_PACKAGES);

  // Transform Strapi v5 flat data to legacy format for backward compatibility
  const packages: LegacyPackage[] = data?.packages?.map((pkg: PackageV5, index: number) => ({
    id: index + 1, // Use index as ID since Strapi v5 doesn't expose numeric ID
    href: pkg.href,
    title: pkg.title,
    location: pkg.location,
    days: pkg.days.toString(),
    images: [], // Images will need separate handling in v5
    description1: pkg.description1,
    description2: pkg.description2,
    price: pkg.price.toString(),
    includes: pkg.includes || [],
    excludes: [],
    plans: [],
  })) || [];

  return {
    packages,
    loading,
    error,
  };
}

// Custom hook for fetching a single package by documentId
export function usePackageById(documentId: string) {
  const { data, loading, error } = useQuery<PackageV5Response>(GET_PACKAGE_BY_ID, {
    variables: { documentId },
    skip: !documentId, // Skip query if no documentId provided
  });

  // Transform Strapi v5 flat data to legacy format
  const packageData: LegacyPackage | null = data?.package ? {
    id: 1, // Use static ID since Strapi v5 doesn't expose numeric ID
    href: data.package.href,
    title: data.package.title,
    location: data.package.location,
    days: data.package.days.toString(),
    images: [], // Images will need separate handling in v5
    description1: data.package.description1,
    description2: data.package.description2,
    price: data.package.price.toString(),
    includes: data.package.includes || [],
    excludes: [],
    plans: [],
  } : null;

  return {
    package: packageData,
    loading,
    error,
  };
}

// Custom hook for fetching services
export function useServices() {
  const { data, loading, error } = useQuery<ServicesV5Response>(GET_SERVICES);

  // Transform Strapi v5 flat data to legacy format
  const services: LegacyService[] = data?.services?.map((service: ServiceV5, index: number) => ({
    id: index + 1, // Use index as ID since Strapi v5 doesn't expose numeric ID
    title: service.title,
    description: service.description,
    icon: service.icon,
  })) || [];

  return {
    services,
    loading,
    error,
  };
}

// Custom hook for fetching customer stories
export function useStories() {
  const { data, loading, error } = useQuery<StoriesV5Response>(GET_STORIES);

  // Transform Strapi v5 flat data to legacy format
  const stories: LegacyStory[] = data?.stories?.map((story: StoryV5, index: number) => ({
    id: index + 1, // Use index as ID since Strapi v5 doesn't expose numeric ID
    name: story.name,
    location: story.location,
    review: story.review,
    rating: story.rating,
    image: '', // Images will need separate handling in v5
    description: story.review, // Map review to description for backward compatibility
  })) || [];

  return {
    stories,
    loading,
    error,
  };
}