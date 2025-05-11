"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Search, Building, Home as HomeIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('buy');

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700">
          Find Your Dream Home
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
          Discover exceptional properties with Luxe Estates, where luxury meets lifestyle.
        </p>

        {/* Search Widget */}
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/20 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
          <Tabs defaultValue="buy" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="buy" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <HomeIcon className="h-4 w-4 mr-2" />
                Buy
              </TabsTrigger>
              <TabsTrigger value="rent" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Building className="h-4 w-4 mr-2" />
                Rent
              </TabsTrigger>
              <TabsTrigger value="sell" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Search className="h-4 w-4 mr-2" />
                Sell
              </TabsTrigger>
            </TabsList>

            <TabsContent value="buy" className="mt-0">
              <SearchForm type="buy" />
            </TabsContent>
            <TabsContent value="rent" className="mt-0">
              <SearchForm type="rent" />
            </TabsContent>
            <TabsContent value="sell" className="mt-0">
              <SearchForm type="sell" />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  );
};

interface SearchFormProps {
  type: 'buy' | 'rent' | 'sell';
}

const SearchForm = ({ type }: SearchFormProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div className="flex-1">
        <Input 
          placeholder="Enter location or ZIP code"
          className="bg-white/80 border-0 h-12 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-1">
        <Select>
          <SelectTrigger className="bg-white/80 border-0 h-12">
            <SelectValue placeholder="Property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="houses">Houses</SelectItem>
            <SelectItem value="apartments">Apartments</SelectItem>
            <SelectItem value="condos">Condos</SelectItem>
            <SelectItem value="land">Land</SelectItem>
          </SelectContent>
        </Select>
        
        <Select>
          <SelectTrigger className="bg-white/80 border-0 h-12">
            <SelectValue placeholder={type === 'sell' ? 'Bedrooms' : 'Price range'} />
          </SelectTrigger>
          <SelectContent>
            {type === 'sell' ? (
              <>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </>
            ) : (
              <>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="0-500000">Up to $500k</SelectItem>
                <SelectItem value="500000-1000000">$500k - $1M</SelectItem>
                <SelectItem value="1000000-2000000">$1M - $2M</SelectItem>
                <SelectItem value="2000000-5000000">$2M - $5M</SelectItem>
                <SelectItem value="5000000+">$5M+</SelectItem>
              </>
            )}
          </SelectContent>
        </Select>
        
        {type !== 'sell' && (
          <Select>
            <SelectTrigger className="bg-white/80 border-0 h-12">
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
        )}
      </div>
      
      <Button size="lg" className={cn(
        "px-8 h-12 font-medium whitespace-nowrap",
        type === 'buy' ? "bg-primary" : 
        type === 'rent' ? "bg-blue-600 hover:bg-blue-700" :
        "bg-orange-600 hover:bg-orange-700"
      )}>
        <Search className="h-4 w-4 mr-2" />
        <span>
          {type === 'buy' ? 'Search Properties' : 
           type === 'rent' ? 'Find Rentals' : 
           'Estimate Value'}
        </span>
      </Button>
    </div>
  );
};

export default HeroSection;