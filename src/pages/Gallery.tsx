import { useState } from "react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: gallery1,
      title: "Modern İç Dizayn",
      category: "İç Mekan",
    },
    {
      src: gallery2,
      title: "Güneş Enerjisi Sistemi",
      category: "Elektrik",
    },
    {
      src: gallery3,
      title: "Lüks Karavan Tasarımı",
      category: "Dış Görünüm",
    },
    {
      src: gallery4,
      title: "Profesyonel Atölye",
      category: "Atölye",
    },
    {
      src: gallery5,
      title: "Konforlu Yatak Odası",
      category: "İç Mekan",
    },
    {
      src: gallery6,
      title: "Modern Mutfak Tasarımı",
      category: "İç Mekan",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="mb-4">Galeri</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Gerçekleştirdiğimiz projelerden ve atölyemizden kareler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-muted cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end">
                <div className="p-6 text-primary-foreground w-full">
                  <p className="text-sm font-medium mb-1">{image.category}</p>
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full image view */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-foreground hover:text-muted-foreground transition-smooth text-sm"
              >
                Kapat ✕
              </button>
              <img
                src={selectedImage}
                alt="Full size"
                className="w-full h-auto max-h-[85vh] object-contain shadow-premium"
              />
            </div>
          </div>
        )}

        <div className="mt-16 bg-muted p-8 md:p-12 border border-border text-center animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Projenizi Görselleştirelim
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Sizin de projenizi galeriye eklemek ister misiniz? 
            Hayalinizdeki karavanı birlikte tasarlayalım.
          </p>
          <a href="tel:05067772545">
            <Button variant="hero" size="lg">
              İletişime Geç
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
