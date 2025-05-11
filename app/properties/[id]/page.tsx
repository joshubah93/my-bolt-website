"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize, 
  Home, 
  Calendar, 
  Heart,
  Share,
  Printer,
  ArrowUpRight,
  Check,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

// Mock property data
const propertyData = {
  id: '1',
  title: 'Modern Beachfront Villa',
  description: 'This stunning beachfront villa offers unparalleled luxury with breathtaking ocean views from almost every room. Featuring an open-concept design that seamlessly blends indoor and outdoor living spaces, this property is perfect for entertaining or simply enjoying the peaceful coastal lifestyle. The gourmet kitchen is equipped with top-of-the-line appliances, custom cabinetry, and a large center island. The primary suite is a true retreat with a spa-like bathroom and private balcony overlooking the ocean.',
  price: 2450000,
  address: '123 Ocean Drive, Malibu, CA 90265',
  beds: 4,
  baths: 3.5,
  sqft: 3200,
  lotSize: 0.5,
  yearBuilt: 2019,
  propertyType: 'Villa',
  parkingSpaces: 2,
  features: [
    'Ocean view',
    'Private beach access',
    'Infinity pool',
    'Outdoor kitchen',
    'Smart home technology',
    'Floor-to-ceiling windows',
    'Radiant heated floors',
    'Wine cellar',
    'Home theater',
    'Gourmet kitchen',
    'Walk-in closets',
    'Spa-like bathrooms',
  ],
  images: [
    'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ],
  agent: {
    name: 'Jennifer Parker',
    phone: '(310) 555-1234',
    email: 'jennifer@luxeestates.com',
    imageUrl: 'https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }
};

// Generate static params for the mock property
export function generateStaticParams() {
  // Since we only have one property in our mock data
  return [
    { id: '1' }
  ];
}

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // In a real application, you would fetch the property data using the ID
  const property = propertyData;
  
  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  };
  
  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Property Navigation */}
      <div className="container px-4 mx-auto mb-6">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/properties" className="hover:text-foreground">Properties</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-foreground font-medium truncate max-w-xs">{property.title}</span>
        </div>
      </div>
      
      {/* Property Header */}
      <div className="container px-4 mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center text-lg">
              <MapPin className="h-5 w-5 mr-1 text-muted-foreground" />
              <span>{property.address}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">
              {formatPrice(property.price)}
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full flex items-center gap-1"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={cn("h-4 w-4", isFavorite ? "fill-red-500 text-red-500" : "")} />
                <span>{isFavorite ? 'Saved' : 'Save'}</span>
              </Button>
              <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                <Share className="h-4 w-4" />
                <span>Share</span>
              </Button>
              <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                <Printer className="h-4 w-4" />
                <span className="hidden sm:inline">Print</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Property Gallery */}
      <div className="container px-4 mx-auto mb-12">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-md">
          <Image 
            src={property.images[activeImageIndex]} 
            alt={`Property image ${activeImageIndex + 1}`}
            className="object-cover"
            fill
          />
          
          {/* Navigation Arrows */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white rounded-full px-3 py-1 text-sm">
            {activeImageIndex + 1} / {property.images.length}
          </div>
        </div>
        
        {/* Thumbnails */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          {property.images.map((image, index) => (
            <button
              key={index}
              className={cn(
                "relative h-16 w-24 md:h-20 md:w-32 flex-shrink-0 rounded-md overflow-hidden transition-all",
                activeImageIndex === index ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
              )}
              onClick={() => setActiveImageIndex(index)}
            >
              <Image 
                src={image} 
                alt={`Property thumbnail ${index + 1}`}
                className="object-cover"
                fill
              />
            </button>
          ))}
        </div>
      </div>
      
      {/* Property Content */}
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Property Details */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Property Details</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-xl">
                  <Bed className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Bedrooms</span>
                  <span className="font-semibold text-lg">{property.beds}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-xl">
                  <Bath className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Bathrooms</span>
                  <span className="font-semibold text-lg">{property.baths}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-xl">
                  <Maximize className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Square Feet</span>
                  <span className="font-semibold text-lg">{property.sqft.toLocaleString()}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-xl">
                  <Home className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Property Type</span>
                  <span className="font-semibold text-lg">{property.propertyType}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 mb-8">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Lot Size</span>
                  <span className="font-medium">{property.lotSize} acres</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Year Built</span>
                  <span className="font-medium">{property.yearBuilt}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Parking</span>
                  <span className="font-medium">{property.parkingSpaces} Spaces</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {property.description}
                </p>
              </div>
            </div>
            
            {/* Property Features */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Features & Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Property Location */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Location</h2>
              <div className="bg-muted aspect-[16/10] rounded-xl flex items-center justify-center mb-4">
                {/* In a real app, you would integrate with Google Maps or a similar service */}
                <div className="text-center p-6">
                  <MapPin className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">
                    Map view would be displayed here with the property location
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-sm py-1 px-3">Beach Nearby</Badge>
                <Badge variant="outline" className="text-sm py-1 px-3">Shopping Center</Badge>
                <Badge variant="outline" className="text-sm py-1 px-3">Restaurants</Badge>
                <Badge variant="outline" className="text-sm py-1 px-3">Public Transit</Badge>
                <Badge variant="outline" className="text-sm py-1 px-3">Schools</Badge>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent Form */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image 
                      src={property.agent.imageUrl} 
                      alt={property.agent.name}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{property.agent.name}</h3>
                    <p className="text-muted-foreground">Luxury Property Specialist</p>
                  </div>
                </div>
                
                <Tabs defaultValue="message" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="message">Send Message</TabsTrigger>
                    <TabsTrigger value="tour">Request Tour</TabsTrigger>
                  </TabsList>
                  <TabsContent value="message">
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your email"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Your phone"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="I'm interested in this property..."
                          rows={4}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          defaultValue={`Hi Jennifer, I'm interested in the Modern Beachfront Villa at 123 Ocean Drive. Could you provide more information?`}
                        />
                      </div>
                      <Button type="submit" className="w-full">Contact Agent</Button>
                    </form>
                  </TabsContent>
                  <TabsContent value="tour">
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your email"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Your phone"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <input
                            type="date"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          />
                        </div>
                        <div>
                          <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <textarea
                          placeholder="Additional comments..."
                          rows={2}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                      <Button type="submit" className="w-full">Schedule Tour</Button>
                    </form>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3">
                  <Button variant="outline" className="flex items-center justify-center gap-2 w-full">
                    <Calendar className="h-4 w-4" />
                    <span>Schedule a Call</span>
                  </Button>
                  <div className="flex items-center justify-between text-sm">
                    <a href={`tel:${property.agent.phone}`} className="text-primary hover:underline flex items-center">
                      <span>{property.agent.phone}</span>
                      <ArrowUpRight className="h-3 w-3 ml-1" />
                    </a>
                    <a href={`mailto:${property.agent.email}`} className="text-primary hover:underline flex items-center">
                      <span>{property.agent.email}</span>
                      <ArrowUpRight className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Mortgage Calculator */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Mortgage Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">
                      Home price
                    </label>
                    <input
                      type="text"
                      defaultValue={formatPrice(property.price)}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">
                      Down payment
                    </label>
                    <input
                      type="text"
                      defaultValue={formatPrice(property.price * 0.2)}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">
                        Interest rate
                      </label>
                      <input
                        type="text"
                        defaultValue="4.5%"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">
                        Loan term
                      </label>
                      <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option>30 years</option>
                        <option>15 years</option>
                        <option>10 years</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Principal & Interest</span>
                      <span className="font-medium">$9,956/mo</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Property Taxes</span>
                      <span className="font-medium">$2,450/mo</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Home Insurance</span>
                      <span className="font-medium">$450/mo</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-border mt-2">
                      <span className="font-semibold">Total Payment</span>
                      <span className="font-semibold text-lg">$12,856/mo</span>
                    </div>
                  </div>
                  <Button className="w-full">Get Pre-Approved</Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Similar Properties */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Similar Properties</h3>
              <div className="space-y-3">
                <SimilarPropertyCard 
                  title="Contemporary Beach House"
                  address="Venice Beach, CA"
                  price={1850000}
                  beds={3}
                  baths={2}
                  sqft={2100}
                  imageUrl="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <SimilarPropertyCard 
                  title="Luxury Waterfront Condo"
                  address="Santa Monica, CA"
                  price={1350000}
                  beds={2}
                  baths={2}
                  sqft={1800}
                  imageUrl="https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SimilarPropertyCardProps {
  title: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
}

const SimilarPropertyCard = ({ 
  title, 
  address, 
  price, 
  beds, 
  baths, 
  sqft, 
  imageUrl 
}: SimilarPropertyCardProps) => {
  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else {
      return `$${(price / 1000).toFixed(0)}K`;
    }
  };
  
  return (
    <div className="flex gap-3 border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative w-24 md:w-32 flex-shrink-0">
        <Image 
          src={imageUrl} 
          alt={title}
          className="object-cover h-full"
          width={120}
          height={90}
        />
      </div>
      <div className="flex flex-col justify-center py-2 pr-3">
        <h4 className="font-medium text-sm line-clamp-1">{title}</h4>
        <p className="text-xs text-muted-foreground mb-1">{address}</p>
        <p className="text-sm font-semibold text-primary">{formatPrice(price)}</p>
        <div className="flex gap-2 text-xs text-muted-foreground mt-1">
          <span>{beds} bd</span>
          <span>•</span>
          <span>{baths} ba</span>
          <span>•</span>
          <span>{sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </div>
  );
};