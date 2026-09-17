import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";
import { Activity, Layers, Heart, Zap, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Founders Dr. Govinda Raju S. & Vivek Victor | Dr Pilates Bengaluru",
  description:
    "Learn about founders Dr. Govinda Raju S. (Founder and Program Director) and Vivek Victor (Co-Founder and Operations Director) of Dr Pilates Bengaluru."
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
            alt="Dr Pilates Interior Background"
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
              Movement Crafted for <span className="font-serif italic font-normal text-[#E2C79A]">Vitality &amp; Longevity</span>
            </h1>
            <p className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Combining evidence-based physiotherapy with high-end Reformer Pilates and EMS technology in Bengaluru.
            </p>
          </div>
        </Container>
      </section>

      {/* The Leadership & Founders Section - Light Theme */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] text-[#111111] relative overflow-hidden border-b border-[#E5E0D8]">
        <Container>
          <div className="space-y-12 sm:space-y-16">
            {/* Section Header */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B91C1C] block mb-2">
                The Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#111111] tracking-tight mb-4">
                Pioneering Clinical Movement &amp;{" "}
                <span className="font-serif italic font-normal text-[#B91C1C]">
                  Studio Excellence
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#5A554E] max-w-3xl leading-relaxed">
                Meet the founders behind Dr Pilates—bridging medical rehabilitation, high-performance athletic refinement, and personalized wellness across Bengaluru.
              </p>
            </div>

            {/* Dual Founders Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Founder: Dr. Govinda Raju S. */}
              <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#E5E0D8] shadow-xs flex flex-col justify-between hover:border-[#B59C7D]/50 transition-colors">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-6">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#B59C7D]/40 shadow-sm shrink-0 bg-[#E5E0D8]">
                      <Image
                        src="/dr-govinda-raju.jpg"
                        alt="Dr. Govinda Raju S. - Founder and Program Director"
                        fill
                        quality={95}
                        className="object-cover object-top"
                        sizes="112px"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B91C1C] block">
                        Founder and Program Director
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] font-display mt-1">
                        DR GOVINDRAJU
                      </h3>
                      <span className="text-xs sm:text-sm font-serif italic text-[#8E7557] block mt-0.5">
                        Dr. Govinda Raju S.
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-[#4A4641] leading-relaxed mb-6">
                    <p>
                      With over a decade of clinical experience, Dr. Govinda Raju S has pioneered the integration of physical therapy with the athletic refinement of Reformer Pilates. His philosophy focuses on accuracy, biomechanical integrity, and customized rehab programs that deliver sustainable, long-term physical evolution. Qualifications include a Bachelor of Physiotherapy, ACE Certified Professional, and licensed practitioner of Advanced Dry Needling.
                    </p>
                    <p>
                      Blending clinical expertise with a refined understanding of movement, Dr. Govinda Raju S. brings a distinctive approach to Pilates that unites medical precision with athletic performance. Over the course of his decade-long career, he has integrated physiotherapy, Pilates, and EMS training to create personalized programs that improve posture, strengthen the core, enhance mobility, and support lasting physical well-being.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-4 border-t border-[#E5E0D8]/70">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E5E0D8] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#2D2A26]">
                    <Activity className="w-3.5 h-3.5 text-[#B91C1C]" />
                    <span>Clinical Practice: 10+ Years</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E5E0D8] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#2D2A26]">
                    <Layers className="w-3.5 h-3.5 text-[#B91C1C]" />
                    <span>Integrative Rehab &amp; Athletics</span>
                  </div>
                </div>
              </div>

              {/* Co-Founder: Vivek Victor */}
              <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#E5E0D8] shadow-xs flex flex-col justify-between hover:border-[#B59C7D]/50 transition-colors">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-6">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#B59C7D]/40 shadow-sm shrink-0 bg-[#141312] flex items-center justify-center text-[#E2C79A] font-display text-2xl sm:text-3xl font-bold tracking-wider">
                      VV
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#B91C1C] block">
                        Co-Founder and Operations Director
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] font-display mt-1">
                        VIVEK VICTOR
                      </h3>
                      <span className="text-xs sm:text-sm font-serif italic text-[#8E7557] block mt-0.5">
                        Strategic Vision &amp; Operations
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-[#4A4641] leading-relaxed mb-6">
                    <p>
                      With over 22 years of experience across sales and operations, customer success and entrepreneurship, Vivek brings a strategic and people-focused approach. Has expertise which spans business strategy, customer acquisition, operational excellence, business development, negotiations, and team management.
                    </p>
                    <p>
                      Driven by a passion for premium wellness delivery and client-centric hospitality, Vivek leads the strategic vision and operational excellence at Dr Pilates. Passionate about creating seamless studio experiences, building strong client relationships, and empowering teams to deliver exceptional service.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-4 border-t border-[#E5E0D8]/70">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E5E0D8] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#2D2A26]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B91C1C]" />
                    <span>Operations &amp; Experience: 22+ Years</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E5E0D8] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#2D2A26]">
                    <Sparkles className="w-3.5 h-3.5 text-[#B91C1C]" />
                    <span>Hospitality &amp; Client Success</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t border-[#E5E0D8]" />

            {/* Two-Column: Journey & Philosophy Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
              {/* Left Column: A Journey of Clinical Evolution */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] font-display tracking-tight">
                  A Journey of Clinical Evolution
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4641] leading-relaxed">
                  Dr. Govinda Raju S. did not begin his journey in simple fitness gyms. As a licensed physical
                  therapist (Bachelor of Physiotherapy), his early years were spent in orthopedic clinical
                  settings, treating structural spine pathologies and complex joint injuries.
                </p>
                <p className="text-xs sm:text-sm text-[#4A4641] leading-relaxed">
                  He soon realized that traditional gym training lacks biomechanical accuracy, often
                  exacerbating structural stress. Together with co-founder Vivek Victor, he turned to Reformer Pilates
                  and EMS technology—not as general workouts, but as medical rehabilitation tools designed to
                  activate correct neuromuscular pathways and restore structural integrity.
                </p>
                <p className="text-xs sm:text-sm text-[#4A4641] leading-relaxed">
                  Certified by the American Council on Exercise (ACE) and licensed in Advanced Dry Needling and
                  manual therapy, the leadership team curates customized movements that safely push the human
                  body to its peak physiological expression.
                </p>
              </div>

              {/* Right Column: Cards */}
              <div className="lg:col-span-5 space-y-4">
                {/* Card 1: Philosophy of Focus */}
                <div className="bg-[#FFFFFF] border border-[#E5E0D8] p-5 sm:p-6 rounded-2xl shadow-xs transition-colors hover:border-[#B59C7D]/50">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-7 h-7 rounded-md bg-[#FEF2F2] border border-[#FCA5A5]/40 flex items-center justify-center">
                      <Heart className="w-3.5 h-3.5 text-[#B91C1C]" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-[#111111]">
                      Philosophy of Focus
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5A554E] leading-relaxed">
                    Fitness is 80% clinical execution and 20% physical effort. Our studio focuses on safe,
                    natural, and symmetrical movements to permanently correct long-standing posture imbalances.
                  </p>
                </div>

                {/* Card 2: Scientific Rigor */}
                <div className="bg-[#FFFFFF] border border-[#E5E0D8] p-5 sm:p-6 rounded-2xl shadow-xs transition-colors hover:border-[#B59C7D]/50">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-7 h-7 rounded-md bg-[#FEF2F2] border border-[#FCA5A5]/40 flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-[#B91C1C]" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-[#111111]">
                      Scientific Rigor
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5A554E] leading-relaxed">
                    Every client program is data-driven. We use initial clinical assessment audits that
                    measure joint range of motion, core recruitment metrics, and kinetic compensations before
                    scheduling.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature Pull Quote */}
            <div className="relative pl-6 sm:pl-8 border-l-2 sm:border-l-[3px] border-[#B91C1C] py-2">
              <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#111111] leading-relaxed mb-3">
                &ldquo;The body is a symphony of mechanics. Our role is to tune it to perfection, ensuring
                every movement serves both physical function and athletic form.&rdquo;
              </p>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#B91C1C] block font-mono">
                DR. GOVINDA RAJU S. &amp; VIVEK VICTOR, FOUNDERS
              </span>
            </div>
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
                Located on the 3rd Floor of Y4 Heights in Kalyan Nagar (above Starbucks Coffee) and at Doddagubbi Main Road in Kothanur, Hennur Road, Dr Pilates serves as a quiet sanctuary for busy professionals, athletes, pre/post-natal women, and anyone committed to moving better.
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
                  <span className="text-xs text-[#7A756D]">Bengaluru Branches</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex flex-col h-full">
              <div className="relative min-h-[320px] sm:min-h-[440px] lg:h-full w-full rounded-3xl overflow-hidden shadow-sm border border-[#E5E0D8]">
                <Image
                  src="/videos/woman_performing_reformer.jpeg"
                  alt="Dr Pilates Reformer Equipment"
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
