import React from "react";
import Image from "next/image";
import Metadata from "next";
import { CheckCircle2, Award, ShieldCheck, Sparkles, MapPin, Calendar, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
  title: "About Dr Pilates | Premium Reformer Studio in Bengaluru",
  description:
    "Learn about Dr Pilates, Bengaluru's leading studio for Reformer Pilates, EMS Training, Physiotherapy, and Personal Training."
};

export default function AboutPage() {
  const pillars = [
    {
      title: "Clinical & Movement Science",
      desc: "Our workouts are built on sound anatomical principles. Every spring setting and resistance level is calibrated for optimal joint mechanics."
    },
    {
      title: "Private 1-on-1 Sanctuary",
      desc: "We prioritize intimacy and high focus. Sessions take place in quiet, elegant studio bays designed to give you undivided coach attention."
    },
    {
      title: "State-of-the-Art Apparatus",
      desc: "From smooth-gliding Reformers to medical-grade EMS bio-suits, we invest in elite equipment to deliver superior fitness outcomes."
    },
    {
      title: "Client-Centered Transformation",
      desc: "Whether recovering from lower back strain or targeting core strength, your individual goals dictate your personalized program."
    }
  ];

  return (
    <div className="pt-28 pb-12">
      {/* Page Hero with Background Studio Image */}
      <section className="py-20 sm:py-28 bg-[#0D0F12] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/pilates_studio_interior.jpeg"
            alt="Dr Pilates Studio Interior Background"
            fill
            priority
            className="object-cover object-center opacity-45 scale-105"
            sizes="100vw"
          />
          {/* Subtle vignette overlays for maximum contrast & visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/40 to-[#0D0F12]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F12]/90 via-transparent to-[#0D0F12]/90" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#14171C]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C5A059]/50 shadow-xl inline-block">
              About Dr Pilates
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-[#FAF8F5] leading-tight drop-shadow-md">
              Movement Crafted for <span className="gold-gradient-text">Vitality & Longevity</span>
            </h1>
            <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm">
              Combining evidence-based physiotherapy with high-end Reformer Pilates and EMS technology in Bengaluru.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                Our Origin & Ethos
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#121417]">
                Elevating Wellness Beyond Conventional Gyms
              </h2>
              <p className="text-base text-[#5C626D] leading-relaxed">
                Dr Pilates was founded with a clear mission: to provide a refined, clinically-grounded space where individuals can build deep core strength, correct posture imbalances, and recover from physical stress without joint wear.
              </p>
              <p className="text-base text-[#5C626D] leading-relaxed">
                Located on the 3rd Floor of Y4 Heights in Kalyan Nagar (above Starbucks Coffee) and expanding to Branch 02, our studios serve as quiet sanctuaries for busy professionals, athletes, pre/post-natal women, and anyone committed to moving better.
              </p>

              <div className="pt-4 flex items-center gap-6">
                <div>
                  <span className="text-3xl font-bold font-display text-[#121417] block">
                    4.9 ★
                  </span>
                  <span className="text-xs text-[#5C626D]">129+ Google Reviews</span>
                </div>
                <div className="h-10 w-px bg-[#121417]/10" />
                <div>
                  <span className="text-3xl font-bold font-display text-[#121417] block">
                    2
                  </span>
                  <span className="text-xs text-[#5C626D]">Bengaluru Studios</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex flex-col h-full">
              <div className="relative min-h-[320px] sm:min-h-[440px] lg:h-full w-full rounded-3xl overflow-hidden shadow-xl border border-[#121417]/10">
                <Image
                  src="/videos/woman_performing_reformer.jpeg"
                  alt="Dr Pilates Reformer Equipment Studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Pillars */}
          <SectionTitle
            subtitle="Core Philosophy"
            title="The Four Pillars of Dr Pilates"
            description="How we ensure every workout delivers tangible strength, flexibility, and recovery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-[#121417]/10 shadow-sm hover-lift"
              >
                <div className="w-10 h-10 rounded-full bg-[#121417] text-[#C5A059] flex items-center justify-center font-bold text-sm font-display mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold font-display text-[#121417] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#5C626D] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
