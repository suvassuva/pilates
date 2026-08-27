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
      {/* Page Hero */}
      <section className="py-16 bg-[#121417] text-[#FAF8F5] relative overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3.5 py-1 rounded-full border border-[#C5A059]/20 inline-block">
              About Dr Pilates
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#FAF8F5]">
              Movement Crafted for Vitality & Longevity
            </h1>
            <p className="text-base sm:text-lg text-[#8C929D] leading-relaxed">
              Combining evidence-based physiotherapy with high-end Reformer Pilates and EMS technology in Bengaluru.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-6">
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

            <div className="lg:col-span-6 relative">
              <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-xl border border-[#121417]/10">
                <Image
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200"
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
