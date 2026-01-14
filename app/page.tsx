import VideoBanner from "@/components/videoBanner/VideoBanner";
import  styles from 'components/videoBanner/VideoBanner.module.scss';

export default function Home() {
  return (
    <section className="relative w-full overflow-hidden">
      <VideoBanner
        videoSrc="/video/intro.mp4"
        poster="/images/limeBanner.jpeg"
        title="A Digital Product Studio That Works"
        description="We design and build digital products that help businesses grow."
        ctaText="Get Started"
        ctaLink="/contact"
        variant="full"

      />
    </section>
  );
}
