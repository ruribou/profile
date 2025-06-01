import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
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

      {/* Skills Section */}
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

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">プロジェクト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                <div className="relative h-48 bg-gray-200">
                  {/* Add project image here */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">プロジェクト {project}</h3>
                  <p className="text-gray-600 mb-4">
                    プロジェクトの説明文をここに記載します。
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
