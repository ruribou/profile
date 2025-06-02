import { Github, X, Twitter, MapPin, Briefcase } from "lucide-react";

const AboutSection = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-800 text-white">
    <div className="container mx-auto px-4 py-16 text-center space-y-6">
      <img
        src="/images/IMG_8792.PNG"
        alt="Ryota Asai"
        className="w-32 h-32 rounded-full mx-auto shadow-lg object-cover"
      />
      <div>
        <h1 className="text-5xl font-bold mb-4">Ryota Asai</h1>
        <div className="flex items-center justify-center space-x-8 text-xl text-blue-100 py-2 mb-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span>神奈川県相模原市</span>
          </div>
          <div className="flex items-center space-x-2">
            <Briefcase className="w-5 h-5" />
            <span>大学生エンジニア</span>
          </div>
        </div>
      </div>
      <p className="max-w-2xl mx-auto text-lg text-blue-200">
        埼玉の山奥で学生エンジニアをしています。<br />
        エンジニアとしては、Ruby on Railsを中心にバックエンド開発をしています。<br />
        CA Tech Loungeなどでも活動中です。<br />
        他にも、技術コミュニティの運営、NPO法人の運営もしています。
      </p>
      <div className="flex justify-center space-x-6 pt-4">
        <a 
          href="https://x.com/ryosan177"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-full transition duration-300"
        >
          <X className="w-5 h-5" />
          <span>@ryosan177</span>
        </a>
        <a
          href="https://github.com/ruribou"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-full transition duration-300"
        >
          <Github className="w-5 h-5" />
          <span>@ruribou</span>
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection; 