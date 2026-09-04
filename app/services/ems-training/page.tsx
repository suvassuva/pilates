import React from "react";
import { getServiceBySlug } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/home/CTASection";
import { Zap, ShieldCheck, Clock, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata = {
  title: "EMS Training in Bengaluru | Dr Pilates",
  description:
    "20-minute full body workout using advanced bio-suit Electrical Muscle Stimulation technology at Dr Pilates Kalyan Nagar & Branch 02."
};

export default function EMSTrainingPage() {
  const service = getServiceBySlug("ems-training");

  if (!service) return null;

  return (
    <div className="pt-20 bg-[#FAF8F5]">
      <ServiceHero service={service} />

      {/* What is EMS */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8E7557]">
                The Science of EMS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#111111]">
                How Does 20-Minute <span className="font-serif italic font-normal text-[#8E7557]">EMS Training Work?</span>
              </h2>
              <p className="text-base text-[#4A4641] leading-relaxed">
                EMS (Electrical Muscle Stimulation) sends gentle, low-frequency electrical impulse signals to target muscle groups through specialized bio-suits. While performing simple bodyweight exercises under coach direction, these impulses stimulate deeper muscle layers that traditional weights often miss.
              </p>
              <p className="text-base text-[#4A4641] leading-relaxed">
                Because over 90% of muscle fibers contract simultaneously without heavy joint loading, a 20-minute EMS session provides intensive full-body conditioning equal to 90 minutes of conventional gym training.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E0D8] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EEEDE8] text-[#8E7557] border border-[#B59C7D]/25 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#B59C7D]" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#111111]">
                  20 Minutes • Maximum Results
                </h3>
              </div>
              <p className="text-xs text-[#4A4641] leading-relaxed">
                Ideal for busy Bengaluru executives, post-rehab individuals, and those seeking body composition changes without straining joints.
              </p>
              <div className="space-y-2.5 pt-2">
                {[
                  "Personal bio-suit fitting & cotton gear provided",
                  "1-on-1 certified EMS coach supervision throughout",
                  "Individual impulse intensity adjustment for every muscle zone",
                  "Safe, non-impact movement patterns"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B59C7D] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#111111]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#EEEDE8]">
        <Container>
          <SectionTitle
            subtitle="Efficiency & Safety"
            title="Key Advantages of EMS Conditioning"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E0D8] shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-display text-[#111111] flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#B59C7D]" />
                Conditioning Benefits
              </h3>
              <ul className="space-y-3 text-sm text-[#4A4641]">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B59C7D] font-bold">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E0D8] shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-display text-[#111111] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#B59C7D]" />
                Who Suits EMS Training?
              </h3>
              <ul className="space-y-3 text-sm text-[#4A4641]">
                {service.whoItIsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B59C7D] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container size="small">
          <SectionTitle subtitle="EMS FAQ" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5E0D8] shadow-xs">
                <h4 className="text-base font-bold text-[#111111] flex items-center gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-[#B59C7D]" />
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-[#4A4641] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
}
