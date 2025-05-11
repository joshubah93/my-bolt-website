import { CircleDollarSign, Clock, Shield, Award, Users } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-12 w-12 text-primary" strokeWidth={1.5} />,
    title: 'Premium Properties',
    description: 'Access to exclusive luxury properties not available on the mainstream market.'
  },
  {
    icon: <CircleDollarSign className="h-12 w-12 text-primary" strokeWidth={1.5} />,
    title: 'Best Value',
    description: 'Our market expertise ensures you get the best value whether buying or selling.'
  },
  {
    icon: <Users className="h-12 w-12 text-primary" strokeWidth={1.5} />,
    title: 'Expert Agents',
    description: 'Our team of experienced agents provides personalized service and expert guidance.'
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" strokeWidth={1.5} />,
    title: 'Trusted Security',
    description: 'Your transactions and personal information are protected with the highest security standards.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why Choose Luxe Estates
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide a premium real estate experience with personalized service and unparalleled expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-md hover:border-primary/20"
            >
              <div className="mb-6 p-4 rounded-xl bg-primary/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;