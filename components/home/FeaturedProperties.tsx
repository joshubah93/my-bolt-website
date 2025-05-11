"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize, MapPin, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for properties
const propertyCategories = [
  {
    id: 'all',
    label: 'All',
    properties: [
      {
        id: '1',
        title: 'Modern Beachfront Villa',
        price: 2450000,
        address: 'Malibu, CA',
        beds: 4,
        baths: 3.5,
        sqft: 3200,
        tags: ['Premium', 'New'],
        featured: true,
        imageUrl: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: '2',
        title: 'Downtown Luxury Apartment',
        price: 850000,
        address: 'Los Angeles, CA',
        beds: 2,
        baths: 2,
        sqft: 1450,
        tags: ['Exclusive'],
        featured: true,
        imageUrl: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: '3',
        title: 'Contemporary Mountain Home',
        price: 1750000,
        address: 'Aspen, CO',
        beds: 5,
        baths: 4,
        sqft: 4100,
        tags: ['Premium'],
        featured: true,
        imageUrl: 'https://images.pexels.com/photos/2566860/pexels-photo-2566860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: '4',
        title: 'Waterfront Penthouse',
        price: 3200000,
        address: 'Miami, FL',
        beds: 3,
        baths: 3.5,
        sqft: 2800,
        tags: ['Premium', 'New'],
        featured: true,
        imageUrl: 'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
  },
  {
    id: 'luxury',
    label: 'Luxury',
    properties: [
      {
        id: '1',
        title: 'Modern Beachfront Villa',
        price: 2450000,
        address: 'Malibu, CA',
        beds: 4,
        baths: 3.5,
        sqft: 3200,
        tags: ['Premium', 'New'],
        featured: true,
        imageUrl: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: '4',
        title: 'Waterfront Penthouse',
        price: 3200000,
        address: 'Miami, FL',
        beds: 3,
        baths: 3.5,
        sqft: 2800,
        tags: ['Premium', 'New'],
        featured: true,
        imageUrl: 'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
  },
  {
    id: 'condos',
    label: 'Condos',
    properties: [
      {
        id: '2',
        title: 'Downtown Luxury Apartment',
        price: 850000,
        address: 'Los Angeles, CA',
        beds: 2,
        baths: 2,
        sqft: 1450,
        tags: ['Exclusive'],
        featured: true,
        imageUrl: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
  },
  {
    id: 'houses',
    label: 'Houses',
    properties: [
      {
        id: '3',
        title: 'Contemporary Mountain Home',
        price: 1750000,
        address: 'Aspen, CO',
        beds: 5,
        baths: 4,
        sqft: 4100,
        tags: ['Premium'],
        featured: true,
        imageUrl: 'https://images.pexels.com/photos/2566860/pexels-photo-2566860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Featured Properties
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover our hand-picked selection of premium properties currently available on the market.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/properties">
              View All Properties
            </Link>
          </Button>
        </div>

        <PropertyTabs />
      </div>
    </section>
  );
};

const PropertyTabs = () => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <div className="flex justify-between items-center mb-8">
        <TabsList className="h-auto p-1">
          {propertyCategories.map((category) => (
            <TabsTrigger 
              key={category.id}
              value={category.id}
              className="px-4 py-2 rounded-full data-[state=active]:bg-background"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {propertyCategories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    price: number;
    address: string;
    beds: number;
    baths: number;
    sqft: number;
    tags: string[];
    featured: boolean;
    imageUrl: string;
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else {
      return `$${(price / 1000).toFixed(0)}K`;
    }
  };

  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link href={`/properties/${property.id}`}>
          <Image 
            src={property.imageUrl} 
            alt={property.title}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            fill
          />
        </Link>
        
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-3 right-3 z-10 bg-black/20 backdrop-blur-sm hover:bg-black/30 rounded-full transition-all",
            isFavorite ? "text-red-500" : "text-white"
          )}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={cn("h-5 w-5", isFavorite ? "fill-current" : "")} />
        </Button>
        
        {/* Tags */}
        {property.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-2">
            {property.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant={tag === 'Premium' ? 'default' : tag === 'New' ? 'secondary' : 'outline'}
                className={cn(
                  "font-medium text-xs",
                  tag === 'Premium' ? 'bg-primary' : 
                  tag === 'New' ? 'bg-green-500' : 
                  'bg-white/80 text-foreground'
                )}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {/* Price */}
        <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md text-white px-4 py-1 rounded-full font-semibold">
          {formatPrice(property.price)}
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">
            <Link href={`/properties/${property.id}`} className="hover:underline underline-offset-2">
              {property.title}
            </Link>
          </h3>
        </div>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="text-sm truncate">{property.address}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4 text-muted-foreground" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-muted-foreground" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4 text-muted-foreground" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href={`/properties/${property.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeaturedProperties;