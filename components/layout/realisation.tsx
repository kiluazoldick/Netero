import Image from "next/image";
import { ExternalLink } from "lucide-react";

const RealisationList = [
  {
    title: "BookShelf",
    category: "E-commerce",
    image: "/bookshlef.png",
  },
  {
    title: "Stratégie Sociaux",
    category: "Marketing Digital",
    image: "/images/3.jpg",
  },
  {
    title: "SynergERP",
    category: "Automatisation",
    image: "/business-management-software-interface.jpg",
  },
];


export default function Realisation() {
  return (
    <section className=" pb-6 px-6 font-sans">
      <div className=" mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {RealisationList.map((project, index) => (
            <div
              key={index}
              className=" px-2 py-2 border border-[#FFD700] bg-white dark:bg-[#010101] rounded-xl shadow-md  rounded-t-xl cursor-pointer"
            >
              <div className="relative h-50 ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover  rounded-t-xl cursor-pointer"
                />

                <span className="cursor-pointer absolute top-4 right-4 bg-[#FFD700] dark:text-black text-white text-xs font-semibold px-4 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 dark:text-white">
                  {project.title}
                </h3>

                <a
                  href="#"
                  className="text-[#FFD700] font-bold text-[14px] flex items-center gap-3"
                >
                  Voir le projet <ExternalLink /> 
                </a>
              </div>
            </div>
          ))}
        </div>  
      </div>
    </section>
  );
}