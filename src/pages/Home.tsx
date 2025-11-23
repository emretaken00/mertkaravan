import { Link } from "react-router-dom";
import { ArrowRight, Wrench, PenTool, Battery, Sparkles, Quote, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-caravan.jpg";

const Home = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Karavan Üretimi",
      description: "Özel tasarım ve üretim ile hayalinizdeki karavanı gerçeğe dönüştürüyoruz.",
    },
    {
      icon: PenTool,
      title: "İç Dizayn",
      description: "Modern ve fonksiyonel iç mekan tasarımlarıyla konforunuzu maksimize ediyoruz.",
    },
    {
      icon: Wrench,
      title: "Bakım & Tamir",
      description: "Profesyonel bakım ve onarım hizmetleriyle karavanınız her zaman yolda.",
    },
    {
      icon: Battery,
      title: "Elektrik Sistemleri",
      description: "Güneş enerjisi ve elektrik sistemleri kurulumu ile enerji bağımsızlığı.",
    },
  ];

  const testimonials = [
    {
      name: "Ahmet Y.",
      text: "Mert Karavan ile çalışmak harikaydı. Hayalimizdeki karavanı tam istediğimiz gibi yaptılar. İşçilik ve malzeme kalitesi mükemmel.",
    },
    {
      name: "Zeynep K.",
      text: "Güneş enerjisi sistemi kurulumu için başvurduk. Profesyonel yaklaşımları ve detaylı açıklamaları ile çok memnun kaldık.",
    },
    {
      name: "Mehmet S.",
      text: "Karavan iç dizayn hizmeti aldık. Hem estetik hem de fonksiyonel bir sonuç ortaya çıktı. Teşekkürler Mert Karavan!",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-hero-bg/95 to-hero-bg/70" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-hero-foreground mb-6">
              Özgürlüğün Adı:<br />Mert Karavan
            </h1>
            <p className="text-xl md:text-2xl text-hero-foreground/90 mb-8 leading-relaxed">
              Hayalinizdeki karavan yaşamını gerçeğe dönüştürüyoruz. 
              Özel tasarım üretimden profesyonel bakıma kadar tüm hizmetler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/hizmetler">
                <Button variant="premium" size="xl" className="bg-hero-foreground text-hero-bg hover:bg-hero-foreground/90 border-hero-foreground w-full sm:w-auto">
                  Hizmetlerimizi Keşfet
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/iletisim">
                <Button variant="outline" size="xl" className="border-hero-foreground/40 text-hero-foreground hover:bg-hero-foreground/10 w-full sm:w-auto">
                  İletişime Geç
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Karavan dünyasında ihtiyacınız olan her şey için profesyonel çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/hizmetler">
              <Button variant="hero" size="lg">
                Tüm Hizmetleri Gör
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4">Müşteri Yorumları</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mert Karavan ile çalışan müşterilerimizin deneyimleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 md:p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Quote className="w-10 h-10 text-muted-foreground mb-4" strokeWidth={1.5} />
                <p className="text-foreground leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="mb-4 text-primary-foreground">Projeniz İçin Hemen İletişime Geçin</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Karavan hayallerinizi gerçeğe dönüştürmek için sizinle çalışmayı bekliyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:05067772545">
              <Button variant="premium" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground w-full sm:w-auto">
                Hemen Ara
              </Button>
            </a>
            <a 
              href="https://wa.me/905067772545" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="xl" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
