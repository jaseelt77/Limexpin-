"use client";
import { useState } from "react";

const tabs = [
  {
    id: "vision",
    title: "Our Vision",
    description:
      "Fusce sed pellentesque dui. Nunc lacinia, nibh vitae gravida condimentum, turpis neque commodo mauris, id rutrum lacus nisl a risus.",
    rightTitle: "Our Plan Makes You Feel More Comfortable in Tax Management",
    rightDesc:
      "Nulla semper condimentum tellus in ultricies. Nunc tempor ipsum nec fermentum consequat. Cras et felis ultricies.",
    image:
    "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=1200",
  },
  {
    id: "mission",
    title: "Our Mission",
    description:
      "Fusce sed pellentesque dui. Nunc lacinia, nibh vitae gravida condimentum, turpis neque commodo mauris, id rutrum lacus nisl a risus.",
    rightTitle: "We Help You Achieve Financial Clarity",
    rightDesc:
      "Nulla semper condimentum tellus in ultricies. Nunc tempor ipsum nec fermentum consequat.",
     image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1600",
  },
  {
    id: "history",
    title: "Our History",
    description:
      "Fusce sed pellentesque dui. Nunc lacinia, nibh vitae gravida condimentum, turpis neque commodo mauris, id rutrum lacus nisl a risus.",
    rightTitle: "Years of Experience in Tax Planning",
    rightDesc:
      "Nulla semper condimentum tellus in ultricies. Nunc tempor ipsum nec fermentum consequat.",
      image:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200",
  },
];

export default function VisionTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="container mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT TABS */}
        <div className="space-y-6">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left rounded-2xl p-6 transition
                  ${
                    isActive
                      ? "bg-brand-primary text-white"
                      : "bg-orange-50 text-gray-700 hover:bg-blue-100"
                  }
                `}
              >
                <span
                  className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4
                    ${
                      isActive
                        ? "bg-white font-semibold text-2xl text-black"
                        : "bg-white text-brand-primary font-normal text-lg"
                    }
                  `}
                >
                  {tab.title}
                </span>

                <p className="text-sm leading-relaxed">
                  {tab.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${activeTab.image})`,
            }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 h-full p-10 flex flex-col justify-center text-white">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6 leading-snug">
              {activeTab.rightTitle}
            </h2>

            <p className="text-sm opacity-90 max-w-md">
              {activeTab.rightDesc}
            </p>

            <button className="mt-10 w-fit bg-brand-primary hover:bg-brand-accent hover:text-black rounded-[6px] transition px-6 py-3  text-sm font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
