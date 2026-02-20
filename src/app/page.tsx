"use client";

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import ProductGrid from "@/components/ProductGrid";
import LifestyleSection from "@/components/LifestyleSection";
import SplitFeature from "@/components/SplitFeature";
import CollectionBanner from "@/components/CollectionBanner";
import Heritage from "@/components/Heritage";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-up, .fade-in, .slide-left, .line-grow").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <MarqueeBanner />
      <ProductGrid
        title="New Arrivals"
        subtitle="Performance meets everyday style"
        products={[
          {
            name: "Sweat Jacket Salt Water",
            price: "€100.00",
            category: "Men",
            image: "/products/sweat-jacket.jpg",
            href: "https://www.code-zero.com/sweat-jacket-men-salt-water/m10204197.c10.l",
            badge: "New",
          },
          {
            name: "Hoodie Salt Water",
            price: "€100.00",
            category: "Men",
            image: "/products/hoodie-salt-water.jpg",
            href: "https://www.code-zero.com/hoodie-men-salt-water/m10204196.d15.l",
            badge: "New",
          },
          {
            name: "Fleece Jacket Crewline",
            price: "€100.00",
            category: "Men",
            image: "/products/fleece-jacket.jpg",
            href: "https://www.code-zero.com/fleece-jacket-men-crewline/m10021124.b10.l",
            badge: "New",
          },
          {
            name: "Jacket Stern",
            price: "€120.00",
            category: "Men",
            image: "/products/jacket-stern.jpg",
            href: "https://www.code-zero.com/jacket-men-stern/m00091135.b20.l",
          },
        ]}
      />
      <LifestyleSection />
      <ProductGrid
        title="Women's Favorites"
        subtitle="Effortless elegance, nautical soul"
        products={[
          {
            name: "Hoodie Sea Breeze",
            price: "€90.00",
            category: "Women",
            image: "/products/hoodie-sea-breeze.jpg",
            href: "https://www.code-zero.com/hoodie-women-sea-breeze/w10204194.c15.m",
          },
          {
            name: "Padded Vest Jackyard",
            price: "€100.00",
            category: "Women",
            image: "/products/vest-jackyard.jpg",
            href: "https://www.code-zero.com/padded-vest-women-jackyard/w00401182.d15.m",
          },
          {
            name: "Short-Zip Prestigieux",
            price: "€100.00",
            category: "Les Voiles d'Antibes",
            image: "/products/shortzip-prestigieux.jpg",
            href: "https://www.code-zero.com/short-zip-sweatshirt-women-prestigieux/w50121135.c10.m",
          },
          {
            name: "Polo Shirt Coastal",
            price: "€70.00",
            category: "Women",
            image: "/products/polo-coastal.jpg",
            href: "https://www.code-zero.com/polo-shirt-women-coastal/w50021134.b10.m",
          },
        ]}
      />
      <SplitFeature />
      <CollectionBanner />
      <Heritage />
      <Newsletter />
      <Footer />
    </main>
  );
}
