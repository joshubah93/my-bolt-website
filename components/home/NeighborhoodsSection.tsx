import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

// Mock data for neighborhoods
const neighborhoods = [
  {
    id: 'beverly-hills',
    name: 'Beverly Hills',
    listings: 24,
    averagePrice: '$4.5M',
    imageUrl: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'malibu',
    name: 'Malibu',
    listings: 18,
    averagePrice: '$6.2M',
    imageUrl: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'santa-monica',
    name: 'Santa Monica',
    listings: 32,
    averagePrice: '$3.8M',
    imageUrl: 'https://images.pexels.com/photos/2563381/pexels-photo-2563381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }
];

const NeighborhoodsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Explore Neighborhoods
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover premier locations with exceptional lifestyle amenities and investment potential.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/neighborhoods">
              View All Areas
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {neighborhoods.map((neighborhood) => (
            <Link key={neighborhood.id} href={`/neighborhoods/${neighborhood.id}`}>
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image 
                    src={neighborhood.imageUrl} 
                    alt={neighborhood.name}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4" />
                      <h3 className="text-xl font-semibold">{neighborhood.name}</h3>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Badge className="bg-white/20 hover:bg-white/30 text-white">
                        {neighborhood.listings} Listings
                      </Badge>
                      <Badge className="bg-white/20 hover:bg-white/30 text-white">
                        Avg. {neighborhood.averagePrice}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodsSection;