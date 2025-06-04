# 🏋️ Chico Fitness - Personal Trainer Website

Uma página web moderna e profissional para o personal trainer Chico, desenvolvida em Next.js com design escuro e tema em português de Portugal.

![Chico Fitness Website](./public/images/Chico-3.jpg)

## ✨ Características

- **Design Moderno**: Tema escuro com acentos verde-lima
- **Totalmente Responsivo**: Otimizado para todos os dispositivos
- **Localização Portuguesa**: Conteúdo em português de Portugal
- **Galeria Interativa**: Fotos e vídeos dos treinos
- **Testemunhos Dinâmicos**: Carrossel com histórias de sucesso
- **Formulário de Contacto**: Integração com email
- **SEO Otimizado**: Estrutura otimizada para motores de busca

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React Hooks** - Gestão de estado
- **Responsive Design** - Design adaptativo

## 📱 Secções do Website

### 🏠 Início (Hero)
- Imagem de destaque do Chico
- Call-to-action para agendar sessão
- Navegação suave entre secções

### 👨‍💼 Sobre
- Certificações profissionais
- Formação académica
- Experiência profissional
- Especialidades de treino
- Download do CV

### 🖼️ Galeria
- Fotos dos treinos
- Vídeos tutoriais
- Modal interativo
- Hover effects

### 💬 Testemunhos
- 5 testemunhos de clientes
- Carrossel navegável
- Resultados alcançados
- Interface intuitiva

### 📞 Contacto
- Formulário de contacto
- Informações de contacto
- Horários de funcionamento
- Localização em Porto

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18.18.0 ou superior
- npm ou yarn

### Passos de Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/[seu-username]/chico-fitness.git
cd chico-fitness
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
chico-fitness/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página principal
│   │   └── globals.css         # Estilos globais
├── public/
│   └── images/
│       ├── Chico-3.jpg         # Imagem hero
│       └── gallery-*.jpg       # Imagens da galeria
├── README.md
├── package.json
└── tailwind.config.js
```

## 🎨 Personalização

### Cores
- **Primária**: Verde-lima (`lime-400`)
- **Fundo**: Cinza escuro (`gray-900`)
- **Texto**: Branco e cinza claro
- **Acentos**: Gradientes verde

### Tipografia
- **Headings**: Font-weight bold/black
- **Corpo**: Font-weight normal/medium
- **Tamanhos**: Responsivos (text-xl a text-8xl)

### Componentes Interativos
- Hover effects nas imagens
- Transições suaves
- Animações de scroll
- Modal da galeria

## 📧 Configuração de Email

O botão "Agendar Sessão" abre automaticamente o cliente de email com:
- **Para**: chico@fitnesswithchico.com
- **Assunto**: "Consulta: Sessão de Treino com Chico"
- **Corpo**: Template pré-preenchido

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload da pasta .next para Netlify
```

### Outros Providers
O projeto é compatível com qualquer provider que suporte Next.js.

## 📱 Responsividade

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvido Por

**Filipe Simões**
- Website: [trainwithchico.com](https://trainwithchico.com)
- Email: chico@fitnesswithchico.com
- Localização: Porto, Portugal

## 🤝 Contribuições

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para suporte ou questões sobre o website:
- **Email**: chico@fitnesswithchico.com
- **Telefone**: +351 912 345 678
- **Horários**: Segunda-Sexta 06:00-22:00, Sábado-Domingo 08:00-18:00

---

⭐ **Se este projeto te ajudou, considera dar uma estrela no GitHub!**
