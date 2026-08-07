import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, CheckCircle, Shield, Zap, Users, FileText, Car } from "lucide-react";
import { useEffect, useState } from "react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

const BUSINESS = {
  name: "Soares Despachante e Proteção Veicular",
  whatsapp: "5511987496688",
  phone: "11987496688",
  message: "Olá! Vim pelo site e gostaria de um orçamento.",
  address: "R. Monteiro Lobato, 39 — Jardim Jacira, Itapecerica da Serra – SP, 06864-340",
  hours: "Segunda a sexta, 8h às 18h • Sábado, 8h às 12h",
  rating: "5,0",
  reviews: "13",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Soares+despachante+e+prote%C3%A7%C3%A3o+veicular+R.+Monteiro+Lobato+39+Jardim+Jacira+Itapecerica+da+Serra",
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.message)}`;
    window.open(url, "_blank");
  };

  const callPhone = () => {
    window.location.href = `tel:${BUSINESS.phone}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
            : "bg-white border-b border-gray-100"
        }`}
      >
        {/* Color accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#16294D] via-[#E0A83B] to-[#16294D]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <img
                src="/soares-logo.png"
                alt="Soares Logo"
                className="h-11 w-11 sm:h-14 sm:w-14 rounded-full object-cover shadow-sm"
              />
              <div>
                <h1 className="text-base sm:text-xl font-bold text-[#16294D] leading-tight">Soares</h1>
                <p className="text-[11px] sm:text-xs text-[#586074] font-medium">
                  Despachante Credenciado 🚗
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                onClick={callPhone}
                variant="outline"
                size="sm"
                className="hidden sm:flex border-[#16294D] text-[#16294D] hover:bg-[#16294D]/5"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">Ligar</span>
              </Button>
              <Button
                onClick={openWhatsApp}
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#16294D] via-[#1a3a5c] to-[#0C1A33] text-white overflow-hidden pt-12 sm:pt-20 pb-16 sm:pb-32">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-80 h-80 bg-[#E0A83B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E0A83B] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Credential Badge */}
              <div className="inline-flex items-center gap-2 bg-[#E0A83B]/20 text-[#E0A83B] px-4 py-2.5 rounded-full text-sm font-bold mb-8 border border-[#E0A83B]/30">
                <Shield className="w-4 h-4" />
                SSP-07603 • Credenciado Oficialmente
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Seu veículo documentado com <span className="text-[#E0A83B]">agilidade</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
                Emplacamento, transferência, licenciamento, vistoria, liberação de apreendido e proteção veicular. Tudo resolvido em um só lugar.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  onClick={openWhatsApp}
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold text-base py-6 px-8 rounded-lg"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Pedir orçamento no WhatsApp
                </Button>
                <Button
                  onClick={callPhone}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 font-bold text-base py-6 px-8 rounded-lg"
                >
                  <Phone className="w-5 h-5" />
                  Ligar agora
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#E0A83B] text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <div>
                    <span className="font-bold text-lg">{BUSINESS.rating}</span>
                    <span className="text-gray-300 ml-2">({BUSINESS.reviews} avaliações no Google)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-100">
                  <Zap className="w-5 h-5 text-[#E0A83B] flex-shrink-0" />
                  <span className="font-semibold">Liberação de apreendidos em até 24 horas</span>
                </div>
              </div>
            </div>

            {/* Right Visual - Premium Hero Card */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative w-full max-w-sm">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E0A83B]/20 to-transparent rounded-3xl blur-2xl"></div>
                
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-[#E0A83B]/30 backdrop-blur-md shadow-2xl">
                  {/* Credential stamp */}
                  <div className="absolute -top-4 -right-4 bg-[#E0A83B] text-[#0C1A33] rounded-full w-24 h-24 flex items-center justify-center font-bold text-center text-sm border-4 border-[#16294D] shadow-lg">
                    <div>Credenciado<br/>SSP</div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-6">
                    {/* Icon composition */}
                    <div className="flex justify-center gap-4 py-4">
                      <div className="bg-[#E0A83B]/20 rounded-2xl p-4">
                        <Car className="w-8 h-8 text-[#E0A83B]" />
                      </div>
                      <div className="bg-[#E0A83B]/20 rounded-2xl p-4">
                        <FileText className="w-8 h-8 text-[#E0A83B]" />
                      </div>
                      <div className="bg-[#E0A83B]/20 rounded-2xl p-4">
                        <Shield className="w-8 h-8 text-[#E0A83B]" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-2">Documentação Segura</h3>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        Proteção completa e rápida para seu veículo em Itapecerica da Serra
                      </p>
                    </div>

                    {/* Trust metrics */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                      <div>
                        <div className="text-[#E0A83B] font-bold text-lg">24h</div>
                        <div className="text-xs text-gray-300">Liberação rápida</div>
                      </div>
                      <div>
                        <div className="text-[#E0A83B] font-bold text-lg">100%</div>
                        <div className="text-xs text-gray-300">Credenciado</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block text-[#E0A83B] font-bold text-sm mb-4 uppercase tracking-wider">Nossos Serviços</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#16294D] mb-6 leading-tight">
              Tudo do seu veículo, resolvido num lugar só
            </h2>
            <p className="text-lg text-[#586074] max-w-2xl">
              Do emplacamento à proteção veicular, cuidamos da papelada enquanto você fica livre da burocracia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Car className="w-8 h-8" />,
                title: "Emplacamento",
                description: "Emplacamento de veículos novos com toda documentação necessária.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Proteção Veicular",
                description: "Cobertura completa para seu veículo contra roubo e danos.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Liberação em 24h",
                description: "Liberação de veículos apreendidos em até 24 horas.",
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Transferência",
                description: "Transferência de propriedade com segurança e rapidez.",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Licenciamento",
                description: "Renovação de licenciamento e documentação em dia.",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Vistoria",
                description: "Vistoria veicular completa e certificada.",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="p-6 border border-[#E4E6EC] hover:shadow-xl hover:border-[#E0A83B] transition-all duration-300 bg-white group"
              >
                <div className="text-[#E0A83B] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#16294D] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#586074] leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-28 bg-gradient-to-br from-[#16294D] to-[#0C1A33] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E0A83B] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block text-[#E0A83B] font-bold text-sm mb-4 uppercase tracking-wider">Por que Soares</div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Credibilidade, agilidade e profissionalismo
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Somos o despachante que você pode confiar em Itapecerica da Serra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "13+",
                title: "Avaliações 5 ★",
                description: "Clientes satisfeitos que confiam em nosso trabalho",
              },
              {
                number: "24h",
                title: "Liberação Rápida",
                description: "Resolvemos apreensões em até 24 horas",
              },
              {
                number: "SSP",
                title: "Credenciado Oficial",
                description: "Despachante credenciado SSP-07603",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-8 rounded-2xl bg-white/5 border border-[#E0A83B]/20 hover:border-[#E0A83B]/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="text-5xl font-bold text-[#E0A83B] mb-3">
                  {item.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="inline-block text-[#E0A83B] font-bold text-sm mb-4 uppercase tracking-wider">Contato</div>
              <h2 className="text-4xl font-bold text-[#16294D] mb-10">
                Entre em contato
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-[#E0A83B] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#16294D] mb-2">Endereço</h3>
                    <p className="text-[#586074] leading-relaxed">{BUSINESS.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-[#E0A83B] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#16294D] mb-2">Telefone</h3>
                    <button
                      onClick={callPhone}
                      className="text-green-600 hover:text-green-700 font-bold text-lg"
                    >
                      ({BUSINESS.phone.slice(0, 2)}) {BUSINESS.phone.slice(2, 7)}-
                      {BUSINESS.phone.slice(7)}
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-[#E0A83B] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#16294D] mb-2">Horário de Atendimento</h3>
                    <p className="text-[#586074] leading-relaxed">{BUSINESS.hours}</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    onClick={openWhatsApp}
                    size="lg"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-base py-6 rounded-lg"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Enviar mensagem no WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl h-96 flex items-center justify-center hover:shadow-xl transition-shadow duration-300 cursor-pointer border-2 border-[#E0A83B]/20">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[#16294D] mx-auto mb-4" />
                    <p className="text-[#16294D] font-bold text-lg">Clique para abrir no Google Maps</p>
                    <p className="text-[#586074] text-sm mt-2">Itapecerica da Serra - SP</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#16294D] via-[#1a3a5c] to-[#0C1A33] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E0A83B] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Pronto para resolver sua documentação?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Fale com nossos especialistas agora mesmo. Receba seu orçamento sem compromisso em minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-base py-6 px-8 rounded-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Conversar no WhatsApp
            </Button>
            <Button
              onClick={callPhone}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-bold text-base py-6 px-8 rounded-lg"
            >
              <Phone className="w-5 h-5" />
              Ligar agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/soares-logo.png"
                  alt="Soares Logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-bold text-white text-lg">Soares</span>
              </div>
              <p className="text-sm leading-relaxed">
                Despachante credenciado SSP-07603 e proteção veicular em Itapecerica da Serra.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li>Emplacamento</li>
                <li>Transferência</li>
                <li>Licenciamento</li>
                <li>Proteção Veicular</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <p className="text-sm mb-2">
                <strong>Telefone:</strong> ({BUSINESS.phone.slice(0, 2)}) {BUSINESS.phone.slice(2, 7)}-
                {BUSINESS.phone.slice(7)}
              </p>
              <p className="text-sm">
                <strong>Horário:</strong> Seg-Sex 8h-18h, Sab 8h-12h
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>
              © {new Date().getFullYear()} Soares Despachante e Proteção Veicular. Todos os direitos
              reservados.
            </p>
            <p className="mt-2 text-gray-400">
              Credenciado SSP-07603 | Itapecerica da Serra - SP
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Mobile) */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-40 md:hidden bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
