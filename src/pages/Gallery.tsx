import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";
import gallery9 from "@/assets/gallery-9.jpeg";

const galleryItems = [
  { src: gallery1, alt: "Hot Stone Massage Therapy", category: "Massage" },
  { src: gallery2, alt: "Relaxing Foot Spa", category: "Foot Spa" },
  { src: gallery3, alt: "Hot Stone Massage Therapy", category: "Massage" },
  { src: gallery4, alt: "Relaxing Body Massage", category: "Massage" },
  { src: gallery5, alt: "Relaxing Body Massage", category: "Massage" },
  { src: gallery6, alt: "Relaxing Body Massage", category: "Massage" },
  { src: gallery7, alt: "Relaxing Foot Spa", category: "Foot Spa" },
  { src: gallery8, alt: "Relaxing Facial Treatment", category: "Facial" },
  { src: gallery9, alt: "Relaxing Body Massage", category: "Massage" },
];

// Generate unique categories and ensure "All" is first
const categories = ["All", ...new Set(galleryItems.map(item => item.category))];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Use useMemo to optimize filtering - only recalculates when dependencies change
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return galleryItems;
    }
    return galleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  // Debug: Log current state to help identify issues
  console.log('Active Category:', activeCategory);
  console.log('Filtered Items:', filteredItems.length);

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">
              Our Work
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-3">
              Gallery
            </h1>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              A glimpse into the relaxing treatments and beautiful results we
              deliver for our clients.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-sm px-5 py-2 rounded-full transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-muted"
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-2 text-xs opacity-70">
                    ({galleryItems.filter(item => item.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="text-center mb-4 text-sm text-muted-foreground">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'image' : 'images'}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <button
                  key={`${item.alt}-${index}`} // More unique key using index
                  onClick={() => setSelectedImage(item.src)}
                  className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow aspect-square"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                      <span className="inline-block font-body text-xs text-white bg-primary/80 backdrop-blur-sm rounded-full px-3 py-1 mb-2">
                        {item.category}
                      </span>
                      <p className="font-heading text-white text-lg drop-shadow-md text-left">
                        {item.alt}
                      </p>
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No images found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="w-[calc(100vw-2rem)] max-w-3xl p-2 sm:p-3 bg-card border-none rounded-2xl">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;