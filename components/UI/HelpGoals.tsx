import React from 'react';
import { Cog, Scale, TrendingUp } from 'lucide-react';
import Button from './Button';


export default function HelpAchieveGoals() {
  const features = [
    {
      icon: <Cog size={40} className="text-white" />,
      title: 'Commitment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      icon: <Scale size={40} className="text-white" />,
      title: 'Honesty',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      icon: <TrendingUp size={40} className="text-white" />,
      title: 'Growth',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
  ];

  const stats = [
    { value: '2,800+', label: 'Satisfied Client' },
    { value: '3,456+', label: 'Case Finished' },
    { value: '4.8', label: 'Client Rating' },
    { value: '30+', label: 'Branch Office' },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto space-y-16">
        {/* Top Section - Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="rounded-3xl overflow-hidden h-80 md:h-96">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              We're Here to Help You Achieve Your Goals
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Button
                           variant="primary"
                            className="px-8 py-3.5  text-white font-regular rounded-full text-white hover:bg-brand-accent transition-colors duration-300 transform hover:scale-105"
                            >
                            Learn More
                        </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-red-700 text-white rounded-3xl p-8 space-y-4 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-red-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-pink-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <h4 className="text-4xl md:text-5xl font-black text-red-700">
                  {stat.value}
                </h4>
                <p className="text-gray-700 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}