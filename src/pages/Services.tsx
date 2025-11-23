import { Wrench, PenTool, Battery, Sparkles, Package, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Karavan Üretimi",
      description: "Sıfırdan özel tasarım karavan üretimi yapıyoruz. İhtiyaçlarınıza ve bütçenize uygun, kaliteli malzemeler kullanarak hayalinizdeki karavanı üretiyoruz. Modern tasarım anlayışı ile estetik ve fonksiyonelliği bir araya getiriyoruz.",
    },
    {
      icon: PenTool,
      title: "Karavan İç Dizaynı",
      description: "Mevcut karavanınızın iç mekanını yeniliyoruz. Maksimum kullanım alanı ve konfor için akıllı çözümler üretiyoruz. Modern malzemeler, ergonomik tasarım ve şık detaylarla yaşam alanınızı dönüştürüyoruz.",
    },
    {
      icon: Wrench,
      title: "Bakım & Tamir",
      description: "Profesyonel ekibimizle tüm karavan bakım ve onarım işlemlerinizi gerçekleştiriyoruz. Periyodik bakımdan arıza tamirlerine, mekanik işlemlerden boya-badanaya kadar geniş hizmet yelpazesi sunuyoruz.",
    },
    {
      icon: Battery,
      title: "Elektrik & Güneş Sistemi",
      description: "Karavan elektrik sistemlerinin kurulumu ve modernizasyonu. Güneş enerjisi panelleri, invertör sistemleri, batarya yönetimi ve LED aydınlatma sistemleri ile enerji bağımsızlığınızı sağlıyoruz.",
    },
    {
      icon: Package,
      title: "Özel Proje Karavanlar",
      description: "Benzersiz ihtiyaçlarınız için özel proje karavanlar tasarlıyor ve üretiyoruz. Mobil ofis, gezici atölye, sergi aracı veya özel amaçlı karavanlar için tam donanımlı çözümler sunuyoruz.",
    },
    {
      icon: Cog,
      title: "Aksesuar & Donanım",
      description: "Karavanınız için kaliteli aksesuar ve donanım tedariki. Klima sistemleri, ısıtıcılar, su sistemleri, depolama çözümleri ve daha fazlası için güvenilir ürünler ve profesyonel montaj hizmeti.",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="mb-4">Hizmetlerimiz</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Karavan dünyasında A'dan Z'ye profesyonel hizmetler. 
            Her detayda kalite, her işte güvenilirlik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
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

        <div className="bg-muted p-8 md:p-12 border border-border animate-fade-in-up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Özel İhtiyaçlarınız İçin
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Yukarıda belirtilmeyen özel bir ihtiyacınız mı var? 
              Biz her türlü karavan projesinde yanınızdayız. 
              Detaylı bilgi ve fiyat teklifi için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:05067772545">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Hemen Ara
                </Button>
              </a>
              <a 
                href="https://wa.me/905067772545" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  WhatsApp ile İletişim
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
