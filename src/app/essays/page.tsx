import type { Metadata } from "next"
import React from "react";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: 'Essays',
  description: 'Halaman tentang esai.',
  openGraph:{
    title:'Essays',
    description: 'Halaman tentang esai.',
  },
};


const articles = [
  {
    title: "The Rise of AI in Everyday Life",
    description:
      "AI is no longer a futuristic concept—it is now deeply integrated into our daily lives, enhancing industries such as healthcare, finance, and entertainment.",
    time: "2 hours ago",
    topic: "Artificial Intelligence",
    link: "#",
  },
  {
    title: "Cybersecurity Threats in 2024",
    description:
      "Cyber threats are evolving rapidly, with AI-driven phishing attacks and deepfake scams becoming more sophisticated than ever.",
    time: "1 hour ago",
    topic: "Cybersecurity",
    link: "#",
  },
  {
    title: "Blockchain Beyond Cryptocurrency",
    description:
      "Blockchain technology is revolutionizing industries beyond finance, including supply chain management, healthcare, and governance.",
    time: "3 hours ago",
    topic: "Blockchain",
    link: "#",
  },
  {
    title: "The Future of Quantum Computing",
    description:
      "Quantum computing is pushing the boundaries of what is computationally possible, promising breakthroughs in fields like AI and cryptography.",
    time: "30 minutes ago",
    topic: "Quantum Computing",
    link: "#",
  },
];

export default function ArticlesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
}