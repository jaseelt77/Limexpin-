
import Hero from "@/components/Hero/Hero";
import BrandsMarquee from "@/components/UI/BrandsMarquee";
import Button from "@/components/UI/Button";
import HelpAchieveGoals from "@/components/UI/HelpGoals";
import NewsletterBanner from "@/components/UI/NewsLetterBanner";
import TeamSection from "@/components/UI/TeamSelection";
import VisionTabs from "@/components/UI/VisionTabs";
import { CheckCircle } from "lucide-react";
import Image from "next/image";


export default function AboutUs() {
    const features = [
    'Curabitur gravida sem',
    'Mauris tempor ac erat',
    'Fusce eleifend lectus',
    'Fusce non sodales dui',
    'Class aptent taciti',
    'Nam elementum semper',
  ];
  return (
    <>
      {/* Banner Hero */}
      <Hero
        subtitle="About Us"
        title="Let’s Talk About Your Project"
        description="Tell us about your idea and we’ll help bring it to life."
        align="center"
        bannerImage="/images/contact.jpg" 
      />

      {/* Contact Section */}
      <section className="bg-white text-black">
        <div className="container mx-auto  px-6 py-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Left Side - Images */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Top Left - Large Image */}
            <div className="col-span-1 row-span-2">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop"
                alt="Business professionals"
                width={600}        
                height={400}       
                quality={80}
                priority
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Top Right - Image */}
            <div className="col-span-1">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=280&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-3xl"
                width={600}       
                height={320}       
                quality={80}
                priority
              />
            </div>

            {/* Bottom Right - Experience Box */}
            <div className="col-span-1 bg-brand-primary/60 text-brand-black rounded-2xl p-6 flex flex-col justify-center items-center text-center">
              <p className="text-5xl md:text-6xl font-black mb-3">10+</p>
              <p className="text-lg md:text-xl font-semibold">Years of Experience</p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <p className="text-sm md:text-base font-bold tracking-widest text-brand-primary case uppercase">
                About <span className="case normal-case">LIMEXPIN</span>
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Innovative Strategies for Tax Prosperity
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Duis et dolor vel neque faucibus tincidunt. Nulla semper condimentum tellus in ultricies. Nunc tempor ipsum nec fermentum consequat. Cras et felis ultricies, molestie dolor sit amet, condimentum ante.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-brand-primary flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              
              <Button
               variant="primary"
                className="px-8 py-3.5  text-white font-regular rounded-full text-white hover:bg-brand-accent transition-colors duration-300 transform hover:scale-105"
                >
                Learn More
            </Button>
            </div>
          </div>
        </div>
        </div>
        </section>
        <section className="text-brand-black py-16">
          <div className="container mx-auto px-6 text-center">
           <VisionTabs />
          </div>
        </section>
        <section className="text-brand-black py-16 bg-brand-primary/10 rounded-b-4xl">
          <div className="mx-auto md:px-6 text-center"> 
           <p className="text-gray-600 text-lg leading-relaxed py-12">
              Duis et dolor vel neque faucibus tincidunt. Nulla semper condimentum tellus in ultricies.
            </p>
           <BrandsMarquee />
          </div>
        </section>

         <section className="text-brand-black py-16">
          <div className="container mx-auto  text-center"> 
           <HelpAchieveGoals />
          </div>
        </section>

        <section className="text-brand-black">
          <div className="mx-auto  text-center"> 
           <TeamSection />
          </div>
        </section>
        <section className="text-brand-black">
          <div className="container mx-auto  py-12 rounded-t-4xl text-center"> 
          <NewsletterBanner />
          </div>
        </section>
       
    </>
  );
}
