"use client";
import Image from "next/image";
import { useState } from "react";

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, techStack, image, link }: ProjectProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg rounded-lg overflow-hidden p-6 transition-all duration-300">
      {/* Bagian Gambar */}
      {image ? (
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover rounded-md"
        />
      ) : null}

      {/* Judul */}
      <h2 className="text-2xl font-semibold mt-4">{title}</h2>
      <p className="mt-2">{description}</p>

      {/* Bagian Teknologi */}
      <div className="mt-3 flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="bg-white text-blue-600 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-blue-100 transition">
              {tech}
            </span>
            {hovered === index && (
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow-lg">
                {`Info tentang ${tech}`}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tombol Lihat Detail */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-medium block text-right mt-4 transition duration-300 hover:underline hover:text-gray-200"
      >
        Lihat Detail →
      </a>
    </div>
  );
}
