import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

// Mock data for agents
const agents = [
  {
    id: '1',
    name: 'Jennifer Parker',
    title: 'Luxury Property Specialist',
    bio: 'With over 15 years of experience in luxury real estate, Jennifer specializes in high-end properties and has a keen eye for architectural details.',
    experience: 15,
    languages: ['English', 'Spanish', 'French'],
    phone: '(310) 555-1234',
    email: 'jennifer@luxeestates.com',
    social: {
      instagram: 'jennifer_luxeestates',
      linkedin: 'jenniferparker',
    },
    imageUrl: 'https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    properties: 24,
    specialties: ['Luxury Homes', 'Waterfront', 'New Construction'],
  },
  {
    id: '2',
    name: 'Michael Roberts',
    title: 'Investment Property Advisor',
    bio: 'Michael has helped numerous clients build their real estate portfolios with a focus on long-term value appreciation and rental income potential.',
    experience: 12,
    languages: ['English', 'German'],
    phone: '(310) 555-2345',
    email: 'michael@luxeestates.com',
    social: {
      instagram: 'michael_luxeestates',
      linkedin: 'michaelroberts',
    },
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    properties: 18,
    specialties: ['Investment Properties', 'Commercial', 'Multi-family'],
  },
  {
    id: '3',
    name: 'Emma Chen',
    title: 'Residential Sales Expert',
    bio: 'Emma's client-focused approach and in-depth knowledge of local markets have earned her a reputation for exceeding client expectations.',
    experience: 8,
    languages: ['English', 'Mandarin', 'Cantonese'],
    phone: '(310) 555-3456',
    email: 'emma@luxeestates.com',
    social: {
      instagram: 'emma_luxeestates',
      linkedin: 'emmachen',
    },
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    properties: 31,
    specialties: ['Single Family Homes', 'Condos', 'First-time Buyers'],
  },
  {
    id: '4',
    name: 'David Williams',
    title: 'Urban Property Specialist',
    bio: 'David specializes in downtown properties and has an extensive network of contacts in urban development and city planning.',
    experience: 10,
    languages: ['English', 'Italian'],
    phone: '(310) 555-4567',
    email: 'david@luxeestates.com',
    social: {
      instagram: 'david_luxeestates',
      linkedin: 'davidwilliams',
    },
    imageUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    properties: 27,
    specialties: ['Urban Properties', 'Lofts', 'Luxury Condos'],
  },
  {
    id: '5',
    name: 'Sophia Martinez',
    title: 'Luxury Estate Agent',
    bio: 'Sophia has built a reputation for discretion and excellence, serving high-profile clients and handling exclusive off-market properties.',
    experience: 14,
    languages: ['English', 'Spanish', 'Portuguese'],
    phone: '(310) 555-5678',
    email: 'sophia@luxeestates.com',
    social: {
      instagram: 'sophia_luxeestates',
      linkedin: 'sophiamartinez',
    },
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    properties: 22,
    specialties: ['Celebrity Homes', 'Estates', 'Private Sales'],
  },
  {
    id: '6',
    name: 'James Wilson',
    title: 'Architectural Specialist',
    bio: 'With a background in architecture, James provides unique insights into property design, construction quality, and renovation potential.',
    experience: 9,
    languages: ['English'],
    phone: '(310) 555-6789',
    email: 'james@luxeestates.com',
    social: {
      instagram: 'james_luxeestates',
      linkedin: 'jameswilson',
    },
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    properties: 19,
    specialties: ['Architectural Gems', 'Historic Properties', 'Modern Design'],
  },
];

export default function AgentsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-muted/30 py-12 md:py-16 border-b border-border mb-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet Our Expert Agents</h1>
            <p className="text-lg text-muted-foreground">
              Our team of experienced real estate professionals is dedicated to helping you achieve your real estate goals with personalized service and market expertise.
            </p>
          </div>
        </div>
      </div>
      
      {/* Agents Grid */}
      <div className="container px-4 mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
      
      {/* Join Our Team Section */}
      <div className="container px-4 mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-muted/20 border border-border p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(#333_1px,transparent_1px)]" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team of Professionals</h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented real estate professionals to join our team. If you're passionate about real estate and providing exceptional client service, we'd love to hear from you.
              </p>
              <Button size="lg" asChild>
                <Link href="/careers">
                  View Career Opportunities
                </Link>
              </Button>
            </div>
            
            <div className="relative w-full md:w-64 h-64 flex-shrink-0">
              <Image 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Join our team"
                className="object-cover rounded-xl shadow-lg"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AgentCardProps {
  agent: {
    id: string;
    name: string;
    title: string;
    bio: string;
    experience: number;
    languages: string[];
    phone: string;
    email: string;
    social: {
      instagram: string;
      linkedin: string;
    };
    imageUrl: string;
    properties: number;
    specialties: string[];
  };
}

const AgentCard = ({ agent }: AgentCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardContent className="p-0">
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image 
            src={agent.imageUrl} 
            alt={agent.name}
            className="object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
            <p className="text-white/90">{agent.title}</p>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {agent.bio}
          </p>
          
          <div className="flex items-center gap-3 flex-wrap mb-4">
            {agent.specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary">
                {specialty}
              </Badge>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <span className="text-muted-foreground block">Experience</span>
              <span className="font-medium">{agent.experience} years</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Properties</span>
              <span className="font-medium">{agent.properties} listings</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Languages</span>
              <span className="font-medium">{agent.languages.join(', ')}</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <Button variant="default" className="w-full justify-start" asChild>
              <Link href={`mailto:${agent.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email Agent</span>
              </Link>
            </Button>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link href={`tel:${agent.phone}`}>
                  <Phone className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={`https://www.instagram.com/${agent.social.instagram}`} target="_blank">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={`https://www.linkedin.com/in/${agent.social.linkedin}`} target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};