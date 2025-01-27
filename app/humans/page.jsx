import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HumansCard from "@/components/HumansCard";

// Organizers
import chairman from "@/public/Volunteers/tinobretty.jpg";
import assistantChairman from "@/public/Volunteers/johnsamuel.jpg";
import secretary from "@/public/Volunteers/secretary.jpg";
import viceChairman from "@/public/Volunteers/kanishka.jpg";
import Balaguru from "@/public/Volunteers/balaguru.webp";
import Sujithaa from "@/public/Volunteers/Sujithaa.webp";
import SriSaratthi from "@/public/Volunteers/Sri Saratthi.webp";
import harini from "@/public/Volunteers/harini.webp";
import Rishaba from "@/public/Volunteers/rishaba.webp";
import Vishnuraj from "@/public/Volunteers/VISHNURAJ R.webp";
import Aarthi from "@/public/Volunteers/aarthi.webp";
import Velan from "@/public/Volunteers/velan.jpeg";
import Nandita from "@/public/Volunteers/Nandita.jpg";
import Sarath from "@/public/Volunteers/sarath.webp";
import Gokul from "@/public/Volunteers/gokul.webp";
import Vikaas from "@/public/Volunteers/vikaas.webp";
import Poornila from "@/public/Volunteers/poornila.webp";
import nitya from "@/public/humansPage/nitya.jpg";

// Mentors
import principal from "@/public/Co-Ordinators/principalsrcas.jpeg";
import HODimg from "@/public/Co-Ordinators/sumathi.png";
import AssociateProf from "@/public/Co-Ordinators/praneesh.png";
import AssociateProf2 from "@/public/Co-Ordinators/manoj.png";

import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Humans | SRCAS Hackathon",
  description:
    "Meet the team behind SRCAS Hackathon'24! Discover the faces and roles of the passionate individuals who are working tirelessly to make the hackathon a grand success. Join us and be a part of the team!",
  keywords:
    "Humans, Team, Hackathon, SRCAS, SRCAS Hackathon, Coding, Programming, Tech",
  openGraph: {
    title: "Humans | SRCAS Hackathon",
    description:
      "Meet the team behind SRCAS Hackathon'24! Discover the faces and roles of the passionate individuals who are working tirelessly to make the hackathon a grand success. Join us and be a part of the team!",
    url: "https://hacksphere.vercel.app/humans",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "SRCAS Hackathon",
    type: "website",
    locale: "en_US",
  },
};

export default function Team() {
  const organizerData = [
    {
      name: "Tino Britty J",
      role: "Organizer",
      profilepic: chairman,
      linkedin: "https://www.linkedin.com/in/brittytino",
      instagram: "https://www.instagram.com/brittytino/",
      github: "https://github.com/",
    },    
    {
      name: "John Samuel",
      role: "Organizer",
      profilepic: assistantChairman,
      linkedin: "https://www.linkedin.com/in/samjohnoffl",
      instagram: "https://www.instagram.com/samjohn_offl",
      github: "https://github.com/",
    },
    {
      name: "Pravin B",
      role: "Organizer",
      profilepic: secretary,
      linkedin: "https://www.linkedin.com/in/pravinboopathi/",
      instagram: "https://www.instagram.com/bpravin._/",
      github: "https://github.com/",
    },
    {
      name: "Kanishka C",
      role: "Organizer",
      profilepic: viceChairman,
      linkedin: "https://www.linkedin.com/in/kaniskha-c-2124a5292/",
      instagram: "https://www.instagram.com/kaniskha_chandrasekar/",
      github: "https://github.com/",
    },
    {
      name: "Sarath P",
      role: "Web Developer",
      profilepic: Sarath,
      linkedin: "http://www.linkedin.com/in/thisisthesarath",
      instagram: "http://www.instagram.com/sarath.online",
      github: "https://www.github.com/thisisthesarath"
    },
    {
      name: "Aarthi S",
      role: "Organizer",
      profilepic: Aarthi,
      linkedin: "https://www.linkedin.com/in/aarthi-s-8914a9292?",
      instagram: "https://www.instagram.com/__.aarthi___?",
      github: "https://www.github.com"
    },
    {
      name: "Balaguru K",
      role: "Event Planner",
      profilepic: Balaguru,
      linkedin: "https://www.linkedin.com/in/balaguru-k-22157727a?",
      github: "https://www.github.com"
    },
    {
      name: "Gokul S",
      role: "Media Team",
      profilepic: Gokul,
      linkedin: "https://www.linkedin.com/in/gokul-saravanan-s-74bb9327b?",
      instagram: "https://www.instagram.com/lil_dodge5?",
      github: "https://www.github.com"
    },
    {
      name: "Harini",
      role: "Content Creator",
      profilepic: harini,
      linkedin: "https://www.linkedin.com/in/harini-pechimuthu-1b47972b5",
      instagram: "https://www.instagram.com/harinipechimuthu?",
      github: "https://www.github.com"
    },
    {
      name: "Nandita",
      role: "Content Creator",
      profilepic: Nandita,
      linkedin: "https://www.linkedin.com/in/nandita-s-a38948312?",
      github: "https://www.github.com"
    },
    {
      name: "Poornila I P",
      role: "Content Writer",
      profilepic: Poornila,
      linkedin: "https://www.linkedin.com/in/poornila-i-p-45b0b4292?",
      instagram: "https://www.instagram.com/click_.natural?",
      github: "https://www.github.com"
    },
    {
      name: "Rishaba R U",
      role: "Social Media Manager",
      profilepic: Rishaba,
      linkedin: "https://www.linkedin.com/in/rishaba0305204?",
      github: "https://www.github.com"
    },
    {
      name: "Saratthi",
      role: "Media Team",
      profilepic: SriSaratthi,
      linkedin: "https://www.linkedin.com/in/saratthi-080555166",
      github: "https://www.github.com"
    },
    {
      name: "Sujithaa J",
      role: "Promotions",
      profilepic: Sujithaa,
      linkedin: "https://www.linkedin.com/in/sujithaa-j-41643b292?",
      github: "https://www.github.com"
    },
    {
      name: "Velan J",
      role: "UI & UX",
      profilepic: Velan,
      linkedin: "https://www.linkedin.com/in/velan-jayashankar",
      instagram: "https://www.instagram.com/ig__velan__",
      github: "https://www.github.com"
    },
    {
      name: "Vikaas K S",
      role: "Organizer",
      profilepic: Vikaas,
      linkedin: "https://www.linkedin.com/in/vikaas-k-s-7644a9292?",
      instagram: "https://www.instagram.com/vikaas_0304?",
      github: "https://www.github.com"
    },
    {
      name: "Vishnuraj R",
      role: "Media Team",
      profilepic: Vishnuraj,
      linkedin: "https://www.linkedin.com/in/vishnuraj-r-a3229324b/",
      instagram: "https://www.instagram.com/vishnu._.rvr/",
      github: "https://www.github.com"
    },
    // {
    //   name: "Nitya",
    //   role: "Organizer",
    //   profilepic: nitya,
    //   linkedin: "https://www.linkedin.com/in/",
    //   instagram: "https://instagram.com/",
    //   github: "https://github.com/",
    // },
  ];

  const mentorData = [
    {
      name: "Dr.B.L.Shivakumar",
      role: "Chief Patron",
      profilepic: principal,
    },
    {
      name: "Dr.N.Sumathi",
      role: "Staff Coordinator",
      profilepic: HODimg,
    },
    {
      name: "Dr.M.Praneesh",
      role: "Staff Coordinator",
      profilepic: AssociateProf,
    },
    {
      name: "Mr.S.Manoj",
      role: "Staff Coordinator",
      profilepic: AssociateProf2,
    }
  ];

  return (
    <>
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          px-4 md:px-10 lg:px-20 xl:px-10 2xl:px-48 py-40"
      >
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center gap-1 md:gap-3">
            <div
              className="w-fit rounded-full 
                border border-[#D1CAC7] px-4 py-1 mb-3"
            >
              <p
                className="w-full text-[#FFFFFF] font-[Inter] 
                  text-center font-normal text-[1.25rem] tracking-[0.0625rem]"
              >
                THE TEAM
              </p>
            </div>
            <p
              className="text-[#FFFFFF] text-center text-[2.5rem] font-normal 
                md:text-[4rem] xl:text-[5rem] md:leading-[4.5rem] xl:leading-[5.25rem]"
            >
              Meet the humans of
              <br /> SRCAS Hackathon' 24
            </p>
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center text-white mt-4 md:mt-12"
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
              place-content-center place-items-center gap-10"
          >
            {organizerData.map((human, index) => (
              <HumansCard key={index} index={index} {...human} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black w-full h-full py-24 lg:py-40">
        <div
          className="flex flex-col justify-between gap-20 md:flex-row 
            px-4 md:px-8 xl:px-20 2xl:px-40"
        >
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] 
            text-white font-normal md:leading-[8rem] lg:leading-[10rem] 
            tracking-tighter md:tracking-[-0.2rem]"
          >
            Code to
            <br /> Innovate !
          </p>

          <FooterAnimation />
        </div>
      </div>

      <Footer />
    </>
  );
}
