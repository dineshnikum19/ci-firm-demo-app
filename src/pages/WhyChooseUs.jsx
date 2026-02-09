import { Link } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  Clock,
  Heart,
  MessageSquare,
  ShieldCheck,
  Layers,
  Lock,
  Lightbulb,
  CheckCircle2,
  Phone,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

/**
 * Why Choose Us Page - Modern, Professional CA/Financial Services
 * Builds trust and credibility with clear differentiators and strong CTAs
 */
const WhyChooseUs = () => {
  const reasons = [
    {
      icon: GraduationCap,
      title: "Experienced & Qualified Professionals",
      description:
        "Our team includes qualified Chartered Accountants and finance professionals with decades of combined experience. We stay updated with changing laws and regulations so you get advice that is both accurate and practical.",
    },
    {
      icon: Clock,
      title: "Accurate & Timely Service",
      description:
        "We understand that deadlines matter. Whether it's tax filing, GST returns, or compliance submissions, we deliver accurate work on time—every time. Our process is designed to avoid last-minute rushes and costly penalties.",
    },
    {
      icon: Heart,
      title: "Client-Focused Approach",
      description:
        "Your success is at the centre of what we do. We take time to understand your business, your goals, and your challenges. Our solutions are tailored to your needs, not a one-size-fits-all template.",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description:
        "No hidden terms, no confusing jargon. We explain everything in plain language so you know exactly what we're doing and why. You'll always know the status of your work and what to expect next.",
    },
    {
      icon: ShieldCheck,
      title: "Strong Compliance & Ethical Standards",
      description:
        "We follow the highest professional and ethical standards. All our work adheres to applicable laws and regulations. You can trust that your financial matters are handled with integrity and in full compliance.",
    },
    {
      icon: Layers,
      title: "End-to-End Financial Solutions",
      description:
        "From tax and GST to audit, accounting, and compliance—we offer a full range of services under one roof. No need to juggle multiple advisors. We coordinate everything so your financial affairs stay streamlined.",
    },
    {
      icon: Lock,
      title: "Data Confidentiality & Security",
      description:
        "Your financial data is sensitive, and we treat it that way. We use secure systems, follow strict confidentiality protocols, and never share your information without your consent. Your privacy is our priority.",
    },
    {
      icon: Lightbulb,
      title: "Practical, Business-Focused Advice",
      description:
        "We don't just crunch numbers—we help you make better business decisions. Our advice is practical, actionable, and aligned with your growth goals. We focus on what works for your business in the real world.",
    },
  ];

  const commitmentPoints = [
    "Timely filing and submissions—no missed deadlines",
    "Accuracy in every calculation and report",
    "Transparent pricing with no hidden charges",
    "Clear, jargon-free communication",
    "Confidential and secure handling of your data",
  ];

  return (
    <div>
      {/* Hero Section */}
      <AnimatedSection
        animation="fadeIn"
        className="relative py-24 md:py-32 overflow-hidden min-h-[300px] sm:min-h-[360px]"
      >
        <div className="absolute inset-0">
          <img
            src="/audit-compliance.jpg"
            alt="Professional financial advisory"
            className="img-cover"
            fetchpriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />
        </div>

        <AnimatedSection
          animation="fadeUp"
          delay={200}
          className="container-custom relative z-10"
        >
          <div className="max-w-2xl">
            <AnimatedSection animation="fadeUp" delay={300}>
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-4">
                Why Choose Us
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={400}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                Trusted expertise. Clear values. Real results.
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={500}>
              <p className="text-lg text-neutral-900 leading-relaxed">
                Find out why thousands of businesses, startups, and
                professionals choose XYZ & Associates for their financial needs.
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </AnimatedSection>

      {/* Introduction */}
      <AnimatedSection animation="fadeUp" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-neutral-600 text-lg leading-relaxed">
              At XYZ & Associates, we believe that great financial services go
              beyond paperwork and compliance. We focus on building long-term
              relationships with our clients by providing expert advice,
              reliable support, and a commitment to excellence. Whether you are
              a small business owner, a startup founder, or an individual
              professional, we tailor our services to your needs and help you
              navigate the complex world of taxes, audits, and compliance with
              confidence.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Key Reasons - Card Grid */}
      <AnimatedSection animation="fadeUp" className="py-20 bg-neutral-200">
        <div className="container-custom">
          <AnimatedSection
            animation="fadeUp"
            delay={100}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              What Sets Us Apart
            </p>
            <h2 className="section-title">Eight reasons to work with us</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              We combine professional expertise with a client-first approach to
              deliver services that make a real difference.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item, index) => (
              <AnimatedSection
                key={index}
                animation="fadeUp"
                delay={200 + index * 100}
                className="card group flex flex-col h-full bg-neutral-400 text-neutral-900"
              >
                <div className="icon-container-accent mb-5">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Commitment */}
      <AnimatedSection animation="scale" className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-10 md:p-14 lg:p-16">
              <div className="flex flex-col md:flex-row md:items-start gap-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center">
                    <ShieldCheck size={32} className="text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Our Commitment to You
                  </h2>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                    When you work with XYZ & Associates, you can expect timely
                    filing, accurate calculations, and complete transparency. We
                    stand behind our work: if an error on our part leads to a
                    penalty, we take responsibility. Our promise is simple—we
                    treat your financial matters with the same care and
                    attention we would give our own.
                  </p>
                  <ul className="space-y-4">
                    {commitmentPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-white">
                        <CheckCircle2
                          size={20}
                          className="text-emerald-400 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-neutral-200">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection
        animation="fadeUp"
        className="section-padding bg-neutral-100"
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Talk to our experts</h2>
            <p className="section-subtitle mx-auto mb-10">
              Ready to experience the difference? Get in touch for a free
              consultation. We're here to help you with tax, GST, audit,
              accounting, and compliance—all under one roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get in Touch
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <a
                href="tel:+919876543210"
                className="btn-accent inline-flex items-center justify-center"
              >
                <Phone className="mr-2" size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default WhyChooseUs;
