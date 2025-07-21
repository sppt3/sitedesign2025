import { Button } from '@/components/ui/button';
import heroImage from '@/assets/malaysia-cityscape-data.jpg';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  onConsultationClick: () => void;
}

export const HeroSection = ({ onConsultationClick }: HeroSectionProps) => {
  // Data points removed for simplicity, can be re-added if needed with new color
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Southeast Asia cityscape with data intelligence overlays" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero opacity-95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-width section-padding text-center">
        <div className="fade-in visible max-w-4xl mx-auto bg-card/80 md:bg-card/70 rounded-xl px-6 py-10 shadow-custom-soft backdrop-blur-lg">
          <h1 className="heading-xl mb-6 text-foreground">
            Build Better Cities
          </h1>

          <p className="heading-md mb-4 text-accent font-semibold">
            We equip developers, banks, governments, retailers and transit operators with geospatial intelligence, market data, and mobility insights—so every land deal, project launch, business and network strategy is grounded in evidence.
          </p>

          <p className="body-lg mb-8 text-muted-foreground">
            In an age where data is abundant, relying on gut feel is no longer viable. Big data and geospatial insights fill the gap that could unlock better decisions, faster responses to market shifts, and long-term competitive advantage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={onConsultationClick}
              className="btn-hero"
              size="lg"
            >
              Request a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};