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
            image: "https://www.code-zero.com/uploads/thumbnail/30/61/9a/1766482827/navy-sweatvest-front_800x800.jpg?ts=1768409430",
            href: "https://www.code-zero.com/sweat-jacket-men-salt-water/m10204197.c10.l",
            badge: "New",
          },
          {
            name: "Hoodie Salt Water",
            price: "€100.00",
            category: "Men",
            image: "https://www.code-zero.com/uploads/thumbnail/dd/1b/48/1766507653/grey-hoodie-front-saltwater_800x800.jpg?ts=1768409421",
            href: "https://www.code-zero.com/hoodie-men-salt-water/m10204196.d15.l",
            badge: "New",
          },
          {
            name: "Fleece Jacket Crewline",
            price: "€100.00",
            category: "Men",
            image: "https://www.code-zero.com/uploads/thumbnail/2c/d1/da/1733396324/fleece-jacket-men-black_800x800.jpg?ts=1733396325",
            href: "https://www.code-zero.com/fleece-jacket-men-crewline/m10021124.b10.l",
            badge: "New",
          },
          {
            name: "Jacket Stern",
            price: "€120.00",
            category: "Men",
            image: "https://www.code-zero.com/uploads/thumbnail/c7/f2/cd/1699274081/stern-jacket-navy_800x800.jpg?ts=1758637010",
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
            image: "https://www.code-zero.com/uploads/thumbnail/c3/5f/7e/1730298622/hoodie-oversized-blue-women-sea-breeze_800x800.jpg?ts=1753356688",
            href: "https://www.code-zero.com/hoodie-women-sea-breeze/w10204194.c15.m",
          },
          {
            name: "Padded Vest Jackyard",
            price: "€100.00",
            category: "Women",
            image: "https://www.code-zero.com/uploads/thumbnail/c5/ae/b4/1738253044/vest-women-grey-light_800x800.jpg?ts=1747321082",
            href: "https://www.code-zero.com/padded-vest-women-jackyard/w00401182.d15.m",
          },
          {
            name: "Short-Zip Prestigieux",
            price: "€100.00",
            category: "Les Voiles d'Antibes",
            image: "https://www.code-zero.com/uploads/thumbnail/6f/d0/8c/1743002668/vda-shortzip-women-navy_800x800.jpg?ts=1743683510",
            href: "https://www.code-zero.com/short-zip-sweatshirt-women-prestigieux/w50121135.c10.m",
          },
          {
            name: "Polo Shirt Coastal",
            price: "€70.00",
            category: "Women",
            image: "https://www.code-zero.com/uploads/thumbnail/2f/8f/61/1686659097/polo-shirt-women-coastal-black_800x800.jpg?ts=1686659100",
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
