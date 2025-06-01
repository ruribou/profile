import React from "react";

const SkillsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">スキル</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['フロントエンド開発', 'バックエンド開発', 'UI/UXデザイン'].map((skill) => (
          <div key={skill} className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold mb-4">{skill}</h3>
            <p className="text-gray-600">
              モダンな技術スタックを使用した開発経験があります。
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection; 