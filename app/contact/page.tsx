"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin,
  MessageSquare,
  Users2,
  Home,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      toast({
        title: "Message sent successfully!",
        description: "Our team will contact you shortly.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-muted/30 py-12 md:py-16 border-b border-border mb-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We're here to help you with all your real estate needs. Reach out to our team for personalized assistance.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Content */}
      <div className="container px-4 mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a subject</option>
                    <option value="buying">I'm interested in buying a property</option>
                    <option value="selling">I want to sell my property</option>
                    <option value="renting">I'm looking for a rental</option>
                    <option value="investing">Investment opportunities</option>
                    <option value="other">Other inquiry</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="consent"
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                  required
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  I consent to having this website store my submitted information so they can respond to my inquiry.
                </label>
              </div>
              
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="grid grid-cols-1 gap-6 mb-10">
              <ContactInfoCard 
                icon={<MapPin className="h-6 w-6 text-primary" />}
                title="Our Office"
                content={<>123 Luxury Lane<br />Beverly Hills, CA 90210</>}
              />
              
              <ContactInfoCard 
                icon={<Phone className="h-6 w-6 text-primary" />}
                title="Phone"
                content={<>
                  Sales: <a href="tel:+18001234567" className="hover:underline">+1 (800) 123-4567</a><br />
                  Support: <a href="tel:+18009876543" className="hover:underline">+1 (800) 987-6543</a>
                </>}
              />
              
              <ContactInfoCard 
                icon={<Mail className="h-6 w-6 text-primary" />}
                title="Email"
                content={<>
                  <a href="mailto:info@luxeestates.com" className="hover:underline">info@luxeestates.com</a><br />
                  <a href="mailto:support@luxeestates.com" className="hover:underline">support@luxeestates.com</a>
                </>}
              />
              
              <ContactInfoCard 
                icon={<Clock className="h-6 w-6 text-primary" />}
                title="Working Hours"
                content={<>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </>}
              />
            </div>
            
            {/* Social Media Links */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <Link href="https://instagram.com" target="_blank">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <Link href="https://twitter.com" target="_blank">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <Link href="https://facebook.com" target="_blank">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Map */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Our Location</h3>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted">
                {/* In a real app, you would integrate with Google Maps or a similar service */}
                <div className="flex flex-col items-center justify-center h-full">
                  <MapPin className="h-10 w-10 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map would be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Contact Sections */}
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">How Can We Help You?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ContactTypeCard 
            icon={<Home className="h-12 w-12 text-primary" strokeWidth={1.5} />}
            title="Buy or Sell a Home"
            description="Get expert guidance on buying or selling your property with our experienced agents."
            ctaText="Find an Agent"
            ctaLink="/agents"
          />
          
          <ContactTypeCard 
            icon={<Users2 className="h-12 w-12 text-primary" strokeWidth={1.5} />}
            title="Join Our Team"
            description="Looking for a career in real estate? Learn about opportunities to join our growing team."
            ctaText="View Careers"
            ctaLink="/careers"
          />
          
          <ContactTypeCard 
            icon={<MessageSquare className="h-12 w-12 text-primary" strokeWidth={1.5} />}
            title="General Inquiries"
            description="Have questions about our services or need more information? We're here to help."
            ctaText="Contact Support"
            ctaLink="#"
            onClick={() => {
              toast({
                title: "Support team notified",
                description: "Our support team will contact you shortly.",
                duration: 5000,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactInfoCard = ({ icon, title, content }: ContactInfoCardProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <div className="text-muted-foreground">
          {content}
        </div>
      </div>
    </div>
  );
};

interface ContactTypeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  onClick?: () => void;
}

const ContactTypeCard = ({ icon, title, description, ctaText, ctaLink, onClick }: ContactTypeCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
        <div className="p-4 rounded-full bg-primary/5 mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6">
          {description}
        </p>
        <Button asChild className="w-full" onClick={onClick}>
          <Link href={ctaLink}>
            {ctaText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};