"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-muted/20 dark:bg-muted/5">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(#333_1px,transparent_1px)]" />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="bg-background border border-border rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Let's Find Your Dream Home
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today to discuss your real estate needs. Our expert team is ready to help you find the perfect property.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your property needs"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Your information is secure and will never be shared.</span>
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Contact Us Now'}
                </Button>
              </form>
            </div>
            
            <div className="relative hidden lg:block">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
                }}
              />
              <div className="absolute inset-0 bg-primary/30 dark:bg-primary/40 backdrop-blur-sm" />
              
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
                <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl max-w-md text-center">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Luxe Estates?</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Access to exclusive off-market properties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Personalized service tailored to your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Expert guidance throughout the entire process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Local market expertise and global connections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;