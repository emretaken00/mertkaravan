import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Mert Karavan</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Hayalinizdeki karavan yaşamını gerçeğe dönüştürüyoruz. 
              Üretimden bakıma, iç dizayndan özel projelere kadar tüm karavan ihtiyaçlarınız için yanınızdayız.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Erişim</h4>
            <nav className="flex flex-col gap-2">
              <Link 
                to="/" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                Ana Sayfa
              </Link>
              <Link 
                to="/hizmetler" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                Hizmetler
              </Link>
              <Link 
                to="/hakkimizda" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                Hakkımızda
              </Link>
              <Link 
                to="/galeri" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                Galeri
              </Link>
              <Link 
                to="/iletisim" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                İletişim
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:05067772545" 
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>0 (506) 777 25 45</span>
              </a>
              <a 
                href="mailto:info@mertkaravan.com" 
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>info@mertkaravan.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Mert Karavan. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
