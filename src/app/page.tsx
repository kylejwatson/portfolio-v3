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

import devoteam from "../../public/logos/devoteam.svg";
import woodwing from "../../public/logos/woodwing.svg";
import samsonvt from "../../public/logos/samsonvt.svg";

import email from "../../public/icons/email.svg";
import github from "../../public/logos/github.svg";
import linkedin from "../../public/logos/linkedin.svg";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const poppinsExtraBold = Poppins({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});
const poppinsBold = Poppins({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const poppinsSemiBold = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});
const poppinsRegular = Poppins({
  weight: "400",
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
    <div className={styles.main}>
      <header className={`${poppinsLight.className} ${styles.header}`}>
        <h1 className={styles.title}>
          K.
          <span className={styles.fancyText}>Watson</span>
        </h1>
        <nav className={`${plusJakartaSans.className} ${styles.navBar}`}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main id="about">
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
            <em className={styles.fancyText}>absolutely gorgeous!</em>
          </p>
          <p className={`${poppinsLight.className} ${styles.description}`}>
            I am a full stack developer, passionate about clean and test-driven
            code. I have skills in TypeScript, Node.js, Angular, React, and AWS.
            I can implement UI designs, create REST APIs and develop CI/CD
            pipelines.
          </p>
          <article
            className={`${styles.callToAction} ${poppinsSemiBold.className}`}
          >
            <a href="mailto:mail@watsonk.me">Get In Touch</a>
            <a href="/files/cvpdf.pdf" download>
              Download CV
            </a>
          </article>
          <h2
            className={`${styles.experienceLabel} ${poppinsSemiBold.className}`}
          >
            Experience with
          </h2>
          <div className={styles.logos}>
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
          </div>
        </section>
        <section className={`${styles.detail} ${styles.content}`}>
          <h2
            className={`${poppinsExtraBold.className} ${styles.subheading} ${styles.fancyText}`}
            id="projects"
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
          <h2
            className={`${poppinsExtraBold.className} ${styles.subheading} ${styles.greyFancyText}`}
            id="experience"
          >
            Experience
          </h2>
          <article className={styles.experience}>
            <hgroup>
              <Image
                src={devoteam}
                alt="The Devoteam logo"
                width={32}
                height={32}
              />
              <h3 className={poppinsBold.className}>
                Software Engineer Consultant at Devoteam
              </h3>
              <h4 className={poppinsRegular.className}>
                <time dateTime="2023-11-00">Sep 2023</time> - Present
              </h4>
            </hgroup>
            <p className={poppinsRegular.className}>
              During my time at Devoteam I have worked on the OpenDORA internal
              project. I developed features for the REST API in Go, created UI
              components in React/TypeScript and set up CICD pipelines in GitHub
              actions. Code was written with tests in mind and Docker images and
              Kubernetes Helm charts were created for easier deployment.
            </p>
          </article>

          <article className={styles.experience}>
            <hgroup>
              <Image
                src={woodwing}
                alt="The WoodWing logo"
                width={32}
                height={32}
              />
              <h3 className={poppinsBold.className}>
                Full-stack Engineer at WoodWing
              </h3>
              <h4 className={poppinsRegular.className}>
                <time dateTime="2021-07-00">Jul 2021</time> -{" "}
                <time dateTime="2023-07-00">Jul 2023</time>
              </h4>
            </hgroup>
            <p className={poppinsRegular.className}>
              Part of a high velocity, self managed team, I was responsible for
              developing features and upgrading legacy code in an enterprise
              content-creation software suite. This included building UI
              components and views in Angular 15, upgrading from AngularJS,
              creating APIs using AWS Lambda and API Gateway. During my role I
              guided other engineers to write declarative and reactive code with
              RxJS and also lead knowledge sharing sessions on AWS IAM security.
            </p>
          </article>

          <article className={styles.experience}>
            <hgroup>
              <Image
                src={samsonvt}
                alt="The SamsonVT logo"
                width={32}
                height={32}
              />
              <h3 className={poppinsBold.className}>
                Lead 3D Developer at SamsonVT
              </h3>
              <h4 className={poppinsRegular.className}>
                <time dateTime="2020-05-00">May 2020</time> -{" "}
                <time dateTime="2021-05-00">May 2021</time>
              </h4>
            </hgroup>
            <p className={poppinsRegular.className}>
              I played a key role in expanding the team to include 3D artists
              and content creation, as well as choosing a technical direction
              and approach for the visualization of 3D assets. I was responsible
              for creating the web interface with an interactive 3D viewer. This
              was developed using React and Styled-components with automated
              testing in Jest, Cypress and AWS CodeBuild.
            </p>
          </article>
        </section>
      </main>
      <footer className={styles.footer} id="contact">
        <h2 className={poppinsBold.className}>Contact</h2>
        <a href="mailto:mail@watsonk.me">
          <Image src={email} alt="" width={17} height={17} />
          <span className={poppinsSemiBold.className}>mail@watsonk.me</span>
        </a>
        <nav>
          <a href="https://github.com/kylejwatson/">
            <Image src={github} alt="" width={18} height={18} />
          </a>
          <a href="https://www.linkedin.com/in/kylejwatsonbsc/">
            <Image src={linkedin} alt="" width={18} height={18} />
          </a>
        </nav>
      </footer>
    </div>
  );
}
