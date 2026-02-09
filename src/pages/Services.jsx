import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  Receipt,
  ClipboardCheck,
  Building2,
  Calculator,
  ShieldCheck,
  LineChart,
  Briefcase,
  Users,
  Check,
  Phone,
} from "lucide-react";
import { services as servicesData } from "../data/services";
import AnimatedSection from "../components/AnimatedSection";

/**
 * Services Page - Clean, Premium Design
 */
const Services = () => {
  const services = servicesData.map((s) => ({
    ...s,
    icon: {
      "income-tax": FileText,
      gst: Receipt,
      audit: ClipboardCheck,
      "company-registration": Building2,
      accounting: Calculator,
      compliance: ShieldCheck,
      "tax-planning-advisory": LineChart,
      "business-advisory": Briefcase,
      "payroll-roc-secretarial": Users,
    }[s.slug],
    title:
      s.slug === "income-tax"
        ? "Income Tax Filing"
        : s.slug === "compliance"
          ? "Compliance & Advisory"
          : s.title,
  }));

  const process = [
    { step: "01", title: "Consultation", desc: "Understand your needs" },
    { step: "02", title: "Documentation", desc: "Collect required docs" },
    { step: "03", title: "Processing", desc: "Expert handling" },
    { step: "04", title: "Delivery", desc: "Timely completion" },
  ];

  return (
    <div>
      {/* Hero with Background */}
      <AnimatedSection
        animation="fadeIn"
        className="relative py-24 md:py-32 overflow-hidden min-h-[300px] sm:min-h-[360px]"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80"
            alt="Financial documents"
            className="img-cover"
            fetchpriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent"></div>
        </div>

        <AnimatedSection
          animation="fadeUp"
          delay={200}
          className="container-custom relative z-10"
        >
          <div className="max-w-2xl">
            <AnimatedSection animation="fadeUp" delay={300}>
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-4">
                Services
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={400}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                Comprehensive CA services
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={500}>
              <p className="text-lg text-neutral-900 leading-relaxed">
                From tax compliance to business advisory — everything your
                business needs.
              </p>
            </AnimatedSection>
          </div>

          {/* Quick Links */}
          <AnimatedSection
            animation="fadeUp"
            delay={600}
            className="flex flex-wrap gap-3 mt-10"
          >
            {services.map((s, index) => (
              <AnimatedSection
                key={s.slug}
                animation="scale"
                delay={700 + index * 50}
              >
                <a
                  href={`#${s.slug}`}
                  className="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-neutral-200 text-sm font-medium text-neutral-700 hover:bg-white hover:border-neutral-300 transition-colors"
                >
                  {s.title}
                </a>
              </AnimatedSection>
            ))}
          </AnimatedSection>
        </AnimatedSection>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection animation="fadeUp" className="section-padding">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.slug}
                id={service.slug}
                animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
                delay={index * 100}
                className={`grid lg:grid-cols-2 gap-12 items-start scroll-mt-28 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-neutral-200 flex items-center justify-center">
                      <service.icon size={24} className="text-neutral-700" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-neutral-600 text-lg mb-8">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="btn-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>

                <AnimatedSection
                  animation="fadeUp"
                  delay={200}
                  className={`bg-neutral-100 rounded-2xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <h3 className="font-semibold text-neutral-900 mb-6">
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {service.features.slice(0, 7).map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-emerald-600" />
                        </div>
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection animation="fadeUp" className="bg-neutral-100">
        <div className="container-custom">
          <AnimatedSection
            animation="fadeUp"
            delay={100}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Process
            </p>
            <h2 className="section-title">How we work</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <AnimatedSection
                key={index}
                animation="fadeUp"
                delay={200 + index * 100}
                className="card-elevated text-center bg-neutral-400"
              >
                <div className="w-14 h-14 rounded-full bg-neutral-900 text-white font-bold flex items-center justify-center mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-900">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection animation="scale" className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
                alt="Team collaboration"
                className="img-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-neutral-900/85"></div>
            </div>
            <div className="relative z-10 p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to get started?
              </h2>
              <p className="text-neutral-300 mb-8">
                Get a free quote for your requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-accent">
                  Free Consultation
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <a
                  href="tel:+919876543210"
                  className="btn-secondary !bg-white/10 !border-white/20 !text-white hover:!bg-white/20"
                >
                  <Phone className="mr-2" size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Services;
