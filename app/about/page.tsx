import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/home/CTASection";
import { Heart, Zap } from "lucide-react";

export const metadata = {
  title: "About Founders Dr. Govinda Raju S. & Vivek Victor | Dr Pilates Bengaluru",
  description:
    "Learn about founders Dr. Govinda Raju S. (Founder and Program Director) and Vivek Victor (Co-Founder and Operations Director) of Dr Pilates Bengaluru."
};

export default function AboutPage() {
  return (
    <div className="pb-12 bg-[#F7F3ED]">
      {/* Page Hero with Background Studio Image */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#282622] text-white relative overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero_about_luminous.jpg"
            alt="Dr Pilates Sunlit Luxury Reformer Studio"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Luminous airy scrim preserving daylight clarity while keeping typography crystal-clear */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#282622]/75 via-[#282622]/40 to-black/20" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-4xl lg:text-[54px] font-normal font-display tracking-tight text-white leading-tight sm:leading-[1.15]">
              Movement Crafted for <span className="font-serif italic text-[#F7F3ED]">Vitality &amp; Longevity</span>
            </h1>
          </div>
        </Container>
      </section>

      {/* The Leadership & Founders Section */}
      <section className="py-16 sm:py-24 bg-[#F7F3ED] text-[#282622] relative overflow-hidden border-b border-[#DDD3C8]">
        <Container>
          <div className="space-y-12 sm:space-y-16">

            {/* Dual Founders Grid (Clean 12px rectangular cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {/* Founder: Dr. Govinda Raju S. */}
              <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-xl border border-[#DDD3C8] flex flex-col justify-between hover:border-[#C5A990] transition-colors h-full">
                <div className="flex-1 flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-6">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden border border-[#DDD3C8] shrink-0 bg-[#E8DED1]">
                      <Image
                        src="/goivnd.jpeg"
                        alt="Dr. Govinda Raju S. - Founder and Program Director"
                        fill
                        quality={95}
                        className="object-cover object-top"
                        sizes="112px"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-normal text-[#282622] font-display">
                        DR. GOVINDA RAJU
                      </h3>
                      <span className="text-[11px] sm:text-xs font-medium font-body uppercase tracking-widest text-[#282622] block mt-1">
                        Founder and Program Director
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm sm:text-[15px] text-[#6E685E] leading-[1.6] font-body">
                    <p>
                      With over a decade of clinical experience, Dr. Govinda Raju S has pioneered the integration of physical therapy with the athletic refinement of Reformer Pilates. His philosophy focuses on accuracy, biomechanical integrity, and customized rehab programs that deliver sustainable, long-term physical evolution. Qualifications include a Bachelor of Physiotherapy, ACE Certified Professional, and licensed practitioner of Advanced Dry Needling.
                    </p>
                    <p>
                      Blending clinical expertise with a refined understanding of movement, Dr. Govinda Raju S. brings a distinctive approach to Pilates that unites medical precision with athletic performance. Over the course of his decade-long career, he has integrated physiotherapy, Pilates, and EMS training to create personalized programs that improve posture, strengthen the core, enhance mobility, and support lasting physical well-being.
                    </p>
                  </div>
                </div>
              </div>

              {/* Co-Founder: Vivek Victor */}
              <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-xl border border-[#DDD3C8] flex flex-col justify-between hover:border-[#C5A990] transition-colors h-full">
                <div className="flex-1 flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-6">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden border border-[#DDD3C8] shrink-0 bg-[#E8DED1]">
                      <Image
                        src="/vivek.jpeg"
                        alt="Vivek Victor - Co-Founder and Operations Director"
                        fill
                        quality={95}
                        className="object-cover object-top"
                        sizes="112px"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-normal text-[#282622] font-display">
                        VIVEK VICTOR
                      </h3>
                      <span className="text-[11px] sm:text-xs font-medium font-body uppercase tracking-widest text-[#282622] block mt-1">
                        Co-Founder and Operations Director
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm sm:text-[15px] text-[#6E685E] leading-[1.6] font-body">
                    <p>
                      With over 22 years of experience across sales and operations, customer success and entrepreneurship, Vivek brings a strategic and people-focused approach. Has expertise which spans business strategy, customer acquisition, operational excellence, business development, negotiations, and team management.
                    </p>
                    <p>
                      In his professional journey, he has driven business growth, built high-performing teams, and created systems that prioritize client satisfaction and long-term brand loyalty. At Dr. Pilates, he combines his passion for fitness with strong operational leadership to expand the brand&apos;s footprint and elevate the overall studio experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy Narrative */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4 sm:pt-8 border-t border-[#DDD3C8]">
              {/* Left Column: Story */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-normal font-display text-[#282622]">
                  The Science of Mindful Movement
                </h3>
                <p className="text-sm sm:text-base text-[#6E685E] leading-[1.6] font-body">
                  Traditional fitness models often prioritize sheer exertion over anatomical longevity. Dr Pilates was founded on a contrary medical premise: when movement is biomechanically aligned, the body regenerates faster, eliminates chronic lower back compression, and builds lean, fatigue-resistant core muscles.
                </p>
                <p className="text-sm sm:text-base text-[#6E685E] leading-[1.6] font-body">
                  Recognizing that no two bodies are alike, Dr. Govind customizes each client’s journey by identifying specific weak points, muscular imbalances, and areas that need targeted strength and stability. From this detailed assessment, he builds personalized Pilates programs that progress safely and effectively, helping clients move better, feel stronger, and achieve their fitness goals with confidence.
                </p>
                <p className="text-sm sm:text-base text-[#6E685E] leading-[1.6] font-body">
                  Certified by the American Council on Exercise (ACE) and licensed in Advanced Dry Needling and
                  manual therapy, the leadership team curates customized movements that safely push the human
                  body to its peak physiological expression.
                </p>
              </div>

              {/* Right Column: Cards (Clean 12px radius) */}
              <div className="lg:col-span-5 space-y-4">
                {/* Card 1: Philosophy of Focus */}
                <div className="bg-[#FFFFFF] border border-[#DDD3C8] p-5 sm:p-6 rounded-xl transition-colors hover:border-[#C5A990]">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-7 h-7 rounded-[6px] bg-[#E8DED1] border border-[#DDD3C8] flex items-center justify-center">
                      <Heart className="w-3.5 h-3.5 text-[#282622]" />
                    </div>
                    <h4 className="text-sm sm:text-base font-normal font-display text-[#282622]">
                      Philosophy of Focus
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6E685E] leading-[1.6] font-body">
                    Fitness is 80% clinical execution and 20% physical effort. Our studio focuses on safe,
                    natural, and symmetrical movements to permanently correct long-standing posture imbalances.
                  </p>
                </div>

                {/* Card 2: Scientific Rigor */}
                <div className="bg-[#FFFFFF] border border-[#DDD3C8] p-5 sm:p-6 rounded-xl transition-colors hover:border-[#C5A990]">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-7 h-7 rounded-[6px] bg-[#E8DED1] border border-[#DDD3C8] flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-[#282622]" />
                    </div>
                    <h4 className="text-sm sm:text-base font-normal font-display text-[#282622]">
                      Scientific Rigor
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6E685E] leading-[1.6] font-body">
                    Every client program is data-driven. We use initial clinical assessment audits that
                    measure joint range of motion, core recruitment metrics, and kinetic compensations before
                    scheduling.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature Pull Quote */}
            <div className="relative pl-6 sm:pl-8 border-l-2 sm:border-l-[3px] border-[#282622] py-2">
              <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#282622] leading-relaxed">
                &ldquo;The body is a symphony of mechanics. Our role is to tune it to perfection, ensuring
                every movement serves both physical function and athletic form.&rdquo;
              </p>
            </div>
          </div>
        </Container>
      </section>


      {/* Main Philosophy Section */}
      <section className="py-20 bg-[#F7F3ED]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <span className="text-xs font-medium font-body uppercase tracking-widest text-[#282622]">
                Our Origin &amp; Ethos
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal font-display text-[#282622] leading-[1.2]">
                Elevating Wellness Beyond <span className="font-serif italic text-[#282622]">Conventional Means</span>
              </h2>
              <p className="text-base sm:text-[17px] text-[#6E685E] leading-[1.65] font-body">
                Dr Pilates was founded with a clear mission: to provide a refined, clinically-grounded space where individuals can build deep core strength, correct posture imbalances, and recover from physical stress without joint wear.
              </p>
              <p className="text-base sm:text-[17px] text-[#6E685E] leading-[1.65] font-body">
                At Dr. Pilates, Bengaluru, a premium Reformer Pilates experience is delivered with precision and care. Programs include Reformer Pilates and specialized pre- and postnatal sessions, all thoughtfully designed to enhance flexibility, build functional strength, improve posture, and support overall well-being. Sessions focus on controlled movement, breath coordination, core stability, and muscle balance, with individualized progressions to suit beginners through advanced clients. Clients benefit from personalized assessments, small class sizes, equipment-calibrated workouts, and ongoing progress tracking to ensure safe, measurable results.
              </p>

              <div className="pt-4 flex items-center gap-6">
                <div>
                  <span className="text-3xl font-normal font-display text-[#282622] block">
                    4.9 ★
                  </span>
                  <span className="text-xs text-[#6E685E] font-body">141+ Google Reviews</span>
                </div>
                <div className="h-10 w-px bg-[#DDD3C8]" />
                <div>
                  <span className="text-3xl font-normal font-display text-[#282622] block">
                    2
                  </span>
                  <span className="text-xs text-[#6E685E] font-body">Bengaluru Studios</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex flex-col h-full">
              <div className="relative min-h-[320px] sm:min-h-[440px] lg:h-full w-full rounded-xl overflow-hidden border border-[#DDD3C8]">
                <Image
                  src="/images/studio_interior_reformer_beds.webp"
                  alt="Dr Pilates Studio Interior and Reformer Beds"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
