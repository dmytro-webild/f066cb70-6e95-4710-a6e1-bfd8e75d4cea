"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="large"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Jerseys",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="PitchKings"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "sparkles-gradient",
      }}
      title="Wear the Legacy"
      description="Authentic football jerseys for the ultimate fan. Experience the spirit of the world stage with premium quality gear."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "Contact Support",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-pattern-scales_23-2151365713.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Crafted for Passion"
      buttons={[
        {
          text: "Explore History",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Premium Fabric",
          description: "Moisture-wicking, breathable material.",
          imageSrc: "http://img.b2bpic.net/free-photo/fabric-texture-jersey-sport-background_272375-3230.jpg",
        },
        {
          title: "Official Look",
          description: "Detailed embroidery and authentic fit.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-friends-sharing-affectionate-moment-friendship_23-2151310443.jpg",
        },
        {
          title: "Fast Delivery",
          description: "Worldwide shipping for every jersey.",
          imageSrc: "http://img.b2bpic.net/free-photo/paper-box-packaging-with-t-shirt-clothing-brands_53876-110832.jpg",
        },
      ]}
      title="Why Choose Us?"
      description="Unmatched quality for every supporter."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "World Cup Edition",
          price: "₹1199",
          imageSrc: "http://img.b2bpic.net/free-vector/professional-soccer-uniform-templates-athletic-performance-shirt-patterns_29096-4683.jpg",
        },
        {
          id: "p2",
          name: "Global Away Kit",
          price: "₹1199",
          imageSrc: "http://img.b2bpic.net/free-photo/american-male-football-player-uniform-field_23-2150034600.jpg",
        },
        {
          id: "p3",
          name: "Gold Series",
          price: "₹1199",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-abstract-background-with-marble-texture_474888-4846.jpg",
        },
        {
          id: "p4",
          name: "Classic 98",
          price: "₹1199",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-female-tennis-player_23-2151378514.jpg",
        },
        {
          id: "p5",
          name: "Elite Training",
          price: "₹1199",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-leggings_23-2148381890.jpg",
        },
        {
          id: "p6",
          name: "Customized Fan Jersey",
          price: "₹1199",
          imageSrc: "http://img.b2bpic.net/free-photo/sporty-girl-drinking-water-after-long-marathon-goodlooking-female-model-preparing-sport-competition_197531-26687.jpg",
        },
      ]}
      title="Match Day Kits"
      description="Our latest collection at ₹1199."
      buttons={[
        {
          text: "WhatsApp Order",
          href: "https://wa.me/91XXXXXXXXXX",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "10k+",
          description: "Jerseys Sold",
        },
        {
          id: "m2",
          value: "50+",
          description: "Teams Available",
        },
        {
          id: "m3",
          value: "4.9",
          description: "Star Rating",
        },
      ]}
      title="Jersey Impact"
      description="By the numbers."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="The quality is simply outstanding, just like the real deal!"
      rating={5}
      author="Rahul Singh"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-joyful-woman-holding-mobile-phone_171337-4024.jpg",
          alt: "User",
        },
        {
          src: "http://img.b2bpic.net/free-photo/girl-studio-taking-photo-with-camera_23-2148565555.jpg",
          alt: "User",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-soccer-game-fan-enjoying-match_23-2150860825.jpg",
          alt: "User",
        },
        {
          src: "http://img.b2bpic.net/free-photo/different-people-looking-soccer-team_23-2149015541.jpg",
          alt: "User",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-people-watching-football-game_23-2149015561.jpg",
          alt: "User",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "How to order?",
          content: "Just click the WhatsApp button on our products!",
        },
        {
          id: "f2",
          title: "What is the price?",
          content: "All jerseys are flat ₹1199.",
        },
        {
          id: "f3",
          title: "Shipping time?",
          content: "We ship within 3-5 business days.",
        },
      ]}
      sideTitle="Fan Queries"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="WhatsApp Support"
      title="Need a Jersey?"
      description="Order now via WhatsApp for fastest service."
      imageSrc="http://img.b2bpic.net/free-photo/wrench-american-football-holding-expertise-cut-out_1134-1092.jpg"
      mediaAnimation="slide-up"
      buttonText="Chat on WhatsApp"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="PitchKings"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "WhatsApp Order",
        href: "https://wa.me/91XXXXXXXXXX",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
