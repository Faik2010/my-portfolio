# 🧙‍♂️ Faik Pirinçci - Portfolio Website

![Next.js](https://img.shields.io/badge/Next.js-14.2.10-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-r158-green?style=for-the-badge&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

Modern, interaktif ve 3D destekli portfolio website. Next.js, Three.js ve Tailwind CSS kullanılarak geliştirildi.

## ✨ Özellikler

- **🎭 3D Model Entegrasyonu** - Wizard hat, staff ve karakter modelleri
- **🎨 Modern UI/UX** - Tailwind CSS ile responsive tasarım
- **⚡ Performans** - Next.js 14 App Router optimizasyonu
- **🎵 Ses Efektleri** - Background müzik ve interaktif sesler
- **📱 Responsive** - Tüm cihazlarda mükemmel görünüm
- **🎯 Smooth Animations** - Framer Motion ile akıcı animasyonlar

## 🚀 Teknolojiler

### Frontend
- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### 3D & Graphics
- **Three.js** - 3D graphics library
- **GLTF Models** - 3D model format
- **React Three Fiber** - React Three.js integration

### Backend & Tools
- **Node.js** - Runtime environment
- **EmailJS** - Contact form handling
- **React Hook Form** - Form management
- **Sonner** - Toast notifications

## 🎮 3D Modeller

Bu projede kullanılan 3D modeller:

- **Wizard Hat** - Stylized wizard hat modeli
- **Wizard Staff** - Büyülü asa
- **Character Model** - Wizard karakteri

Tüm modeller Creative Commons Attribution lisansı altında kullanılmıştır.

## 📱 Sayfalar

### 🏠 Ana Sayfa
- Hero section with 3D model
- Interactive navigation
- Background music

### 👨‍💻 Hakkımda
- Personal introduction
- Skills matrix
- Technology stack
- Professional journey

### 📁 Projeler
- Featured projects showcase
- Technology tags
- Project descriptions

### 📞 İletişim
- Contact form
- Social media links
- Professional information

## 🛠️ Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/faik2010/nextjs-portfolio.git
cd nextjs-portfolio
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
```

3. **Development server'ı başlatın**
```bash
npm run dev
# veya
yarn dev
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## 🔧 Environment Variables

`.env.local` dosyası oluşturun:

```env
NEXT_PUBLIC_GITHUB_STATS_URL=https://github-readme-stats.vercel.app
NEXT_PUBLIC_GITHUB_STREAK_STATS_URL=https://github-readme-streak-stats.vercel.app
```

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── (sub pages)/       # Sayfa grupları
│   ├── globals.css        # Global styles
│   └── layout.js          # Root layout
├── components/             # React components
│   ├── models/            # 3D model components
│   ├── navigation/        # Navigation components
│   └── about/             # About page components
├── public/                 # Static assets
│   ├── models/            # 3D model files
│   ├── background/        # Background images
│   └── audio/             # Audio files
└── hooks/                  # Custom React hooks
```

## 🎨 Özelleştirme

### Renk Teması
Tailwind config'de accent rengini değiştirin:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      accent: '#FEFE5B', // Varsayılan sarı
    }
  }
}
```

### 3D Modeller
Yeni 3D modeller eklemek için:
1. GLTF dosyasını `public/models/` klasörüne ekleyin
2. `components/models/` altında yeni component oluşturun
3. Sayfada import edin

## 🚀 Deployment

### Vercel (Önerilen)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# dist/ klasörünü Netlify'a deploy edin
```

## 📊 Performans

- **Lighthouse Score**: 95+ 
- **Core Web Vitals**: ✅
- **Bundle Size**: Optimized
- **Loading Time**: < 2s

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 📞 İletişim

- **Website**: [Portfolio](https://faikpirincci.com)
- **GitHub**: [@faik2010](https://github.com/faik2010)
- **LinkedIn**: [Faik Pirinçci](https://www.linkedin.com/in/faikpirincci/)
- **Email**: [faikpirincci2010@gmail.com]

## 🙏 Teşekkürler

- [Three.js](https://threejs.org/) - 3D graphics library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library

---

⭐ Bu repository'yi beğendiyseniz yıldız vermeyi unutmayın! ⭐
