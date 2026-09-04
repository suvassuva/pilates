import React from "react";
import { getServiceBySlug } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TrainersPreview } from "@/components/home/TrainersPreview";
import { CTASection } from "@/components/home/CTASection";
import { CheckCircle2, HelpCircle, Shield, Sparkles } from "lucide-react";

export const metadata = {
  title: "Reformer Pilates in Bengaluru | Dr Pilates Kalyan Nagar",
  description:
    "Transform posture, core strength, and joint mobility with Reformer Pilates at Dr Pilates Kalyan Nagar and Branch 02, Bengaluru."
};

export default function ReformerPilatesPage() {
  const service = getServiceBySlug("reformer-pilates");

  if (!service) return null;

  return (
    <div className="pt-20 bg-[#FAF8F5]">
      <ServiceHero service={service} />

      {/* What is Reformer Pilates */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8E7557]">
                Understanding the Method
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#111111]">
                What is <span className="font-serif italic font-normal text-[#8E7557]">Reformer Pilates?</span>
              </h2>
              <p className="text-base text-[#4A4641] leading-relaxed">
                Reformer Pilates is a refined resistance training method developed around a specialized bed frame equipped with a sliding carriage, adjustable springs, straps, and pulleys. Unlike traditional mat Pilates, the Reformer provides variable spring tension that supports your joints while challenging micro-muscles across your entire body.
              </p>
              <p className="text-base text-[#4A4641] leading-relaxed">
                By controlling movement speed, breath patterns, and core stabilization under spring resistance, Reformer Pilates builds lean muscle tone, decompresses the spine, and realigns postural imbalances.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E0D8] shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-display text-[#111111]">
                The Reformer Training Experience
              </h3>
              <div className="space-y-3">
                {[
                  "Guided 1-on-1 positioning for ideal biomechanics",
                  "Spring resistance settings tuned to your current strength",
                  "Focus on spinal articulation, pelvis stability, & breath",
                  "Low-impact resistance gentle on knees & spinal discs"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#B59C7D] shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm font-medium text-[#111111]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits & Target Audience */}
      <section className="py-20 bg-[#EEEDE8]">
        <Container>
          <SectionTitle
            subtitle="Benefits & Target Group"
            title="Who Can Benefit From Reformer Pilates?"
            description="Reformer Pilates is adaptable to beginners, athletes, working professionals, and those rebuilding physical strength."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E0D8] shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-display text-[#111111] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#B59C7D]" />
                Key Physical Benefits
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
                <Shield className="w-5 h-5 text-[#B59C7D]" />
                Ideal Candidate Profiles
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

      {/* FAQ Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container size="small">
          <SectionTitle
            subtitle="Reformer FAQ"
            title="Frequently Asked Questions"
          />

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

      <TrainersPreview />
      <CTASection />
    </div>
  );
}
