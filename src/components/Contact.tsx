import ChevronDoubleUp from "@/lib/svg/ChevronDoubleUp";
import ContactForm from "./ContactForm";
import ReusableLink from "./ui/ReusableLink";
import ResumeIcon from "@/lib/svg/ResumeIcon";
import GithubIcon from "@/lib/svg/GithubIcon";
import LinkedInIcon from "@/lib/svg/LinkedInIcon";
import ReusableImage from "./ui/ReusableImage";

export default function Contact() {
  return (
    <main id="contact" className="w-full h-full pt-[10px] lg:pt-[750px]">
      <div className="max-w-[1240px] m-auto px-2 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <aside className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <ReusableImage
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/images/contact.webp"
                  alt="contact me"
                  width={530}
                  height={530}
                  sizes="(min-width: 580px) 530px, calc(88.46vw + 35px)"
                />
              </div>
              <div>
                <h2 className="py-2">Aymen Bachiri</h2>
                <p>
                  <strong>MERN</strong> Stack & <strong>React Native</strong>{" "}
                  Developer
                </p>
                <p className="py-4">
                  I am available for <strong>freelance</strong> or{" "}
                  <strong>part-time</strong> positions. Contact me and
                  let&apos;s talk.
                </p>
              </div>
              <nav>
                <p className="uppercase pt-8">Connect With Me</p>
                <ul className="flex items-center justify-between py-4">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/aymen-bachiri-9442b5287/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <LinkedInIcon />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Aymenbachiri?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <GithubIcon />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <ResumeIcon />
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          {/* right */}
          <ContactForm />
        </div>
        <section className="flex justify-center py-12">
          <ReusableLink href="#home">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <ChevronDoubleUp className="text-[#5651e5]" />
            </div>
          </ReusableLink>
        </section>
      </div>
    </main>
  );
}
