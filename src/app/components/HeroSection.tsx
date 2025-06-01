import React from "react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Your Name</h1>
        <p className="text-xl mb-8">Web Developer & Designer</p>
        <p className="text-gray-300 mb-12">
          クリエイティブなソリューションを提供するWebデベロッパーです。
          ユーザー体験を重視した、美しく機能的なウェブサイトの制作を得意としています。
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          プロジェクトを見る
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection; 