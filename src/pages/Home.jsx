import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import VideoPlayer from "../components/VideoPlayer";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-center bg-[url('banner.png')] bg-cover bg-center min-h-[35vh] w-full">
        <div className="flex flex-col p-5 mx-10 max-w-2xl rounded-2xl">
          <div className="flex flex-col items-center justify-center text-white">
            <h1 className="text-center">Yvone Cortes</h1>
            <h2 className="text-center">
              Video Editor | Mentor | Content Creator
            </h2>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center">
        <section
          id="introduction"
          className="w-full py-12 px-4 sm:px-6 md:p-12 bg-gray-100"
        >
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <img
                className="object-cover rounded-full w-48 h-48 md:w-64 md:h-64"
                src="/profilePics/yvone-cortes-pic.png"
                alt="Yvone Cortes"
              />
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-center text-2xl font-bold">Hello!</h1>
              <p>
                I am Yvone Cortes, a first-gen video editor looking to create an
                impact in my community, one edit at a time.
              </p>

              <p>
                My interest in film started when I watched for the first time
                the behind the scenes of Titanic. Watching people put together a
                world with so much detailed pushed me to also do the same.
              </p>

              <p>
                In high school I participated in my school&apos;s YouTube
                channel and created many short comedy films, showcasing in local
                film festivals.
              </p>

              <p>
                Today, I work at DigitalNEST under the BizzNEST branch,
                continuing my passion in creating a world for people to see
                while also adding an extra element; making an impact in my
                community.
              </p>

              <p>Follow me to see my journey!</p>
            </div>
          </div>
        </section>

        <section id="myWork" className="flex flex-col py-8 md:p-8 gap-5 w-full">
          <h1 className="text-center">My Work</h1>
          <div
            hidden="true"
            className="flex flex-col md:flex-row justify-evenly items-center gap-4 md:gap-0"
          >
            <Link
              to="/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-into-light inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold bg-[#46466a] hover:bg-[#737dce] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Projects
            </Link>
            <Link
              to="/filmography"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-into-light inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold bg-[#46466a] hover:bg-[#737dce] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Filmography
            </Link>
            <Link
              to="/about"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-into-light inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold bg-[#46466a] hover:bg-[#737dce] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              About
            </Link>
          </div>
          <VideoPlayer
            videoURL={
              "https://www.youtube.com/embed/umA-x2U8Fp0?si=nnpt7TnCNAyGnObU"
            }
          />
        </section>

        <section
          id="testimonials"
          className="w-full py-12 px-4 sm:px-6 md:p-12 bg-gray-100"
        >
          <Testimonials />
        </section>
      </main>
      <Footer />
    </>
  );
}
