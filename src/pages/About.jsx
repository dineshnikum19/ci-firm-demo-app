import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  GraduationCap,
  CheckCircle2,
  Linkedin,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

/**
 * About Page - Clean, Premium Design
 */
const About = () => {
  const team = [
    {
      name: "CA Rajesh XYZ",
      role: "Founder & Managing Partner",
      exp: "25+ years",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "CA Priya XYZ",
      role: "Partner",
      exp: "18+ years",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "CA Amit Desai",
      role: "Partner",
      exp: "15+ years",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "CA Neha Patel",
      role: "Senior Manager",
      exp: "12+ years",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    },
  ];

  const milestones = [
    { year: "2005", event: "Founded in Ahmedabad" },
    { year: "2012", event: "Crossed 1000+ clients" },
    { year: "2017", event: "GST Suvidha Provider" },
    { year: "2024", event: "Expanded across Gujarat" },
  ];

  return (
    <div className="pt-20">
      {/* Hero with Background Image */}
      <AnimatedSection animation="fadeIn" className="relative py-24 md:py-32 overflow-hidden min-h-[300px] sm:min-h-[360px]">
        <div className="absolute inset-0">
          <img
            src="/chart-peoples.jpg"
            alt="Modern office"
            className="img-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/50 to-transparent"></div>
        </div>

        <AnimatedSection animation="fadeUp" delay={200} className="container-custom relative z-10">
          <div className="max-w-2xl">
            <AnimatedSection animation="fadeUp" delay={300}>
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-4">
                About Us
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={400}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                Building trust through excellence
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={500}>
              <p className="text-lg text-neutral-800 leading-relaxed">
                Since 2005, we've been the trusted financial partner for
                businesses across Gujarat, delivering expertise with integrity.
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </AnimatedSection>

      {/* Story + Timeline */}
      <AnimatedSection animation="fadeUp" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection animation="slideRight" delay={100}>
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                Our Story
              </p>
              <h2 className="section-title">
                Two decades of financial excellence
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  XYZ & Associates was founded with a simple mission: provide
                  exceptional financial services that truly make a difference.
                </p>
                <p>
                  Today, we serve over 5,000 clients across diverse industries,
                  from startups to established enterprises.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Work With Us
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </AnimatedSection>

            {/* Timeline */}
            <AnimatedSection animation="slideLeft" delay={200} className="bg-neutral-200/60 rounded-2xl p-8">
              <h3 className="font-semibold text-neutral-900 mb-8">
                Our Journey
              </h3>
              <div className="space-y-6">
                {milestones.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      {item.year.slice(2)}
                    </div>
                    <div className="pt-3">
                      <p className="text-sm text-emerald-600 font-medium">
                        {item.year}
                      </p>
                      <p className="text-neutral-700">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection animation="fadeUp" className="bg-neutral-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Target,
                title: "Mission",
                text: "Empower businesses with expert financial guidance, ensuring compliance and growth.",
              },
              {
                icon: Eye,
                title: "Vision",
                text: "Be the most trusted CA firm in Gujarat, known for excellence and innovation.",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 150} className="card-elevated text-center">
                <div className="w-14 h-14 rounded-xl bg-neutral-200 flex items-center justify-center mx-auto mb-5">
                  <item.icon size={24} className="text-neutral-700" />
                </div>
                <h3 className="font-semibold text-xl text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-500">{item.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team with Photos */}
      <AnimatedSection animation="fadeUp" className="section-padding">
        <div className="container-custom">
          <AnimatedSection animation="fadeUp" delay={100} className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Team
            </p>
            <h2 className="section-title">Our experts</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={200 + index * 100} className="group">
                {/* Photo */}
                <div className="relative mb-5 rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full max-w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    width={300}
                    height={300}
                    loading="lazy"
                    decoding="async"
                  />
                  {/* LinkedIn overlay */}
                  <a
                    href="#"
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>

                {/* Info */}
                <h3 className="font-semibold text-neutral-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-emerald-600 mb-2">{member.role}</p>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <GraduationCap size={14} />
                  {member.exp}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection animation="fadeUp" className="section-padding bg-neutral-900 text-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeUp" delay={100} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recognized & Certified
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "ICAI Member Firm",
              "GST Suvidha Provider",
              "ISO 9001:2015",
              "DISA Certified",
            ].map((cert, i) => (
              <AnimatedSection
                key={i}
                animation="scale"
                delay={200 + i * 100}
                className="flex items-center gap-3 bg-neutral-800 px-5 py-3 rounded-full"
              >
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span className="text-sm font-medium">{cert}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA with Background */}
      <AnimatedSection animation="scale" className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
                alt="Team meeting"
                className="img-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-neutral-900/80"></div>
            </div>
            <div className="relative z-10 py-16 md:py-20 px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to work with us?
              </h2>
              <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
                Let's discuss how we can help your business grow.
              </p>
              <Link to="/contact" className="btn-accent">
                Schedule Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
