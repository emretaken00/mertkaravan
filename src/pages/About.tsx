import { Target, Eye, Award, Users } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Misyonumuz",
      description: "Karavan tutkunlarına en kaliteli üretim, tasarım ve bakım hizmetlerini sunarak, onların yolculuk deneyimlerini güvenli ve konforlu hale getirmek.",
    },
    {
      icon: Eye,
      title: "Vizyonumuz",
      description: "Türkiye'nin en güvenilir ve yenilikçi karavan hizmet sağlayıcısı olmak, sektöre standart oluşturmak.",
    },
    {
      icon: Award,
      title: "Değerlerimiz",
      description: "Kalite, güvenilirlik, müşteri memnuniyeti ve yenilikçilik bizim temel değerlerimizdir. Her projede bu değerleri yaşatıyoruz.",
    },
    {
      icon: Users,
      title: "Ekibimiz",
      description: "Deneyimli ve tutkulu ekibimiz, her projede en iyi sonucu elde etmek için çalışıyor. Müşteri odaklı yaklaşımımızla fark yaratıyoruz.",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h1 className="mb-6">Mert Karavan Hakkında</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Karavan tutkunlarının hayallerini gerçeğe dönüştüren, 
            kalite ve güvenilirlik odaklı bir ekibiz.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hikayemiz</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mert Karavan, karavan tutkusundan doğan bir marka. 
                Yıllarca farklı projelerde edindiğimiz deneyim ve bilgi birikimimizi, 
                karavan dünyasına aktarmak için yola çıktık.
              </p>
              <p>
                Amacımız, her müşterimize özgün, kaliteli ve güvenilir hizmet sunmak. 
                Üretimden bakıma, iç dizayndan özel projelere kadar geniş bir yelpazede 
                çalışarak, karavan sahiplerinin tüm ihtiyaçlarını karşılıyoruz.
              </p>
              <p>
                Modern tasarım anlayışımız ve detaylara verdiğimiz önemle, 
                her projeyi bir sanat eserine dönüştürüyoruz. Müşteri memnuniyeti 
                bizim için en büyük başarı kriteri.
              </p>
            </div>
          </div>
          <div className="animate-fade-in-up order-first md:order-last">
            <img
              src={gallery1}
              alt="Mert Karavan İç Mekan"
              className="w-full h-auto shadow-premium"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 md:p-8 transition-smooth hover:border-foreground/20 hover:shadow-premium animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-lg flex-shrink-0">
                    <value.icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Image */}
        <div className="animate-fade-in-up">
          <img
            src={gallery4}
            alt="Mert Karavan Atölye"
            className="w-full h-auto shadow-premium"
          />
          <p className="text-center text-muted-foreground mt-6 text-lg">
            Modern atölyemizde her detay özenle işleniyor
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
