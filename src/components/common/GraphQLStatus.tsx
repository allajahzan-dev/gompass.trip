'use client';

import { usePackages } from "@/lib/graphql/hooks";

// GraphQL connection status indicator
export default function GraphQLStatus() {
    const { packages, loading, error } = usePackages();

    if (loading) {
        return (
            <div className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
                <div className="flex items-center gap-2">
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                    <span className="text-sm">Connecting to Strapi...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="fixed bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm">Using JSON fallback</span>
                </div>
            </div>
        );
    }

    if (packages.length > 0) {
        return (
            <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-300 rounded-full animate-pulse"></div>
                    <span className="text-sm">GraphQL Connected</span>
                </div>
            </div>
        );
    }

    return null;
}