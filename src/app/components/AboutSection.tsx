import { FiMapPin, FiBriefcase } from "react-icons/fi";
import { SiGithub, SiX } from "react-icons/si";

const AboutSection = () => (
  <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 via-blue-700 to-blue-200 text-white">
    <div className="container mx-auto px-4 py-16 text-center space-y-6">
      <img
        src="/images/IMG_8792.PNG"
        alt="Ryota Asai"
        className="w-32 h-32 rounded-full mx-auto shadow-lg object-cover"
      />
      <div>
        <h1 className="text-5xl font-bold mb-4">りょうさん</h1>
        <div className="flex items-center justify-center space-x-8 text-xl text-blue-100 py-2 mb-4">
          <div className="flex items-center space-x-2">
            <FiMapPin className="w-5 h-5" />
            <span className="text-base sm:text-xl font-bold text-white">神奈川県相模原市</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiBriefcase className="w-5 h-5" />
            <span className="text-base sm:text-xl font-bold text-white">学生エンジニア</span>
          </div>
        </div>
      </div>
      <p className="mx-auto text-sm sm:text-lg text-white max-w-xs sm:max-w-2xl">
        埼玉の山奥で大学生をしています。Rubyistです。<span className="hidden sm:inline"><br/></span>
        他にも、技術コミュニティの運営、NPO法人の運営もしています。
      </p>
      <p className="mx-auto text-sm sm:text-lg text-white max-w-xs sm:max-w-2xl">
        趣味はアイドルマスター、写真撮影、プロ野球観戦です。<span className="hidden sm:inline"><br/></span>
        新しい技術を学ぶことが好きです。
      </p>
    </div>
  </section>
);

export default AboutSection; 