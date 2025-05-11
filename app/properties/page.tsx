"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Search, SlidersHorizontal, MapPin, Bed, Bath, Maximize, Heart, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

// Mock data for properties
const properties = [
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
  {
    id: '5',
    title: 'Rustic Country Estate',
    price: 1950000,
    address: 'Santa Barbara, CA',
    beds: 6,
    baths: 4.5,
    sqft: 5200,
    tags: [],
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '6',
    title: 'Modern City Loft',
    price: 975000,
    address: 'San Francisco, CA',
    beds: 1,
    baths: 2,
    sqft: 1100,
    tags: [],
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '7',
    title: 'Lakefront Cottage',
    price: 1250000,
    address: 'Lake Tahoe, CA',
    beds: 3,
    baths: 2,
    sqft: 1800,
    tags: [],
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '8',
    title: 'Desert Oasis Villa',
    price: 2100000,
    address: 'Palm Springs, CA',
    beds: 4,
    baths: 3,
    sqft: 3000,
    tags: [],
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }
];

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else {
      return `$${(price / 1000).toFixed(0)}K`;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-muted/30 py-8 md:py-12 border-b border-border mb-8">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Properties</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore our curated selection of exceptional properties in premium locations.
          </p>
        </div>
      </div>
      
      {/* Filter Bar */}
      <div className="container px-4 mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-stretch md:items-center">
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-3 flex-grow">
            {/* Mobile Filter Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden w-full flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Filters</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Filter Properties</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <MobileFilters />
                </div>
              </SheetContent>
            </Sheet>
            
            {/* Search */}
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search by location, keyword..." 
                className="pl-10 h-10 md:h-auto"
              />
            </div>
            
            {/* Desktop Filters */}
            <div className="hidden md:flex gap-3">
              <PropertyTypeFilter />
              <PriceRangeFilter />
              <BedroomsFilter />
              <Button variant="outline" className="h-10">
                More Filters <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* View Controls */}
          <div className="flex justify-between md:justify-end gap-3 mt-3 md:mt-0">
            <div className="flex items-center gap-2">
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'outline'} 
                size="icon"
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'default' : 'outline'} 
                size="icon"
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px] h-10">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="beds">Most Bedrooms</SelectItem>
                <SelectItem value="sqft">Largest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {/* Properties Grid/List */}
      <div className="container px-4 mx-auto mb-12">
        <div className={cn(
          viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
            : "flex flex-col gap-4"
        )}>
          {properties.map((property) => (
            viewMode === 'grid' ? (
              <PropertyCard 
                key={property.id} 
                property={property}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={() => toggleFavorite(property.id)}
              />
            ) : (
              <PropertyListItem 
                key={property.id} 
                property={property}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={() => toggleFavorite(property.id)}
              />
            )
          ))}
        </div>
      </div>
      
      {/* Pagination */}
      <div className="container px-4 mx-auto">
        <div className="flex justify-center">
          <nav className="flex items-center gap-1">
            <Button variant="outline" size="icon" disabled>
              <ChevronDown className="h-4 w-4 rotate-90" />
            </Button>
            <Button variant="default" size="icon" className="size-9">1</Button>
            <Button variant="outline" size="icon" className="size-9">2</Button>
            <Button variant="outline" size="icon" className="size-9">3</Button>
            <div className="mx-1">...</div>
            <Button variant="outline" size="icon" className="size-9">12</Button>
            <Button variant="outline" size="icon">
              <ChevronDown className="h-4 w-4 -rotate-90" />
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}

const PropertyTypeFilter = () => {
  return (
    <Select>
      <SelectTrigger className="w-[150px] h-10">
        <SelectValue placeholder="Property Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="any">Any</SelectItem>
        <SelectItem value="house">House</SelectItem>
        <SelectItem value="apartment">Apartment</SelectItem>
        <SelectItem value="condo">Condo</SelectItem>
        <SelectItem value="townhouse">Townhouse</SelectItem>
        <SelectItem value="land">Land</SelectItem>
      </SelectContent>
    </Select>
  );
};

const PriceRangeFilter = () => {
  return (
    <Select>
      <SelectTrigger className="w-[150px] h-10">
        <SelectValue placeholder="Price Range" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="any">Any</SelectItem>
        <SelectItem value="0-500000">Up to $500k</SelectItem>
        <SelectItem value="500000-1000000">$500k - $1M</SelectItem>
        <SelectItem value="1000000-2000000">$1M - $2M</SelectItem>
        <SelectItem value="2000000-5000000">$2M - $5M</SelectItem>
        <SelectItem value="5000000+">$5M+</SelectItem>
      </SelectContent>
    </Select>
  );
};

const BedroomsFilter = () => {
  return (
    <Select>
      <SelectTrigger className="w-[150px] h-10">
        <SelectValue placeholder="Bedrooms" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="any">Any</SelectItem>
        <SelectItem value="1">1+</SelectItem>
        <SelectItem value="2">2+</SelectItem>
        <SelectItem value="3">3+</SelectItem>
        <SelectItem value="4">4+</SelectItem>
        <SelectItem value="5">5+</SelectItem>
      </SelectContent>
    </Select>
  );
};

const MobileFilters = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-1 block">Property Type</label>
        <PropertyTypeFilter />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Price Range</label>
        <PriceRangeFilter />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Bedrooms</label>
        <BedroomsFilter />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Bathrooms</label>
        <Select>
          <SelectTrigger className="w-full h-10">
            <SelectValue placeholder="Bathrooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Square Footage</label>
        <Select>
          <SelectTrigger className="w-full h-10">
            <SelectValue placeholder="Square Footage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="0-1000">Up to 1,000 sqft</SelectItem>
            <SelectItem value="1000-2000">1,000 - 2,000 sqft</SelectItem>
            <SelectItem value="2000-3000">2,000 - 3,000 sqft</SelectItem>
            <SelectItem value="3000-5000">3,000 - 5,000 sqft</SelectItem>
            <SelectItem value="5000+">5,000+ sqft</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Property Features</label>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="justify-start">Pool</Button>
          <Button variant="outline" className="justify-start">Waterfront</Button>
          <Button variant="outline" className="justify-start">Garage</Button>
          <Button variant="outline" className="justify-start">Garden</Button>
        </div>
      </div>
      <div className="pt-4">
        <Button className="w-full">Apply Filters</Button>
      </div>
    </div>
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
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const PropertyCard = ({ property, isFavorite, onToggleFavorite }: PropertyCardProps) => {
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
          onClick={onToggleFavorite}
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

const PropertyListItem = ({ property, isFavorite, onToggleFavorite }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-72 lg:w-80">
          <div className="aspect-[4/3] md:aspect-auto md:h-full relative overflow-hidden">
            <Link href={`/properties/${property.id}`}>
              <Image 
                src={property.imageUrl} 
                alt={property.title}
                className="object-cover transition-transform duration-500 group-hover:scale-105 h-full"
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
              onClick={onToggleFavorite}
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
        </div>
        
        <div className="flex flex-col p-4 md:p-6 flex-grow">
          <div className="mb-4">
            <h3 className="font-semibold text-xl mb-2">
              <Link href={`/properties/${property.id}`} className="hover:underline underline-offset-2">
                {property.title}
              </Link>
            </h3>
            
            <div className="flex items-center text-muted-foreground mb-4">
              <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="text-sm">{property.address}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center p-2 bg-muted/30 rounded-md">
              <Bed className="h-5 w-5 text-muted-foreground mb-1" />
              <span className="text-sm font-medium">{property.beds} Beds</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-muted/30 rounded-md">
              <Bath className="h-5 w-5 text-muted-foreground mb-1" />
              <span className="text-sm font-medium">{property.baths} Baths</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-muted/30 rounded-md">
              <Maximize className="h-5 w-5 text-muted-foreground mb-1" />
              <span className="text-sm font-medium">{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
          
          <div className="mt-auto flex gap-3">
            <Button variant="default" className="flex-1" asChild>
              <Link href={`/properties/${property.id}`}>
                View Details
              </Link>
            </Button>
            <Button variant="outline" className="flex-1">
              Request Tour
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};