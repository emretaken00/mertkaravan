import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Lütfen tüm zorunlu alanları doldurun.");
      return;
    }

    // Here you would typically send the form data to a backend
    toast.success("Mesajınız alındı! En kısa sürede size dönüş yapacağız.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="mb-4">İletişim</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Projeleriniz için bizimle iletişime geçin. Size en kısa sürede dönüş yapalım.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Bize Ulaşın
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Karavan projeleriniz için danışmanlık, fiyat teklifi veya genel sorularınız için 
                bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="tel:05067772545"
                className="flex items-start gap-4 p-4 border border-border hover:border-foreground/20 hover:bg-muted transition-smooth group"
              >
                <div className="p-3 bg-muted group-hover:bg-foreground group-hover:text-background rounded-lg transition-smooth">
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Telefon</p>
                  <p className="text-muted-foreground">0 (506) 777 25 45</p>
                </div>
              </a>

              <a
                href="mailto:info@mertkaravan.com"
                className="flex items-start gap-4 p-4 border border-border hover:border-foreground/20 hover:bg-muted transition-smooth group"
              >
                <div className="p-3 bg-muted group-hover:bg-foreground group-hover:text-background rounded-lg transition-smooth">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold mb-1">E-posta</p>
                  <p className="text-muted-foreground">info@mertkaravan.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 border border-border">
                <div className="p-3 bg-muted rounded-lg">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold mb-1">Adres</p>
                  <p className="text-muted-foreground">Türkiye</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/905067772545"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="premium" size="lg" className="w-full">
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile İletişim
              </Button>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border p-6 md:p-8 animate-fade-in-up">
            <h3 className="text-xl md:text-2xl font-bold mb-6">
              Mesaj Gönderin
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ad Soyad *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınız ve soyadınız"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-posta *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ornek@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefon
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0 (5__) ___ __ __"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mesajınız *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Projeniz hakkında detayları paylaşın..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Gönder
              </Button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 animate-fade-in-up">
          <div className="aspect-video bg-muted border border-border flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-muted-foreground" strokeWidth={1.5} />
              <p className="text-muted-foreground">Harita entegrasyonu için konum bilgisi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
