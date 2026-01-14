import React from 'react';
import { Facebook, Twitter, Linkedin,} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Mark Joseph',
      role: 'CTO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
      socials: [
        { icon: Facebook, link: '#' },
        { icon: Twitter, link: '#' },
        { icon: Linkedin, link: '#' },
      ],
    },
    {
      name: 'Ella Grace',
      role: 'Creative head',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
      socials: [
        { icon: Facebook, link: '#' },
        { icon: Twitter, link: '#' },
        { icon: Linkedin, link: '#' },
      ],
    },
    {
      name: 'Kylian Herrera',
      role: 'Marketing Head',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
      socials: [
        { icon: Facebook, link: '#' },
        { icon: Twitter, link: '#' },
        { icon: Linkedin, link: '#' },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-pink-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Left - Title */}
          <div className="space-y-4">
            <p className="text-sm md:text-base font-bold tracking-widest text-brand-primary uppercase">
              Our Team
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Meet Our Professional Team
            </h2>
          </div>

          {/* Right - Description & CTA */}
          <div className="flex flex-col justify-between space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
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

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group rounded-3xl overflow-hidden h-80 md:h-96">
              {/* Image */}
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={500}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

              {/* Info Card - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                {/* Name & Role */}
                <div>
                  <h3 className="text-2xl font-bold bg-brand-primary/60 py-2 px-4 text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {member.role}
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                  {member.socials.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={idx}
                        href={social.link}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-primary transition-colors duration-300"
                      >
                        <Icon size={18} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}