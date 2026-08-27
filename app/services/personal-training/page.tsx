import React from "react";
import { getServiceBySlug } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TrainersPreview } from "@/components/home/TrainersPreview";
import { CTASection } from "@/components/home/CTASection";
import { Dumbbell, CheckCircle2, HelpCircle, Target } from "lucide-react";

export const metadata = {
  title: "Personal Training in Bengaluru | Dr Pilates",
  description:
    "Custom 1-on-1 personal fitness coaching, strength building, and posture alignment at Dr Pilates Kalyan Nagar & Branch 02."
};

export default function PersonalTrainingPage() {
  const service = getServiceBySlug("personal-training");

  if (!service) return null;

  return (
    <div className="pt-20">
      <ServiceHero service={service} />

      {/* 1-on-1 Approach */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                Dedicated Coaching
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#121417]">
                100% Customized 1-on-1 Fitness Guidance
              </h2>
              <p className="text-base text-[#5C626D] leading-relaxed">
                Generic workout plans often lead to plateaus or injury. At Dr Pilates, our Personal Training is built exclusively around your body composition, joint tolerance, baseline strength, and specific lifestyle targets.
              </p>
              <p className="text-base text-[#5C626D] leading-relaxed">
                Your dedicated coach monitors every rep, refines your movement form, and progressively adapts workout variables so you achieve steady, long-term body transformations.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#121417]/10 shadow-md space-y-4">
              <h3 className="text-xl font-bold font-display text-[#121417] flex items-center gap-2">
                <Target className="w-5 h-5 text-[#C5A059]" />
                Coaching Pillars
              </h3>
              <div className="space-y-3">
                {[
                  "Detailed fitness screening & mobility test",
                  "Undivided 1-on-1 coach attention in private studio bays",
                  "Structured progressive resistance & core conditioning",
                  "Nutrition guidance & lifestyle accountability"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-[#121417]">
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
      <section className="py-20 bg-[#F3EEE7]/60">
        <Container>
          <SectionTitle
            subtitle="Transformational Focus"
            title="Why Choose Personal Training at Dr Pilates?"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#121417]/10 shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-display text-[#121417]">
                Program Benefits
              </h3>
              <ul className="space-y-3 text-sm text-[#5C626D]">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C5A059] font-bold">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#121417]/10 shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-display text-[#121417]">
                Who Should Opt For Personal Training?
              </h3>
              <ul className="space-y-3 text-sm text-[#5C626D]">
                {service.whoItIsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C5A059] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <TrainersPreview />

      {/* FAQ */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container size="small">
          <SectionTitle subtitle="Personal Training FAQ" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#121417]/10 shadow-xs">
                <h4 className="text-base font-bold text-[#121417] flex items-center gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-[#C5A059]" />
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-[#5C626D] leading-relaxed">
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
