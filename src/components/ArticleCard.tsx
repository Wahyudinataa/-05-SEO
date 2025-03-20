"use client";
import { FaRegClock, FaTag } from "react-icons/fa";

interface ArticleProps {
  title: string;
  description: string;
  time: string;
  topic: string;
  link: string;
}

export default function ArticleCard({ title, description, time, topic, link }: ArticleProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-lg relative">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex items-center gap-2 mb-2">
        <FaRegClock className="text-lg" />
        <span className="text-sm">{time}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaTag className="text-lg" />
        <span className="text-sm">{topic}</span>
      </div>
      {/* Tombol "Lihat Selengkapnya" */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 text-white font-semibold hover:underline"
      >
        Lihat Selengkapnya →
      </a>
    </div>
  );
}
