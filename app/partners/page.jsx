import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TitleSponsorCard from "@/components/TitleSponsorCard";
import SponsorCard from "@/components/ui/cards";

import deloitte from "@/public/partnersPage/deloitte.png";
import tcs from "@/public/partnersPage/tcs.jpg";
import startuptn from "@/public/partnersPage/startuptn.jpg";
import viyen from "@/public/partnersPage/viyen.jpeg";
import devfolio from "@/public/partnersPage/devfolio.webp";


import FooterAnimation from "@/components/FooterAnimation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Partners | SRCAS Hackathon",
  description:
    "Explore the invaluable support from our esteemed sponsors and partners at SRCAS Hackathon – the premier hackathon hosted by SRCAS. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
  keywords:
    "Sponsors, Partners, Hackathon, SRCAS, Coding, Programming, Tech, Collaboration, Innovation, Community Support, Technology Events",
  openGraph: {
    title: "Partners | SRCAS Hackathon",
    description:
      "Explore the invaluable support from our esteemed sponsors and partners at SRCAS Hackathon – the premier hackathon hosted by SRCAS. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
    url: "https://hacksphere.vercel.app/partners",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "SRCAS Hackathon",
    type: "website",
    locale: "en_US",
  },
};

const normalSponsorsData = [
  {
    sponsor: "Deloitte.",
    category: "Knowledge Partner",
    sponsorimgsrc: deloitte,
  },
  {
    sponsor: "Viyen Biotech",
    category: "Knowledge Partner",
    sponsorimgsrc: viyen,
  },
  {
    sponsor: "TCS",
    category: "Knowledge Partner",
    sponsorimgsrc: tcs,
  },
  {
    sponsor: "StartUpTN",
    category: "Knowledge Partner",
    sponsorimgsrc: startuptn,
  },
];

const inKindSponsorsData = [
  // {
  //   sponsor: "SRCAS",
  //   category: "Community Sponsor",
  //   sponsorimgsrc: srcas,
  //   site: "https://srcas.ac.in",
  // },
];

const Partners = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col items-center min-h-screen 
          px-6 md:px-16 lg:px-20 2xl:px-32 py-40"
      >
        <div className="flex flex-col items-center gap-4 mb-12">
          <p className="text-[#FFFFFF] text-[2rem] font-normal md:text-[5rem]">
            Partners
          </p>
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <p
              className="w-full lg:max-w-[80%] text-[#FFFFFF] font-[Inter] 
                text-center font-normal text-[1.25rem] md:text-[1.5rem]"
            >
              We take pride in partnering with visionary organizations that share
               our enthusiasm for innovation and technology. These respected allies
                are instrumental in ensuring the success of our hackathon.
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="Sponsors"
          className="flex flex-col justify-center items-center text-white"
        >
          <TabsContent value="Sponsors">
            <div className="w-full flex flex-col items-center gap-8 xl:gap-12">
              <TitleSponsorCard />

              <div
                className="w-full xl:max-w-[95%] 2xl:max-w-[90%] grid grid-cols-1 
                  md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12"
              >
                {normalSponsorsData.map((sponsor, index) => {
                  return <SponsorCard key={index} index={index} {...sponsor} />;
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
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
    </div>
  );
};

export default Partners;
