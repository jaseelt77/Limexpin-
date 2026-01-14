
import Hero from "@/components/Hero/Hero";
import Button from "@/components/UI/Button";
// import Button from "@/components/ui/Button";


export default function ContactUs() {
  return (
    <>
      {/* Banner Hero */}
      <Hero
        subtitle="Contact Us"
        title="Let’s Talk About Your Project"
        description="Tell us about your idea and we’ll help bring it to life."
        align="center"
        bannerImage="/images/contact.jpg" // 👈 banner image
      />

      {/* Contact Section */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

            {/* Info */}
            <div>
              <h2 className="text-h3 mb-4">Get in Touch</h2>
              <p className="text-base text-gray-600 mb-6">
                We usually respond within 24 hours.
              </p>

              <ul className="space-y-4 text-sm">
                <li><strong>Email:</strong> hello@creativeagency.com</li>
                <li><strong>Phone:</strong> +91 98765 43210</li>
                <li><strong>Location:</strong> Kerala, India</li>
              </ul>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-md border px-4 py-3"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md border px-4 py-3"
              />
              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full rounded-md border px-4 py-3"
              />
             <Button
                variant="primary"
                className="w-full  text-white hover:bg-brand-accent"
                >
                Send Message
             </Button>
            </form>

          </div>
        </div>
      </section>
    </>
  );
}
