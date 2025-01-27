import Navbar from "@/components/Navbar";
import ThemeTitle from "@/components/ThemeTitle";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { HacksphereLogo } from "@/components/HacksphereLogo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PrizeCard from "@/components/PrizeCard";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import "./faq/page.css";
import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

import phase1 from "@/public/schedulePage/phase.png"; // Replace with your image paths
import phase2 from "@/public/schedulePage/phase.png";
import phase3 from "@/public/schedulePage/phase.png";

const SocialMediaIcon = ({ Icon, href }) => (
  <a href={href} target="_blank">
    <Icon className="w-7 h-7 text-white transition ease-in-out delay-150 hover:scale-125 duration-300" />
  </a>
);

export default function Home() {
  const images = [
    "/footer/sdg/1.png",
    "/footer/sdg/2.png",
    "/footer/sdg/3.png",
    "/footer/sdg/4.png",
    "/footer/sdg/5.png",
    "/footer/sdg/6.png",
    "/footer/sdg/7.png",
    "/footer/sdg/8.png",
    "/footer/sdg/9.png",
    "/footer/sdg/10.png",
    "/footer/sdg/11.png",
    "/footer/sdg/12.png",
    "/footer/sdg/13.png",
    "/footer/sdg/14.png",
    "/footer/sdg/15.png",
    "/footer/sdg/16.png",
    "/footer/sdg/17.png",
  ];

  const themes = [
    {
      title: "Theme 1: Education and Empowerment",
      description: "Explore innovative solutions for education and empowerment.",
      problems: [
        {
          title: "T1PS01: Develop a Voice-Based Data Entry System for Accessibility",
          description: "Create a system enabling individuals with limited typing abilities or visual impairments to input data using natural language commands, promoting accessibility in digital interactions.",
          expectedOutcome: "Creation of a voice-based data entry system that enables individuals with limited typing abilities or visual impairments to interact with digital platforms using natural language. This system will promote digital inclusion, aiming to increase digital accessibility for 1 million users globally.",
          SDG: "SDG 10 - Reduced Inequalities",
          type: "Software"
        },
        {
          title: "T1PS02: Create a Microfinance Platform for Women Entrepreneurs",
          description: "Establish a blockchain-powered platform to provide women entrepreneurs in underserved communities with access to credit, financial literacy resources, and mentorship, empowering gender equality and economic growth.",
          expectedOutcome: "Establishment of a blockchain-powered microfinance platform providing women entrepreneurs in underserved communities with access to credit, financial literacy resources, and mentorship. This platform will empower gender equality and economic growth, with a target of supporting 100,000 women entrepreneurs and increasing their business success rates by 40%.",
          SDG: "SDG 5 - Gender Equality, SDG 8 - Decent Work and Economic Growth",
          type: "Software"
        },
        {
          title: "T1PS03: Digital Reputation Management",
          description: "Offer tools and services to monitor and manage online reputation across social media and search engine results, protecting brand integrity and promoting responsible digital citizenship.",
          expectedOutcome: "Development of tools and services for monitoring and managing online reputations across social media and search engines. This service will protect brand integrity and promote responsible digital citizenship, aiming to reduce negative online incidents and improve reputation scores for 5,000 individuals and businesses by 30%.",
          SDG: "SDG 16 - Peace, Justice, and Strong Institutions",
          type: "Software"
        }
      ]
    },
    {
      title: "Theme 2: Sustainable Agriculture and Environmental Conservation",
      description: "Explore innovative solutions for sustainable agriculture and environmental conservation.",
      problems: [
        {
          title: "T2PS01: Precision Agriculture for Sustainable Food Production",
          description: "Implement AI-driven solutions to optimize resource allocation, monitor crop health, and manage pests and diseases, promoting sustainable farming practices and enhancing food security.",
          expectedOutcome: "Implementation of AI-driven tools to optimize resource use, monitor crop health, and manage pests in real-time. This approach will enhance sustainable farming practices, increase crop yields by 15%, and contribute to food security and conservation goals.",
          SDG: "SDG 2 - Zero Hunger, SDG 15 - Life on Land",
          type: "Hardware and Software (any one of the solution is enough)"
        },
        {
          title: "T2PS02: NFT-Based Conservation Funding Platform",
          description: "Establish a platform using NFTs to fund environmental conservation projects, such as wildlife protection and habitat restoration, by tokenizing digital artworks and experiences.",
          expectedOutcome: "Establishment of a platform leveraging NFTs to raise funds for environmental conservation projects. By tokenizing digital artworks and experiences, this platform will generate substantial funding for wildlife protection and habitat restoration, targeting an annual increase of $10 million in conservation investments.",
          SDG: "SDG 14 - Life Below Water, SDG 15 - Life on Land",
          type: "Software"
        },
        {
          title: "T2PS03: Augmented Reality Farming Simulator",
          description: "Design an AR application to simulate farming scenarios, allowing farmers to test crop management strategies virtually before implementation, improving agricultural efficiency and productivity.",
          expectedOutcome: "Development of an AR application allowing farmers to simulate and test crop management strategies virtually. This tool will improve agricultural efficiency and productivity, reducing trial-and-error in actual farming and increasing crop yields by 10% through better planning and resource management.",
          SDG: "SDG 2 - Zero Hunger, SDG 9 - Industry, Innovation, and Infrastructure",
          type: "Software"
        }
      ]
    },
    {
      title: "Theme 3: Renewable Energy and solutions",
      description: "Explore innovative solutions for integrating renewable energy sources into smart grids to promote sustainable and efficient energy management.",
      problems: [
        {
              title: "T3PS01: Decentralized Renewable Energy Systems",
              description: "Develop a decentralized renewable energy system that integrates solar, wind, and other renewable sources into local energy grids. This system should optimize energy distribution and storage at the community level.",
              expectedOutcome: "Creation of a decentralized energy system that integrates various renewable sources, reducing dependency on centralized power plants and fossil fuels. This system will increase the adoption of renewable energy by 30% in targeted communities and decrease energy costs by 20%.",
              SDG: "SDG 7 - Affordable and Clean Energy, SDG 11 - Sustainable Cities and Communities",
              type: "Hardware and Software (any one of the solution is enough)",
        },
        {
          title: "T3PS02: AI-Driven Energy Management Platforms",
          description: "Create an AI-driven platform for smart energy management that monitors and optimizes energy usage in real-time for residential and commercial buildings. The platform should also predict and manage peak loads to enhance grid stability.",
          expectedOutcome: "Development of an AI-driven energy management platform that reduces energy consumption by 15% and enhances grid stability by predicting and managing peak loads. This platform will contribute to more efficient energy use and lower energy bills for users.",
          SDG: "SDG 7 - Affordable and Clean Energy, SDG 9 - Industry, Innovation, and Infrastructure",
          type: "Software",
        },
        {
          title: "T3PS03: Blockchain for Renewable Energy Trading",
          description: "Implement a blockchain-based platform for peer-to-peer renewable energy trading. This platform will allow individuals and businesses to buy, sell, and trade excess renewable energy directly, promoting decentralized energy markets.",
          expectedOutcome: "Establishment of a blockchain-based energy trading platform that facilitates peer-to-peer trading of renewable energy. This will increase the efficiency of energy markets, empower consumers, and potentially reduce energy waste by 25%.",
          SDG: "SDG 7 - Affordable and Clean Energy, SDG 12 - Responsible Consumption and Production",
          type: "Software",
        }
      ]
    }
  ];

  const timelineData = [
    {
      title: 'Ideation',
      duration: '20 Days',
      icon: 'https://cdn-icons-png.flaticon.com/512/932/932323.png', // replace with the actual path to the icon
      backgroundColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300',
    },
    {
      title: 'Submission',
      duration: 'Last Date 31/07/2024',
      icon: 'https://cdn-icons-png.flaticon.com/512/5360/5360973.png', // replace with the actual path to the icon
      backgroundColor: 'bg-gradient-to-r from-red-500 to-red-300',
    },
    {
      title: 'Evaluation',
      duration: '5 Days',
      icon: 'https://cdn-icons-png.flaticon.com/512/9139/9139399.png', // replace with the actual path to the icon
      backgroundColor: 'bg-gradient-to-r from-purple-500 to-purple-300',
    },
    {
      title: 'Finalist Announcement',
      duration: '05/08/2024',
      icon: 'https://cdn-icons-png.flaticon.com/512/7655/7655679.png', // replace with the actual path to the icon
      backgroundColor: 'bg-gradient-to-r from-pink-500 to-pink-300',
    },
    {
      title: '24 Hours Hackathon Offline',
      duration: '14/08/2024 [Offline]',
      icon: 'https://cdn-icons-png.flaticon.com/512/2621/2621230.png', // replace with the actual path to the icon
      backgroundColor: 'bg-gradient-to-r from-blue-500 to-blue-300',
    },
  ];

  const rules = [
  {
    title: "Rules!",
    description: "Here the most basic rules are mentioned. Go through the FAQ page to know more about SRCAS Hackathon' 24!",
    problems: [
      {
        title: "Team up (4 max) for best results."
      },
      {
        title: "Be original, but use open-source tools ethically."
      },
      {
        title: "Idea submission should be in the following PPT format [Click here to download]",
        link: "https://docs.google.com/presentation/d/1BB-OEiM0qulFVqKeKm4ekJ1VULCsgKFT/edit?usp=drivesdk&ouid=114882038934280859740&rtpof=true&sd=true"
      }
    ]
  }
];

  return (
   <div className="overflow-x-hidden">
      <Navbar />
    
      <div
        className="relative flex flex-col min-h-fit p-4 pt-20 md:pt-32 md:px-12 xl:px-20 md:py-4"
      >
        <div
          className="flex flex-wrap justify-between items-center 
            pt-16 gap-4 xl:pt-12 lg:gap-0"
        >
          <div className="flex flex-col items-start w-full lg:w-1/2">
            <ThemeTitle />
          </div>
          <div className="flex flex-col items-start gap-3 w-full lg:items-end lg:w-1/2">
            <p
              className="text-[#FFFFFF] text-[1.25rem] font-medium text-left 
              lg:text-right lg:text-[1.5rem]"
            >
              Join us at SRCAS, August 14
              <br />
              for an 2-4 in-person hackathon.
            </p>
            <Link href="devfolio.co" passHref>
              <Button
                size="sm"
                className="bg-[#FAF8ED] text-black text-[1.125rem] font-semibold p-6 
                rounded-none hover:bg-[#FAF8ED] hover:text-black hover:scale-105 
                transition-transform ease-in-out duration-300"
                style={{
                  boxShadow:
                    "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)",
                }}
              >
                Register Now!
                <ArrowTopRightIcon className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        <HacksphereLogo />

        <div className="flex items-center justify-between gap-4 my-12">
          <div className="flex items-stretch">
            <div
              className="flex justify-center items-center py-2 md:py-2.5 px-4 md:px-6"
              style={{ border: "1.275px solid #FAF8ED" }}
            >
              <div className="flex justify-center items-center gap-4">
                <img
                  src="/ProClubLogo.png"
                  alt="Programming Club Logo"
                  className="w-[4rem] h-[2.125rem]"
                />
                <p className="text-[#FAF8ED] text-[0.75rem] font-[600]">
                  Organised by
                  <br className="hidden md:block" /> Programming Club of
                  SRCAS
                </p>
              </div>
            </div>
            <div
              className="flex justify-center items-center py-2 md:py-2.5 px-4 md:px-6"
              style={{ border: "1.275px solid #FAF8ED" }}
            >
              <div className="flex justify-center items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Sri_Ramakrishna_College_of_Arts_and_Science.svg/1200px-Sri_Ramakrishna_College_of_Arts_and_Science.svg.png"
                  alt="SRCAS Logo"
                  className="w-[6rem] h-[3rem]"
                />
              </div>
            </div>
          </div>


          <div className="hidden lg:flex flex-col items-end gap-4">
            <p
              className="text-[#FAF8ED] text-[1rem] xl:text-[1.25rem] 
                font-semibold text-right"
            >
             We Contemplate to Create
            </p>
            <div className="flex gap-6">
              <SocialMediaIcon
                href="https://www.instagram.com/proclub_srcas/"
                Icon={InstagramLogoIcon}
              />
              <SocialMediaIcon
                href="https://www.linkedin.com/"
                Icon={LinkedInLogoIcon}
              />
              {/* <SocialMediaIcon
                href="https://discord.com"
                Icon={DiscordLogoIcon}
              /> */}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-4"> {/* Center the section and add padding */}
          <div className="flex gap-3.5 overflow-x-auto max-w-full"> {/* Handle horizontal overflow */}
            {Array.from({ length: 17 }, (_, i) => (
              <img
                key={i}
                src={`/sdgSquare/${i + 1}.png`}
                alt={`SDG ${i + 1}`}
                className="w-16 h-16 flex-shrink-0" // Fixed width and height
              />
            ))}
          </div>
        </div>

      </div>

      <div className="w-full flex flex-col bg-[#101010]">
        <div className="flex justify-center items-center gap-20 mt-8 bg-black">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Sri_Ramakrishna_College_of_Arts_and_Science.svg/1200px-Sri_Ramakrishna_College_of_Arts_and_Science.svg.png"
            alt="SRCAS Logo"
            className="w-[8rem] h-auto md:w-[16rem] md:h-auto"
          />
          <img
            src="/ProClubLogo.png"
            alt="Programming Club Logo"
            className="w-[7rem] h-auto md:w-[14rem] md:h-auto"
          />
        </div>
      </div>

      
      <div className="bg-black py-10">
        <h2 className="text-white text-center text-3xl md:text-4xl font-bold mb-10">Schedule</h2>
        <div className="flex flex-col md:flex-row items-center justify-around p-6 space-y-10 md:space-y-0 md:space-x-10">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center ${item.backgroundColor}`}>
                <img src={item.icon} alt={item.title} className="w-12 h-12" />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                <p className="text-white text-sm">{item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>




      <div
        className="bg-[#101010] flex flex-col min-h-screen
          px-4 md:px-10 lg:px-20 2xl:px-32 py-40"
      >
        <div className="w-full flex flex-col gap-10 md:gap-16">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#FFF] text-[2.25rem] font-normal md:text-[5rem]">
              Prizes
            </p>
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <p
                className="w-full lg:max-w-[100%] text-[#FFFFFF] font-[Inter] 
                  text-center font-normal text-[1.25rem] md:text-[1.5rem]"
              >
                Combine your skills and creativity to build something outstanding!
                Any prize money will be split equally among all participants. Each theme will have a first prize and a second prize!
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#FFF] text-[1.5rem] md:text-[2rem]">Each Theme</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <PrizeCard
                    amount="10k"
                    category="1st prize"
                    default_bg="radial-gradient(116.96% 115.94% at 9.81% 9.24%, #383300 0%, rgba(56, 50, 0, 0.17) 100%)"
                    hover_bg="radial-gradient(116.96% 115.94% at 9.81% 9.24%, #383300 0%, rgba(56, 50, 0, 0.17) 100%)"
                  />
                </div>
                <div className="flex-1">
                  <PrizeCard
                    amount="5k"
                    category="2nd prize"
                    default_bg="radial-gradient(148.8% 129.29% at 94.87% 3.94%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)"
                    hover_bg="radial-gradient(371.89% 134.33% at 3.21% 1.26%,rgba(255, 255, 255, 0.07) 0%,rgba(217, 217, 217, 0.00) 100%)"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



      

      {/* Theme Sections */}
      <div className="bg-[#101010] flex flex-col min-h-screen p-4 md:pb-16 lg:px-[10%] md:pt-24 pt-16">
        {themes.map((theme, index) => (
          <div key={index} className="mb-12">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
              {/* Left Half */}
              <div className="w-full md:w-2/5 flex flex-col gap-5">
                <div className="max-w-[448px] text-white text-3xl md:text-4xl font-medium leading-[44px]">
                  {theme.title}
                </div>
                <div className="max-w-[700px] text-[#C3C3C3] font-['Inter'] font-normal text-lg leading-7">
                  {theme.description}
                </div>
              </div>
              
              {/* Right Half */}
              <div className="w-full md:w-3/5 flex flex-col gap-5">
                {theme.problems.map((problem, problemIndex) => (
                  <div key={problemIndex} className="mb-8">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`item-${problemIndex}`} className="py-4 md:p-8">
                        <AccordionTrigger className="max-w-[592px] text-white text-2xl font-medium leading-7">
                          {problem.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="max-w-[592px] text-gray-200 text-lg font-normal font-['Inter'] leading-7">
                            <p><strong>Description:</strong> {problem.description}</p>
                            <p><strong>Expected Outcome:</strong> {problem.expectedOutcome}</p>
                            <p><strong>SDG:</strong> {problem.SDG}</p>
                            <p><strong>Type:</strong> {problem.type}</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>



      <div className="bg-[#101010] flex flex-col min-h-screen p-4 md:pb-16 lg:px-[10%] md:pt-24 pt-16">
        {rules.map((theme, index) => (
          <div key={index} className="mb-12">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
              {/* Left Half */}
              <div className="w-full md:w-2/5 flex flex-col gap-5">
                <div className="max-w-[448px] text-white text-3xl md:text-4xl font-medium leading-[44px]">
                  {theme.title}
                </div>
                <div className="max-w-[700px] text-[#C3C3C3] font-['Inter'] font-normal text-lg leading-7">
                  {theme.description}
                </div>
              </div>
              
              {/* Right Half */}
              <div className="w-full md:w-3/5 flex flex-col gap-5">
                {theme.problems.map((problem, problemIndex) => (
                  <div key={problemIndex} className="mb-8">
                    <div className="py-4 md:p-8">
                      <div className="max-w-[592px] text-white text-2xl font-medium leading-7 transition-transform duration-300 ease-in-out transform hover:scale-105">
                        {problem.link ? (
                          <a href={problem.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {problem.title}
                          </a>
                        ) : (
                          problem.title
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="relative bg-[#000000] w-full h-full flex flex-col justify-end pt-0">
        <div className="flex flex-col justify-between gap-20 md:flex-row px-6 md:px-8 xl:px-20 py-20">
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] 
            text-white font-normal md:leading-[8rem] lg:leading-[10rem] 
            tracking-tighter md:tracking-[-0.2rem]"
          >
            Code to
            <br /> Innovate!
          </p>
          <FooterAnimation />
        </div>
      </div>



      <Footer />
    </div>
  );
}
