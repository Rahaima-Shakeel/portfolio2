'use client';
import Image from "next/image";
import { RiArrowRightDownLine, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";
import React from 'react';
import "./globals.css";

const Page = () => {
  return (
    <div id="main">
      <div id="nav">
        <h3>0</h3>
        <h3>Menu</h3>
      </div>
      <div id="intro">
        <h1>
          Rahaima Shakeel <br />
          Biomedical Engineer
        </h1>
        <div id="place">
          <h3>(Sindh, Pakistan)</h3>
          <h4>
            <RiArrowRightDownLine /> Scroll down
          </h4>
        </div>
      </div>
      <div id="hero-image">
        <Image id="pic" src="IMG-20230517-WA0021.png" alt="Profile" />
      </div>
      <div id="about">
        <h2>
          Empowering Healthcare with a Foundation in Biomedical Engineering and a Future in AI Innovation.
        </h2>
        <div id="about-part2">
          <h3>(About Me)</h3>
        </div>
      </div>
      <div id="work">
        <div id="work1">
          <h3>(What I Do)</h3>
          <RiArrowRightDownLine />
        </div>
        <div id="work2">
          <div className="work2-part">
            <div className="elem">
              <h4>
                <b>1. Biomedical Engineering &amp; Healthcare Innovation</b>
              </h4>
              <p>
                With a strong foundation in Biomedical Engineering, I have gained hands-on experience at Isra Hospital and NICVD Hospital in Hyderabad, where I worked with biomedical systems and healthcare technologies. My current placement with the PEC GIT Program at IBET, LUMHS, allows me to apply this knowledge practically and collaborate on impactful projects.
              </p>
            </div>
            <div className="elem">
              <h4>2. Front-End Development &amp; Digital Solutions</h4>
              <p>
                Proficient in HTML, CSS, Tailwind CSS, Next.js, and TypeScript, I specialize in creating modern, responsive web designs that enhance user experience. These skills are an asset in integrating healthcare technology with digital solutions, enabling innovative approaches to healthcare accessibility and user engagement.
              </p>
            </div>
          </div>
          <div className="work2-part">
            <div className="elem">
              <h4>3. Creative &amp; Visual Design</h4>
              <p>
                With expertise in Canva, I create visually engaging content for both professional and academic purposes. This skill allows me to convey complex information clearly and creatively, which is especially valuable in designing educational materials, branding elements, and assessments.
              </p>
            </div>
            <div className="elem">
              <h4>4. AI &amp; Future-Oriented Healthcare</h4>
              <p>
               Currently pursuing a certification in Cloud Applied Generative AI Engineering, I am expanding my knowledge of AI to bring transformative solutions to healthcare. My focus is on integrating AI with biomedical innovations to drive progress in patient care and healthcare technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {[
            "Biomedical Engineering",
            "Microsoft Office",
            "Creative Design",
            "Instructional & Lecturing Skills",
            "Academic Assessment",
            "Project Management",
            "Strong Organizational Skills",
            "Web Development",
            "HTML",
            "Next.js",
            "TypeScript & JavaScript",
            "CSS & Tailwind CSS",
            "Canva",
            "Leadership Skills",
          ].map((skill) => (
            <div className="skill" key={skill}>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </div>
      <div id="contact">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>
            Email:{" "}
            <a href="mailto:rahaimasha2628@gmail.com?subject=Subject%20Here&body=Hello%2C%20I%20would%20like%20to%20discuss%20...">
              rahaimasha2628@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/rahaima-shakeel-1a5b552b8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <div id="icons">
            <a href="https://www.linkedin.com/in/rahaima-shakeel-1a5b552b8/" target="_blank" rel="noopener noreferrer">
              <RiLinkedinBoxFill />
            </a>
            <a href="mailto:rahaimasha2628@gmail.com">
              <RiMailLine />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
