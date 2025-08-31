"use client";

import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        {/* Main Introduction */}
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          My journey in web development is fueled by a versatile stack of modern technologies,
           with JavaScript and TypeScript forming the foundation of my craft.
            I wield frameworks like React.js, Next.js, and Angular with precision,
             building seamless and scalable applications that connect users across the digital world.
              With the power of .NET and Nodejs backends,
               I create solutions that are not only fast and secure but also visually engaging.
                Passionate about continuous learning,
                        I&apos;m always exploring new tools and approaches to push the boundaries of the web.
          </p>
        </ItemLayout>

        {/* Stats */}
        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        {/* Technology Stack */}
        <ItemLayout className={"col-span-full"}>
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-accent">
            Technology Stack
          </h3>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=angular,react,js,ts,aws,azure,nodejs,net,cs,nestjs,nextjs,kotlin,vercel,vite,github,postgresql,mongodb,rabbitmq,tailwind,threejs`}
            alt="Technology Stack"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;