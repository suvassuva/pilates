import React from "react";
import { getServiceBySlug } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/home/CTASection";
import { Sparkles, CheckCircle2, HelpCircle, ShieldAlert, Target } from "lucide-react";

export const metadata = {
  title: "Dry Needling Therapy in Bengaluru | Dr Pilates",
  description:
    "Advanced clinical Dry Needling and myofascial trigger point therapy by certified practitioners at Dr Pilates Kalyan Nagar and Kothanur, Hennur Road."
};

export default function DryNeedlingPage() {
  const service = getServiceBySlug("dry-needling");

  if (!service) return null;

  return (
    <div className="pt-20 bg-[#FAF8F5]">
      <ServiceHero service={service} />

      {/* Understanding Dry Needling */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B91C1C]">
                Clinical Myofascial Therapy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#111111]">
                Understanding <span className="font-serif italic font-normal text-[#B91C1C]">Dry Needling</span>
              </h2>
              <p className="text-base text-[#4A4641] leading-relaxed">
                Dry Needling is a specialized, evidence-based physical therapy technique designed to target neuromusculoskeletal pain and movement impairments. Performed by certified therapists (including founder Dr. Govinda Raju S.), it utilizes ultrafine, sterile filiform needles placed directly into taut bands or &quot;trigger points&quot; within contracted muscle tissues.
              </p>
              <p className="text-base text-[#4A4641] leading-relaxed">
                When inserted into a hyper-irritable trigger point, the needle elicits a brief local twitch response. This mechanical stimulation disrupts abnormal neuromuscular signaling, flushes chemical pain mediators, restores blood flow, and immediately relieves chronic tightness.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E0D8] shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-display text-[#111111] flex items-center gap-2">
                <Target className="w-5 h-5 text-[#B91C1C]" />
                The Clinical Protocol
              </h3>
              <div className="space-y-3">
                {[
                  "Diagnostic palpation of taut muscle bands and trigger points",
                  "Single-use sterile, ultra-fine filiform needle placement",
                  "Neuromuscular twitch elicitation to release contracted fibers",
                  "Post-needling mobility and Reformer movement integration"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B91C1C] shrink-0 mt-0.5" />
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

      {/* Benefits & Who It Is For */}
      <section className="py-20 bg-[#EEEDE8]">
        <Container>
          <SectionTitle
            subtitle="Targeted Relief"
            title="Therapeutic Outcomes & Applications"
            description="How dry needling accelerates tissue recovery, eliminates chronic pain, and optimizes movement symmetry."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E0D8] shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-display text-[#111111] flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#B91C1C]" />
                Key Clinical Benefits
              </h3>
              <ul className="space-y-3 text-sm text-[#4A4641]">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B91C1C] font-bold">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#E5E0D8] shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-display text-[#111111] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#B91C1C]" />
                Recommended For
              </h3>
              <ul className="space-y-3 text-sm text-[#4A4641]">
                {service.whoItIsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B91C1C] font-bold">•</span>
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
          <SectionTitle subtitle="Dry Needling FAQ" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5E0D8] shadow-xs">
                <h4 className="text-base font-bold text-[#111111] flex items-center gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-[#B91C1C]" />
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
