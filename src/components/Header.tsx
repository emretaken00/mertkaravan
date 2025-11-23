import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "Galeri", path: "/galeri" },
    { name: "İletişim", path: "/iletisim" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            Mert Karavan
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-smooth hover:text-foreground",
                  isActive(link.path) 
                    ? "text-foreground" 
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button - Desktop */}
          <a 
            href="tel:05067772545" 
            className="hidden md:block"
          >
            <Button variant="hero" size="default">
              <Phone className="w-4 h-4" />
              İletişime Geç
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-base font-medium transition-smooth hover:text-foreground px-4 py-2",
                    isActive(link.path) 
                      ? "text-foreground bg-muted" 
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="tel:05067772545"
                className="px-4 mt-2"
              >
                <Button variant="hero" size="default" className="w-full">
                  <Phone className="w-4 h-4" />
                  İletişime Geç
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
