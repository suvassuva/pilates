import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
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
    <div className="pt-24 pb-12 bg-[#FAF8F5]">
      {/* Page Hero with Background Studio Image */}
      <section className="py-20 sm:py-28 bg-[#141312] text-[#FAF8F5] relative overflow-hidden flex items-center justify-center">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/videos/pilates_studio_interior.jpeg"
            alt="Dr Pilates Studio Interior Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Light translucent overlay keeping image bright, vivid and clearly visible */}
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/30" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E2C79A] bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#B59C7D]/50 shadow-sm inline-block">
              About Dr Pilates
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Movement Crafted for <span className="font-serif italic font-normal text-[#E2C79A]">Vitality & Longevity</span>
            </h1>
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#8E7557]">
                Our Origin & Ethos
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#111111]">
                Elevating Wellness Beyond <span className="font-serif italic font-normal text-[#8E7557]">Conventional Gyms</span>
              </h2>
              <p className="text-base text-[#4A4641] leading-relaxed">
                Dr Pilates was founded with a clear mission: to provide a refined, clinically-grounded space where individuals can build deep core strength, correct posture imbalances, and recover from physical stress without joint wear.
              </p>
              <p className="text-base text-[#4A4641] leading-relaxed">
                Located on the 3rd Floor of Y4 Heights in Kalyan Nagar (above Starbucks Coffee) and expanding to Branch 02, our studios serve as quiet sanctuaries for busy professionals, athletes, pre/post-natal women, and anyone committed to moving better.
              </p>

              <div className="pt-4 flex items-center gap-6">
                <div>
                  <span className="text-3xl font-bold font-display text-[#111111] block">
                    4.9 ★
                  </span>
                  <span className="text-xs text-[#7A756D]">129+ Google Reviews</span>
                </div>
                <div className="h-10 w-px bg-[#E5E0D8]" />
                <div>
                  <span className="text-3xl font-bold font-display text-[#111111] block">
                    2
                  </span>
                  <span className="text-xs text-[#7A756D]">Bengaluru Studios</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex flex-col h-full">
              <div className="relative min-h-[320px] sm:min-h-[440px] lg:h-full w-full rounded-3xl overflow-hidden shadow-sm border border-[#E5E0D8]">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E0D8] shadow-sm hover-lift"
              >
                <div className="w-10 h-10 rounded-full bg-[#EEEDE8] text-[#8E7557] border border-[#B59C7D]/25 flex items-center justify-center font-bold text-sm font-display mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold font-display text-[#111111] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#4A4641] leading-relaxed">
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
