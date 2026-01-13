"use client";
import Link from "next/link";
import styles from "./VideoBanner.module.scss";


type Variant = "full" | "short";

interface VideoBannerProps {
    videoSrc: string;
    poster:string;
    title: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    variant?: Variant;
}

export default function VideoBanner({
    videoSrc,
    poster,
    title,
    description,
    ctaText,
    ctaLink,
    variant = "full",
} : VideoBannerProps) {
    return (
        <section 
        className={`${styles.videoBanner} ${styles[`videoBanner--${variant}`]}`} >
            {/* Video Background */}
            <video className={styles.video}
            src={videoSrc}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            />

            {/* overlay */}
            <div className={styles.overlay}></div>
            {/* Content */}
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                {description && <p className={styles.description}>{description}</p>}
                {ctaText && ctaLink && (
                    <Link href={ctaLink} className={styles.cta}>
                        {ctaText}
                    </Link>
                )}
            </div>
        </section>
        );
    }