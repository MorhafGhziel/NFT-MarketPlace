import React from "react";
import Image from "next/image";
import CategoryCard from "@/public/CategoryCard.svg";
import CategoryCard2 from "@/public/CategoryCard2.svg";
import CategoryCard3 from "@/public/CategoryCard3.svg";
import CategoryCard4 from "@/public/CategoryCard4.svg";
import CategoryCard5 from "@/public/CategoryCard5.svg";
import CategoryCard6 from "@/public/CategoryCard6.svg";
import CategoryCardMd5 from "@/public/CategoryCardMd5.svg";
import CategoryCardMd6 from "@/public/CategoryCardMd6.svg";
import CategoryCard7 from "@/public/CategoryCard7.svg";
import CategoryCard8 from "@/public/CategoryCard8.svg";
import CategoryCardLg1 from "@/public/CategoryCardLg1.svg";
import CategoryCardLg2 from "@/public/CategoryCardLg2.svg";
import CategoryCardLg3 from "@/public/CategoryCardLg3.svg";
import CategoryCardLg4 from "@/public/CategoryCardLg4.svg";
import CategoryCardLg5 from "@/public/CategoryCardLg5.svg";
import CategoryCardLg6 from "@/public/CategoryCardLg6.svg";
import CategoryCardLg7 from "@/public/CategoryCardLg7.svg";
import CategoryCardLg8 from "@/public/CategoryCardLg8.svg";

const BrowseCategories = () => {
  // Group images into an array with their src and alt attributes
  const categoriesSm = [
    { id: 1, src: CategoryCard, alt: "Category 1" },
    { id: 2, src: CategoryCard2, alt: "Category 2" },
    { id: 3, src: CategoryCard3, alt: "Category 3" },
    { id: 4, src: CategoryCard4, alt: "Category 4" },
    { id: 5, src: CategoryCard5, alt: "Category 5" },
    { id: 6, src: CategoryCard6, alt: "Category 6" },
    { id: 7, src: CategoryCard7, alt: "Category 7" },
    { id: 8, src: CategoryCard8, alt: "Category 8" },
  ];

  const categoriesMd = [
    { id: 1, src: CategoryCard, alt: "Category 1" },
    { id: 2, src: CategoryCard2, alt: "Category 2" },
    { id: 3, src: CategoryCard3, alt: "Category 3" },
    { id: 4, src: CategoryCard4, alt: "Category 4" },
    { id: 5, src: CategoryCardMd5, alt: "Category 5" },
    { id: 6, src: CategoryCardMd6, alt: "Category 6" },
    { id: 7, src: CategoryCard7, alt: "Category 7" },
    { id: 8, src: CategoryCard8, alt: "Category 8" },
  ];

  const categoriesLg = [
    { id: 1, src: CategoryCardLg1, alt: "Category 1" },
    { id: 2, src: CategoryCardLg2, alt: "Category 2" },
    { id: 3, src: CategoryCardLg3, alt: "Category 3" },
    { id: 4, src: CategoryCardLg4, alt: "Category 4" },
    { id: 5, src: CategoryCardLg5, alt: "Category 5" },
    { id: 6, src: CategoryCardLg6, alt: "Category 6" },
    { id: 7, src: CategoryCardLg7, alt: "Category 7" },
    { id: 8, src: CategoryCardLg8, alt: "Category 8" },
  ];

  return (
    <section className="py-[40px] md:py-[60px] lg:py-[70px] bg-[#2B2B2B]">
      <div className="text-[28px] font-sans">
        <h4>Browse Categories</h4>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:hidden">
        {/* Map over categories array to render images */}
        {categoriesSm.map((category) => (
          <div key={category.id}>
            <Image src={category.src} alt={category.alt} />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 lg:hidden">
        {/* Map over categories array to render images */}
        {categoriesMd.map((category) => (
          <div key={category.id}>
            <Image src={category.src} alt={category.alt} />
          </div>
        ))}
      </div>

      <div className="lg:grid lg:grid-cols-4 max-w-5xl mx-auto justify-center gap-6 hidden">
        {/* Map over categories array to render images */}
        {categoriesLg.map((category) => (
          <div key={category.id}>
            <Image src={category.src} alt={category.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategories;
