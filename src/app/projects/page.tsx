import type { Metadata } from "next"
import Image, { StaticImageData } from 'next/image';
import { NapiProjectOptions } from "next/dist/build/swc/generated-native";
import ProjectCard from "@/components/ProjectCard";
import { link } from "fs";
import { defaultMetadata } from "@/utils/metadata";


const projects = [
  {
    title: "Insurance Price Prediction",
    description: "Insurance Price Prediction is a machine learning-based system that estimates insurance premiums using factors like age, BMI, smoking habits, and medical history. By training on historical data, the model identifies patterns to predict costs accurately. This helps insurance companies assess risk efficiently and automate pricing, ensuring fair and data-driven premium calculations",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Seaborn"],
    image: "/images/project1.png",
    link: "https://github.com/Wahyudinataa/Student_Success_Prediction_-Decision_Tree-",
  },
  {
    title: "Clustering of Nutritional Content of Beverages",
    description: "Clustering of Nutritional Content of Beverages is a machine learning project that groups beverages based on their nutritional values, such as sugar, calories, protein, and fat content. Using clustering algorithms, the system identifies patterns in the dataset, helping manufacturers and consumers categorize drinks based on health factors.",
    techStack: ["Python", "Scikit-Learn", "K-Means", "Matplotlib"],
    image: "/images/project2.png",
    link: "https://github.com/Wahyudinataa/Cancer-Detection-Python",
  },
];

export const metadata: Metadata = {
  title: 'Proyek',
  description: 'Halaman tentang proyek.',
  openGraph: {
    title: 'Proyek',
    description: 'Halaman tentang proyek.',
    images: 'https://example.com/default-image.jpg',
    url: 'https://example.com/projects',
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">PROYEK</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

// type ProjectsItemProps = {
//   name: string;
//   url: string;
//   urlDisplay: string;
//   imageSrc: StaticImageData;
// }

// function ProjectsItem({ name, url, urlDisplay, imageSrc }: ProjectsItemProps){
//   return (
//     <li>
//       <a href={url}>
//         <div className="max-w-sm rounded overflow-hidden shadow-lg">
//           <Image className="w-full" src={imageSrc} alt={name} />
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">{name}</div>
//           </div>
//           <div className="px-6 py-4">
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               {urlDisplay}</span>
//           </div>
//         </div>
//       </a>
//     </li>
//   );
// }


// export default function Projects() {
//     return (
//       <div className="mt-16 px-8">
//         <header>
//           <h1 className="font-bold text-4x1 text-zinc-800">Proyek Saya</h1>
//           <p className="text-base mt-6 text-zinc-600">Berikut adalah beberapa proyek yang telah saya kerjakan</p>
//         </header>
//         <div className="mt-16">
//           <h2 className="text-2xx1">Aplikasi</h2>
//           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 mt-8">
//             <ProjectsItem name="Aplikasi 1" url="https://example.com" urlDisplay="App Store" imageSrc={image1} />
//             <ProjectsItem name="Aplikasi 2" url="https://example.com" urlDisplay="App Store" imageSrc={image2} />
//           </ul>
//         </div>
//       </div>
//     );
// }
