import React from "react";
import Image from "next/image";
import CategoryCard from "@/public/CategoryCard.svg";
import CategoryCard2 from "@/public/CategoryCard2.svg";
import CategoryCard3 from "@/public/CategoryCard3.svg";
import CategoryCard4 from "@/public/CategoryCard4.svg";
import CategoryCard5 from "@/public/CategoryCard5.svg";
import CategoryCard6 from "@/public/CategoryCard6.svg";
import CategoryCard7 from "@/public/CategoryCard7.svg";
import CategoryCard8 from "@/public/CategoryCard8.svg";

const BrowseCategories = () => {
  // Group images into an array with their src and alt attributes
  const categories = [
    { id: 1, src: CategoryCard, alt: "Category 1" },
    { id: 2, src: CategoryCard2, alt: "Category 2" },
    { id: 3, src: CategoryCard3, alt: "Category 3" },
    { id: 4, src: CategoryCard4, alt: "Category 4" },
    { id: 5, src: CategoryCard5, alt: "Category 5" },
    { id: 6, src: CategoryCard6, alt: "Category 6" },
    { id: 7, src: CategoryCard7, alt: "Category 7" },
    { id: 8, src: CategoryCard8, alt: "Category 8" },
  ];

  return (
    <section className="py-[40px] md:py-[60px] lg:py-[70px] bg-[#2B2B2B]">
      <div className="text-[28px] font-sans">
        <h4>Browse Categories</h4>
      </div>
      <div className="grid grid-cols-2 gap-y-1 gap-x-1">
        {/* Map over categories array to render images */}
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex justify-center items-center gap-x-1 gap-y-1"
          >
            <Image src={category.src} alt={category.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategories;
