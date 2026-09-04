import React from "react";
import { getServiceBySlug } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/home/CTASection";
import { HeartPulse, CheckCircle2, HelpCircle, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Physiotherapy in Bengaluru | Dr Pilates Kalyan Nagar",
  description:
    "Clinical physiotherapy, pain relief, posture realignment, and active rehabilitation by licensed physiotherapists at Dr Pilates Bengaluru."
};

export default function PhysiotherapyPage() {
  const service = getServiceBySlug("physiotherapy");

  if (!service) return null;

  return (
    <div className="pt-20 bg-[#FAF8F5]">
      <ServiceHero service={service} />

      {/* Assessment & Clinical Approach */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8E7557]">
                Clinical Evaluation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#111111]">
                Comprehensive Biomechanical & <span className="font-serif italic font-normal text-[#8E7557]">Pain Assessment</span>
              </h2>
              <p className="text-base text-[#4A4641] leading-relaxed">
                Rather than treating symptoms in isolation, our licensed physiotherapists examine your full body alignment, joint mechanics, gait, and muscle activation patterns. We aim to identify underlying movement dysfunction causing back stiffness, neck tightness, or knee stress.
              </p>
              <p className="text-base text-[#4A4641] leading-relaxed">
                By pairing manual joint mobilization with targeted Reformer Pilates exercise rehab, we help rebuild functional stability for long-term health.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E0D8] shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-display text-[#111111] flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-[#B59C7D]" />
                Our Clinical Protocol
              </h3>
              <div className="space-y-3">
                {[
                  "1-on-1 diagnostic consultation & mobility evaluation",
                  "Targeted manual therapy & soft tissue mobilization",
                  "Integration with gentle Reformer Pilates apparatus",
                  "Home movement prescription for lasting posture habits"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B59C7D] shrink-0 mt-0.5" />
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

      {/* Benefits */}
      <section className="py-20 bg-[#EEEDE8]">
        <Container>
          <SectionTitle
            subtitle="Rehabilitation"
            title="Conditions We Frequently Address"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E0D8] shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-display text-[#111111] flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#B59C7D]" />
                Therapeutic Outcomes
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
                <HeartPulse className="w-5 h-5 text-[#B59C7D]" />
                Ideal for Individuals With
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
          <SectionTitle subtitle="Physiotherapy FAQ" title="Frequently Asked Questions" />
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
