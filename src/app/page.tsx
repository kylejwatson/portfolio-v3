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

import studioDE from "../../public/projects/digital-editor.png";
import jet from "../../public/projects/jet.png";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const poppinsExtraBold = Poppins({
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

export default function Home() {
  const logoSize = 109.2;
  return (
    <main className={styles.main}>
      <header className={`${poppinsLight.className} ${styles.header}`}>
        <h1 className={styles.title}>
          K.
          <mark className={styles.fancyText}>Watson</mark>
        </h1>
        <nav className={`${plusJakartaSans.className} ${styles.navBar}`}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#art">Art</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className={`${styles.intro} ${styles.content}`}>
        <div className={styles.profilePicBorder}>
          <Image
            src={profilePic}
            alt="Picture of the author (Kyle Watson)"
            className={styles.profilePic}
            width={130}
            height={130}
          />
        </div>
        <p
          className={`${styles.heroDescription} ${poppinsExtraBold.className}`}
        >
          I write code and it is{" "}
          <mark className={styles.fancyText}>absolutely gorgeous!</mark>
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
        <h2
          className={`${styles.experienceLabel} ${poppinsSemiBold.className}`}
        >
          Experience with
        </h2>
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
      </section>
      <section className={`${styles.detail} ${styles.content}`}>
        <h2
          className={`${poppinsExtraBold.className} ${styles.projectLabel} ${styles.fancyText}`}
        >
          Projects
        </h2>
        <div className={styles.projects}>
          <figure className={styles.project}>
            <Image
              src={studioDE}
              width={390}
              height={235}
              alt="Screenshot of the WoodWing Studio application"
            />
            <figcaption>
              <p className={poppinsSemiBold.className}>
                An advanced WYSIWYG article editor
              </p>
              <h3 className={poppinsExtraBold.className}>WoodWing Studio</h3>
            </figcaption>
          </figure>
          <figure className={styles.project}>
            <Image
              src={jet}
              width={390}
              height={235}
              alt="Screenshot of the SamsonVT Core application"
            />
            <figcaption>
              <p className={poppinsSemiBold.className}>
                An interactive, real-time 3D parts catalogue and work manual
              </p>
              <h3 className={poppinsExtraBold.className}>SamsonCORE</h3>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
