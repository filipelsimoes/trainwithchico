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
      src: '/images/1.jpeg',
      caption: 'Treino funcional com cliente',
      alt: 'Chico a orientar cliente em exercício funcional'
    },
    {
      type: 'image' as const,
      src: '/images/2.jpeg',
      caption: 'Sessão de treino de força',
      alt: 'Chico a demonstrar exercício de força'
    },
    {
      type: 'image' as const,
      src: '/images/3.jpeg',
      caption: 'Reabilitação e mobilidade',
      alt: 'Chico a ajudar cliente com exercícios de mobilidade'
    },
    {
      type: 'image' as const,
      src: '/images/4.jpeg',
      caption: 'Treino ao ar livre',
      alt: 'Sessão de treino no exterior'
    },
    {
      type: 'image' as const,
      src: '/images/5.jpeg',
      caption: 'CrossFit training session',
      alt: 'Chico durante sessão de CrossFit'
    },
    {
      type: 'image' as const,
      src: '/images/6.jpeg',
      caption: 'Treino personalizado',
      alt: 'Sessão de treino personalizado'
    },
    {
      type: 'image' as const,
      src: '/images/7.jpeg',
      caption: 'Exercícios de mobilidade',
      alt: 'Chico a demonstrar exercícios de mobilidade'
    },
    {
      type: 'image' as const,
      src: '/images/8.jpeg',
      caption: 'Treino funcional avançado',
      alt: 'Exercícios funcionais avançados'
    },
    {
      type: 'image' as const,
      src: '/images/9.jpeg',
      caption: 'Preparação física',
      alt: 'Sessão de preparação física'
    },
    {
      type: 'image' as const,
      src: '/images/10.jpeg',
      caption: 'Treino de resistência',
      alt: 'Exercícios de resistência e força'
    },
    {
      type: 'image' as const,
      src: '/images/11.jpeg',
      caption: 'Técnicas de reabilitação',
      alt: 'Chico aplicando técnicas de reabilitação'
    },
    {
      type: 'image' as const,
      src: '/images/12.jpeg',
      caption: 'Sessão de grupo',
      alt: 'Treino em grupo orientado pelo Chico'
    },
    {
      type: 'video' as const,
      src: '/images/13.mp4',
      caption: 'Tutorial: Técnica de exercício',
      alt: 'Vídeo tutorial de técnica de exercício'
    },
    {
      type: 'video' as const,
      src: '/images/14.mp4',
      caption: 'Demonstração de treino funcional',
      alt: 'Vídeo de demonstração de treino funcional'
    },
    {
      type: 'video' as const,
      src: '/images/15.mp4',
      caption: 'Sessão de treino completa',
      alt: 'Vídeo de sessão de treino completa'
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

    window.location.href = `mailto:francisco.lmplopes@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-sky-400">Train with Chico</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#inicio" className="text-gray-300 hover:text-sky-400 px-3 py-2 text-sm font-medium transition-colors">Início</a>
                <a href="#sobre" className="text-gray-300 hover:text-sky-400 px-3 py-2 text-sm font-medium transition-colors">Sobre</a>
                <a href="#galeria" className="text-gray-300 hover:text-sky-400 px-3 py-2 text-sm font-medium transition-colors">Galeria</a>
                <a href="#testemunhos" className="text-gray-300 hover:text-sky-400 px-3 py-2 text-sm font-medium transition-colors">Testemunhos</a>
                <a href="#contacto" className="text-gray-300 hover:text-sky-400 px-3 py-2 text-sm font-medium transition-colors">Contacto</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider">
                  CHICO
                </h1>
                <p className="text-xl md:text-2xl text-sky-400 mb-4 font-semibold">
                  Personal Trainer Certificado
                </p>
                <p className="text-lg text-sky-300 mb-2">
                  Licenciado em Ciências do Desporto e Atividade Física
                </p>
                <p className="text-lg text-gray-300 mb-8 max-w-lg">
                  Transformando Vidas Através do Fitness. Especialista em treino funcional,
                  reabilitação e CrossFit, com formação académica sólida e certificações
                  internacionais para ajudar-te a alcançar os teus objetivos.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleEmailClick}
                  className="bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-sky-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/25"
                >
                  Agendar Sessão
                </button>
                <a
                  href="#sobre"
                  className="border-2 border-sky-500 text-sky-400 px-8 py-4 rounded-lg text-lg font-bold hover:bg-sky-500 hover:text-white transition-all duration-300 text-center"
                >
                  Saber Mais
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-400">7+</div>
                  <div className="text-sm text-gray-400">Anos Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-400">5+</div>
                  <div className="text-sm text-gray-400">Certificações</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-400">100%</div>
                  <div className="text-sm text-gray-400">Dedicação</div>
                </div>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="relative">
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Chico-3.jpg"
                  alt="Chico - Personal Trainer"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-sky-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">CrossFit</div>
                <div className="text-sm">LV1 Trainer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="sobre" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sobre o Chico</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Licenciado em Ciências do Desporto e da Atividade Física pela Universidade Europeia de Lisboa,
              com especialização em exercício e saúde. Certificado em CrossFit, TRX, reabilitação e treino funcional,
              ajudo clientes de todas as idades a alcançar os seus objetivos de fitness de forma segura e eficaz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Certificações</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• CrossFit Oficial - CrossFit LV1 Trainer (Fevereiro 2017)</li>
                    <li>• DNS Exercise Course Part I - Rehabilitation Prague School (Dezembro 2018)</li>
                    <li>• TRX-STC Curso Suspension Training - GTF formação (Março 2019)</li>
                    <li>• G-FUNCTIONAL® SPECIALIST – ONLINE - GTF formação (Agosto-Novembro 2020)</li>
                    <li>• Foundation Course - Altis (Março 2021 até à atualidade)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Formação</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Licenciatura em Ciências do Desporto e da Atividade Física no ramo de Exercício e Saúde - Universidade Europeia, Lisboa (Setembro 2017 a Julho 2020)</li>
                    <li>• Curso Profissional de Apoio Técnico à Gestão Desportiva - Escola Maria Amália Vaz de Carvalho (ESMAVC), Lisboa (Setembro 2013 a Julho 2016)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Experiência</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Seminários de formação em &ldquo;Treino Desportivo e Alto Rendimento&rdquo; e &ldquo;Desporto e a Deficiência: da diferença à inclusão&rdquo; - ESMAVC (Abril e Março 2014)</li>
                    <li>• CrossFit LV1 Trainer certificado (2017-presente)</li>
                    <li>• Especialista em exercícios funcionais e reabilitação</li>
                    <li>• Formação contínua em biomecânica, anatomia e patologias da coluna</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="/cv-chico-fitness.pdf"
                  target="_blank"
                  className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Descarregar CV Completo
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-8 text-white">
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
                    <span className="text-2xl">🧘</span>
                    <span className="font-semibold">Reabilitação</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🏃</span>
                    <span className="font-semibold">Treino Personalizado</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">⚡</span>
                    <span className="font-semibold">CrossFit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🎯</span>
                    <span className="font-semibold">TRX Suspension</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">Competências Técnicas</h4>
                  <p className="text-sm mb-2">
                    • Fisiologia do Exercício (Biomecânica, Anatomia, Patologias da coluna)<br />
                    • Treino personalizado para populações especiais (idosos, diabetes, doenças cardiovasculares)<br />
                    • Preparação física de atletas e gestão desportiva<br />
                    • Técnicas de marketing e comunicação no fitness
                  </p>
                </div>

                <div className="mt-6 p-4 bg-white/10 rounded-lg">
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
      <section id="galeria" className="py-20 bg-black">
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
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center relative overflow-hidden">
                      <video
                        src={item.src}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        muted
                        loop
                        playsInline
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="text-center">
                          <svg className="w-16 h-16 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                          <p className="text-white font-semibold text-sm">Vídeo</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
              className="absolute -top-12 right-0 text-white hover:text-sky-400 transition-colors"
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
                <video
                  src={selectedMedia.src}
                  className="w-full h-full rounded-lg"
                  controls
                  autoPlay
                  muted
                  loop
                />
              </div>
            )}

            <p className="text-white text-center mt-4 text-lg">{selectedMedia.caption}</p>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section id="testemunhos" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">O Que Dizem os Meus Clientes</h2>
            <p className="text-xl text-gray-300">Histórias de sucesso reais</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>

                <blockquote className="text-xl md:text-2xl text-white mb-6 italic">
                  &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                </blockquote>

                <div className="text-sky-400 font-semibold text-lg mb-2">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentTestimonial].result}
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-sky-500 text-white p-3 rounded-full hover:bg-sky-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-sky-500 text-white p-3 rounded-full hover:bg-sky-400 transition-colors"
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
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-sky-400' : 'bg-gray-600'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contacto</h2>
            <p className="text-xl text-gray-300">Pronto para começar a sua transformação?</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Agendar Sessão de Treino</h3>
                <p className="text-gray-300 mb-8 max-w-md">
                  Entre em contacto comigo para agendar a sua primeira sessão de treino personalizado.
                  Vou responder o mais rapidamente possível!
                </p>
                <button
                  onClick={handleEmailClick}
                  className="bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-sky-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/25"
                >
                  Enviar Email para Agendar
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Informações de Contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <p className="text-gray-300">francisco.lmplopes@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Telefone</h4>
                      <p className="text-gray-300">+351 912 345 678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Localização</h4>
                      <p className="text-gray-300">Lisboa, Portugal<br /></p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
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

              {/* <div className="bg-gray-900 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Área de Serviço</h4>
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Mapa do Google Maps aqui</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-sky-400 mb-2">Train with Chico</h3>
              <p className="text-gray-400">Transformando vidas através do fitness</p>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.612-.123-.837-.348-.225-.225-.348-.522-.348-.837s.123-.612.348-.837c.225-.225.522-.348.837-.348s.612.123.837.348c.225.225.348.522.348.837s-.123.612-.348.837c-.225.225-.522.348-.837.348z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
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


