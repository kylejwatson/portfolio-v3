import Image from "next/image";
import styles from "./page.module.css";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";

import profilePic from "../../public/profile-pic.jpg";
import typescript from "../../public/icons/typescript.svg";
import angular from "../../public/icons/angular.svg";
import nodejs from "../../public/icons/nodejs.svg";
import reactjs from "../../public/icons/reactjs.svg";
import aws from "../../public/icons/aws.svg";
import sass from "../../public/icons/sass.svg";
import webpack from "../../public/icons/webpack.svg";
import npm from "../../public/icons/npm.svg";
import jest from "../../public/icons/jest.svg";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const poppinsBold = Poppins({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});
const poppinsSemiBold = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});
const poppinsLight = Poppins({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const NavBar = () => {
  return (
    <nav className={`${plusJakartaSans.className} ${styles.navBar}`}>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#art">Art</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default function Home() {
  const logoSize = 109.2;
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.content}>
        <div className={styles.profilePicBorder}>
          <Image
            src={profilePic}
            alt="Picture of the author (Kyle Watson)"
            className={styles.profilePic}
            width={130}
            height={130}
          />
        </div>
        <p className={`${styles.heroDescription} ${poppinsBold.className}`}>
          I write code and it is{" "}
          <span className={styles.fancyText}>absolutely gorgeous!</span>
        </p>
        <p className={`${poppinsLight.className} ${styles.description}`}>
          I am a full stack developer, passionate about clean and test-driven
          code. I have skills in TypeScript, Node.js, Angular, React, and AWS. I
          can implement UI designs, create REST APIs and develop CI/CD
          pipelines.
        </p>
        <section
          className={`${styles.callToAction} ${poppinsSemiBold.className}`}
        >
          <a href="#mailto">Get In Touch</a>
          <a href="#mailto">Download CV</a>
        </section>
        <label
          className={`${styles.experienceLabel} ${poppinsSemiBold.className}`}
        >
          Experience with
        </label>
        <section className={styles.logos}>
          <Image
            src={typescript}
            alt="The TypeScript logo"
            width={logoSize}
            height={logoSize}
          />
          <Image
            src={angular}
            alt="The Angular logo"
            width={logoSize}
            height={logoSize}
          />
          <Image
            src={nodejs}
            alt="The NodeJS logo"
            width={logoSize}
            height={logoSize}
          />
          <Image
            src={reactjs}
            alt="The ReactJS logo"
            width={logoSize}
            height={logoSize}
          />
          <Image
            src={aws}
            alt="The AWS (Amazon Web Service) logo"
            width={logoSize}
            height={logoSize}
          />
          <Image
            src={sass}
            alt="The Sass logo"
            width={logoSize}
            height={logoSize}
          />
          <Image
            src={npm}
            alt="The NPM logo"
            width={logoSize}
            height={logoSize}
          />
          <Image
            src={webpack}
            alt="The Webpack logo"
            width={logoSize}
            height={logoSize}
          />
          <Image
            src={jest}
            alt="The Jest logo"
            width={logoSize}
            height={logoSize}
          />
        </section>
      </div>
    </main>
  );
}
