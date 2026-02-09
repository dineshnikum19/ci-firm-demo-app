import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { getServiceBySlug } from "../data/services";
import AnimatedSection from "../components/AnimatedSection";

/**
 * Single service page – hero image full width; then content.
 */
const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div>
      {/* Hero: full width, taller height */}
      <AnimatedSection
        animation="fadeIn"
        className="relative w-full h-[60vh] min-h-[360px] overflow-hidden"
      >
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-neutral-900/40" />
        <AnimatedSection
          animation="fadeUp"
          delay={300}
          className="absolute inset-0 flex items-end"
        >
          <div className="container-custom w-full pb-8 md:pb-10">
            <AnimatedSection animation="fadeUp" delay={400}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-sm">
                {service.title}
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={500}>
              <p className="mt-2 text-white/90 text-lg max-w-2xl">
                {service.title} – expert support tailored to your needs
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </AnimatedSection>

      {/* Content */}
      <AnimatedSection
        animation="fadeUp"
        className="pt-8 md:pt-16 pb-16 md:pb-20"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection animation="slideRight" delay={100}>
              <p className="text-neutral-700 text-lg leading-relaxed">
                {service.description}
              </p>
              {service.paragraphs && service.paragraphs.length > 0 && (
                <div className="mt-8 space-y-6">
                  {service.paragraphs.map((para, i) => (
                    <p key={i} className="text-neutral-700 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              )}
              <Link to="/contact" className="btn-primary mt-8 inline-flex">
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </AnimatedSection>
            <AnimatedSection
              animation="slideLeft"
              delay={200}
              className="bg-neutral-300 rounded-2xl p-8 border border-neutral-200"
            >
              <h2 className="font-semibold text-neutral-900 text-xl mb-6">
                What&apos;s included
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Back to services */}
      <AnimatedSection animation="fadeUp" className="pb-16">
        <div className="container-custom">
          <Link
            to="/services"
            className="text-primary font-medium hover:underline inline-flex items-center gap-1"
          >
            ← View all services
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ServiceDetail;
