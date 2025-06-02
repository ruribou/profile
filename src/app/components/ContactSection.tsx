import React from "react";
import { Mail, Twitter, Github, MessageSquare, ExternalLink } from "lucide-react";

const contactData = [
  {
    platform: "Email",
    handle: "ruribou@hotmail.com",
    url: "mailto:ruribou@hotmail.com",
    icon: <Mail className="w-6 h-6" />,
    description: "お仕事のご依頼やご相談はこちら",
    color: "hover:bg-red-50 hover:border-red-200"
  },
  {
    platform: "Twitter",
    handle: "@ryosan177",
    url: "https://x.com/ryosan177",
    icon: <Twitter className="w-6 h-6" />,
    description: "日々の学習や技術について発信",
    color: "hover:bg-blue-50 hover:border-blue-200"
  },
  {
    platform: "GitHub",
    handle: "@ruribou",
    url: "https://github.com/ruribou",
    icon: <Github className="w-6 h-6" />,
    description: "プロジェクトやコードをご覧いただけます",
    color: "hover:bg-gray-50 hover:border-gray-200"
  }
];

const ContactSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Contact</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        お仕事のご相談や技術についての質問など、お気軽にお声がけください。<br />
        レスポンシブで迅速にお返事いたします。
      </p>
      <div className="max-w-2xl mx-auto">
        <div className="grid gap-6">
          {contactData.map((contact) => (
            <a
              key={contact.platform}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-6 border border-gray-200 rounded-lg transition duration-300 ${contact.color}`}
            >
              <div className="flex-shrink-0 mr-4">
                {contact.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">{contact.platform}</h3>
                  <ExternalLink className="w-4 h-4 ml-2 text-gray-400" />
                </div>
                <p className="text-blue-600 font-medium mb-1">{contact.handle}</p>
                <p className="text-sm text-gray-600">{contact.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection; 