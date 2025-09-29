// GraphQL Response Types for Strapi v5

// Strapi v5 Image Types (flat structure)
export interface StrapiImageV5 {
  url: string;
  alternativeText?: string;
}

export type StrapiImagesV5 = Array<{
  url: string;
  alternativeText?: string;
}>;

// Package Types
export interface PackageAttributes {
  title: string;
  location: string;
  days: string;
  description1: string;
  description2: string;
  price: string;
  href: string;
  includes: string[];
  images: StrapiImages;
  createdAt: string;
  updatedAt: string;
}

export interface PackageData {
  id: string;
  attributes: PackageAttributes;
}

export interface PackagesResponse {
  packages: {
    data: PackageData[];
  };
}

export interface PackageResponse {
  package: {
    data: PackageData;
  };
}

// Service Types
export interface ServiceAttributes {
  title: string;
  description: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceData {
  id: string;
  attributes: ServiceAttributes;
}

export interface ServicesResponse {
  services: {
    data: ServiceData[];
  };
}

// Story Types
export interface StoryAttributes {
  name: string;
  location: string;
  review: string;
  rating: number;
  image: StrapiImage;
  createdAt: string;
  updatedAt: string;
}

export interface StoryData {
  id: string;
  attributes: StoryAttributes;
}

export interface StoriesResponse {
  stories: {
    data: StoryData[];
  };
}

export interface PackageV5 {
  documentId: string;
  title: string;
  location: string;
  days: number;
  description1: string;
  description2: string;
  price: number;
  href: string;
  includes: string[] | null;
  images?: StrapiImagesV5;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceV5 {
  documentId: string;
  title: string;
  description: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
}

export interface StoryV5 {
  documentId: string;
  name: string;
  location: string;
  review: string;
  rating: number;
  image?: StrapiImageV5;
  createdAt: string;
  updatedAt: string;
}

// v5 Response Types
export interface PackagesV5Response {
  packages: PackageV5[];
}

export interface PackageV5Response {
  package: PackageV5;
}

export interface ServicesV5Response {
  services: ServiceV5[];
}

export interface StoriesV5Response {
  stories: StoryV5[];
}
