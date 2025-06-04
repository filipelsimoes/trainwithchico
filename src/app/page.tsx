'use client'

import Image from 'next/image'
import { useState } from 'react'

interface GalleryItem {
  type: 'image' | 'video'
  src: string
  caption: string
  alt: string
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null)

  const testimonials = [
    {
      name: "Maria S.",
      quote: "O Chico transformou completamente a minha relação com o exercício. Em 6 meses perdi 15kg e ganhei uma confiança que nunca pensei ter!",
      result: "Perdeu 15kg em 6 meses"
    },
    {
      name: "João P.",
      quote: "Profissional excecional! O plano personalizado do Chico ajudou-me a ganhar massa muscular e a melhorar a minha postura. Recomendo vivamente!",
      result: "Ganhou 8kg de massa muscular"
    },
    {
      name: "Ana R.",
      quote: "Depois de uma lesão, pensava que nunca mais conseguiria treinar. O Chico criou um programa de reabilitação perfeito. Estou mais forte que nunca!",
      result: "Recuperação completa de lesão"
    },
    {
      name: "Carlos M.",
      quote: "O acompanhamento nutricional e os treinos do Chico mudaram a minha vida. Sinto-me com 20 anos outra vez!",
      result: "Melhorou condição física geral"
    },
    {
      name: "Sofia L.",
      quote: "Preparação para maratona impecável! O Chico ajudou-me a completar a minha primeira maratona em menos de 4 horas.",
      result: "Completou primeira maratona"
    }
  ]

  const galleryItems: GalleryItem[] = [
    {
      type: 'image' as const,
      src: '/images/gallery-1.jpg',
      caption: 'Treino funcional com cliente',
      alt: 'Chico a orientar cliente em exercício funcional'
    },
    {
      type: 'video' as const,
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      caption: 'Tutorial: Agachamento perfeito',
      alt: 'Vídeo tutorial de agachamento'
    },
    {
      type: 'image' as const,
      src: '/images/gallery-2.jpg',
      caption: 'Sessão de treino de força',
      alt: 'Chico a demonstrar exercício de força'
    },
    {
      type: 'video' as const,
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      caption: 'HIIT: 15 minutos intensos',
      alt: 'Vídeo de treino HIIT'
    },
    {
      type: 'image' as const,
      src: '/images/gallery-3.jpg',
      caption: 'Reabilitação e mobilidade',
      alt: 'Chico a ajudar cliente com exercícios de mobilidade'
    },
    {
      type: 'image' as const,
      src: '/images/gallery-4.jpg',
      caption: 'Treino ao ar livre',
      alt: 'Sessão de treino no exterior'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const openGallery = (item: GalleryItem) => {
    setSelectedMedia(item)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    setSelectedMedia(null)
  }

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Consulta: Sessão de Treino com Chico")
    const body = encodeURIComponent(`Olá Chico,

Estou interessado(a) em agendar uma sessão de treino pessoal consigo. Por favor, informe-me sobre a sua disponibilidade e detalhes de preços. Obrigado(a)!

– [O Seu Nome]
– [Número de Contacto Preferido]`)

    window.location.href = `mailto:chico@fitnesswithchico.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-lime-400">CHICO FITNESS</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#inicio" className="text-gray-300 hover:text-lime-400 px-3 py-2 text-sm font-medium transition-colors">Início</a>
                <a href="#sobre" className="text-gray-300 hover:text-lime-400 px-3 py-2 text-sm font-medium transition-colors">Sobre</a>
                <a href="#galeria" className="text-gray-300 hover:text-lime-400 px-3 py-2 text-sm font-medium transition-colors">Galeria</a>
                <a href="#testemunhos" className="text-gray-300 hover:text-lime-400 px-3 py-2 text-sm font-medium transition-colors">Testemunhos</a>
                <a href="#contacto" className="text-gray-300 hover:text-lime-400 px-3 py-2 text-sm font-medium transition-colors">Contacto</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Chico-3.jpg"
            alt="Chico - Personal Trainer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-wider">
            CHICO
          </h1>
          <p className="text-xl md:text-2xl text-lime-400 mb-4 font-semibold">
            Personal Trainer Certificado | Especialista em Força e Condicionamento
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Transformando Vidas Através do Fitness
          </p>

          <button
            onClick={handleEmailClick}
            className="bg-lime-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-lime-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-lime-400/25"
          >
            Agendar Sessão
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#sobre" className="text-lime-400 hover:text-lime-300 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="sobre" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sobre o Chico</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Com mais de 10 anos de experiência, ajudo clientes de todas as idades a alcançar os seus objetivos de fitness,
              seja perda de peso, ganho de massa muscular ou melhoria da condição física geral.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Certificações</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Especialista Certificado em Força e Condicionamento (CSCS)</li>
                    <li>• Certificado em Primeiros Socorros e RCP</li>
                    <li>• Especialista em Nutrição Desportiva</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Formação</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Licenciatura em Ciências do Desporto - Universidade do Porto</li>
                    <li>• Pós-graduação em Treino de Alta Performance</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Experiência</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Treinador Principal no Fitness Gym Porto (2018-2024)</li>
                    <li>• Coach de CrossFit certificado (2016-presente)</li>
                    <li>• Especialista em reabilitação e exercícios funcionais</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="/cv-chico-fitness.pdf"
                  target="_blank"
                  className="inline-flex items-center bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Descarregar CV Completo
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl p-8 text-gray-900">
                <h3 className="text-2xl font-bold mb-6">Especialidades</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">💪</span>
                    <span className="font-semibold">Treino Funcional</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🏋️</span>
                    <span className="font-semibold">Musculação</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🥗</span>
                    <span className="font-semibold">Nutrição</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🏃</span>
                    <span className="font-semibold">Cardio</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🧘</span>
                    <span className="font-semibold">Reabilitação</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">⚡</span>
                    <span className="font-semibold">HIIT</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-900/10 rounded-lg">
                  <p className="text-sm font-medium">
                    &ldquo;O meu objetivo é ajudar cada cliente a descobrir o seu potencial máximo,
                    criando programas personalizados que se adaptam ao seu estilo de vida.&rdquo;
                  </p>
                  <p className="text-xs mt-2 font-bold">- Chico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Galeria</h2>
            <p className="text-xl text-gray-300">Fotos e vídeos dos treinos e transformações</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-800"
                onClick={() => openGallery(item)}
              >
                <div className="aspect-square relative">
                  {item.type === 'image' ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-lime-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <p className="text-white font-semibold">Vídeo</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white font-medium">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {isGalleryOpen && selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeGallery}
              className="absolute -top-12 right-0 text-white hover:text-lime-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {selectedMedia.type === 'image' ? (
              <div className="relative aspect-video">
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="aspect-video">
                <iframe
                  src={selectedMedia.src}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
            )}

            <p className="text-white text-center mt-4 text-lg">{selectedMedia.caption}</p>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section id="testemunhos" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">O Que Dizem os Meus Clientes</h2>
            <p className="text-xl text-gray-300">Histórias de sucesso reais</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-700 rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>

                <blockquote className="text-xl md:text-2xl text-white mb-6 italic">
                  &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                </blockquote>

                <div className="text-lime-400 font-semibold text-lg mb-2">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentTestimonial].result}
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-lime-400 text-gray-900 p-3 rounded-full hover:bg-lime-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-lime-400 text-gray-900 p-3 rounded-full hover:bg-lime-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-lime-400' : 'bg-gray-600'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contacto</h2>
            <p className="text-xl text-gray-300">Pronto para começar a sua transformação?</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                    placeholder="O seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                    placeholder="+351 xxx xxx xxx"
                  />
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-300 mb-2">Quais são os seus objetivos de fitness?</label>
                  <textarea
                    id="goals"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                    placeholder="Conte-me sobre os seus objetivos, experiência anterior e o que espera alcançar..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-lime-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-lime-300 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Informações de Contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <p className="text-gray-300">chico@fitnesswithchico.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Telefone</h4>
                      <p className="text-gray-300">+351 912 345 678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Localização</h4>
                      <p className="text-gray-300">Porto, Portugal<br />Treinos ao domicílio disponíveis</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Horários</h4>
                      <p className="text-gray-300">
                        Segunda-Sexta: 06:00 - 22:00<br />
                        Sábado-Domingo: 08:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Área de Serviço</h4>
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Mapa do Google Maps aqui</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-lime-400 mb-2">CHICO FITNESS</h3>
              <p className="text-gray-400">Transformando vidas através do fitness</p>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.612-.123-.837-.348-.225-.225-.348-.522-.348-.837s.123-.612.348-.837c.225-.225.522-.348.837-.348s.612.123.837.348c.225.225.348.522.348.837s-.123.612-.348.837c-.225.225-.522.348-.837.348z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 Chico Fitness. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
