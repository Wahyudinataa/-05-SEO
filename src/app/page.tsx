import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import image1 from "../../public/images/profile.jpg";

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman tentang saya.",
  openGraph: {
    title: "Tentang Saya",
    description: "Halaman tentang saya.",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Foto Profil */}
      <div className="mt-10">
        <Image
          src={image1}
          alt="Foto Profil"
          width={150}
          height={150}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Deskripsi Diri */}
      <h1 className="text-3xl font-bold mt-4">Wahyudinata</h1>
      <p className="mt-2 text-gray-600 text-center max-w-lg">
        I am a student of Informatics engineering with a focus on data.
        I am a motivated data enthusiast. I have developed data skills in
        query languages such as SQL, data analysis and data science through my studies at university.
        I am also active in campus organisations such as HMJ. I am a person who
        likes to explore new things and adapt easily to new social situations and environments.
      </p>

      {/* Social Media Links */}
      <div className="mt-4 flex gap-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          LinkedIn
        </a>
      </div>

      {/* Experience */}
      <div className="mt-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-3">Experience</h2>
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md rounded-lg p-4">
          <h3 className="font-bold">Assistant Product Operation Data Science</h3>
          <h3>Intership</h3>
          <p>dibimbing.id (2024)</p>    
          <ul className="mt-2 text-sm list-disc list-inside">
            <li>Create a Coding Exercise answer key for students in Bootcamp</li>
            <li>Create Prediction Final Project with Machine Learning for Product Development</li>
            <li>Handling B2C product development</li>
            <li>Develop and communicate a clear product vision and strategy aligned with company goals and market needs.</li>
            <li>Designed and evaluated product development processes, optimizing workflows and ensuring product success</li>
            <li>Prepared and managed comprehensive documentation related to product development, including requirements, specifications, and launch plans</li>
            <li>Coordinate Class Manager in each bootcamp class</li>
            <li>Researched and developed engaging content ideas for bootcamps and data science topics, driving student interest and program value</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md rounded-lg p-4 mt-4">
          <h3 className="font-bold">Master Chief of UI/UX and PM Bootcamp</h3>
          <h3>Intership</h3>
          <p>harisenin.com (2024)</p>    
          <ul className="mt-2 text-sm list-disc list-inside">
            <li>Moderate question-and-answer segments, ensuring smooth communication between participants and speakers.</li>
            <li>Motivate attendees to actively participate in discussions, exercises, and activities.</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mt-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md rounded-lg p-4">
          <h3 className="font-bold">Undergraduate of Informatic Engineering</h3>
          <p>Politeknik Negeri Malang</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["JavaScript", "React.js", "Next.js", "Python", "Machine Learning", "Tailwind CSS"].map((skill, index) => (
            <span key={index} className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Navigasi */}
      <nav className="mt-10 flex space-x-4">
        <Link href="/projects" className="text-blue-500 hover:underline">Proyek</Link>
        <Link href="/essays" className="text-blue-500 hover:underline">Esai</Link>
      </nav>

      {/* Footer */}
      <footer className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Wahyudinata. All rights reserved.
      </footer>
    </div>
  );
}
