import TestimonialCard from "./TestimonialCard";
import JasmynRamirezProfilePic from "../assets/profilePics/jasmyn-ramirez.png";
import JasmineBhardwajProfilePic from "../assets/profilePics/jasmine-bhardwaj.png";
import ElevoProfilePic from "../assets/profilePics/elevo.png";

const endorsers = [
  {
    name: "Jasmyn Ramirez",
    profilePic: JasmynRamirezProfilePic,
    positon: "Senior Video Marketing Associate at DigitalNEST",
    review:
      "I had the pleasure of working with Yvone as the editor on my senior thesis film, and I can confidently say that her contributions plays a major role in the film’s success. Her strong storytelling instincts, attention to detail, and technical expertise brought the project together in ways that elevated it’s entire premise.\n​I’m incredibly grateful for the time, talent, and dedication Yvone brought to the project. I would highly recommend her to any production team looking for a skilled, thoughtful, and dependable editor.",
  },
  {
    name: "Jasmine Bhardwaj",
    profilePic: JasmineBhardwajProfilePic,
    positon:
      "Marketing and Administrative Director at the Salinas Valley Chamber of Commerce",
    review:
      "I had the pleasure of working with Yvone during her time as a Social Media Intern, and I was consistently impressed by her creativity, professionalism, and willingness to learn, Yvone played an important role in supporting Chamber social media and email campaign efforts, helping create engaging content and promote our events and programs. She was dependable, thoughtful, heardworking, and fantastic to work with.\n​I’m confident that she will continue to grow and make a positive imapct wherever her career takes her.",
  },
  {
    name: "Ulices Rodriguez",
    profilePic: ElevoProfilePic,
    positon: "Operations Manager for Elevo",
    review:
      "Coach Yvone Cortes has been a key part of our Salinas City Team since last school year, primarily serving at Mission Park Elementary. From day one, she's brought confidence, care, energy, and organization to everything she does. What truley sets her apart is her consistency- whether it's her professionalism, punctuality, or her intentional approach with students. If you've ever sat in on one of her academice support blocks, you've seen firsthand how impactful she is.\nCoach Yvone balances assertiveness with approachability, creating a space where students feel supported and engaged. She deserves all the recognition for the incredible work she's doing to uplift our community. A huge shoutout to Coach Yvone! I'm excited to see all the greate things ahead for her!",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-8">Testimonials</h1>

      {/* Removed 'items-center' so children default to 'items-stretch' (full equal width) */}
      <div className="flex flex-col gap-10">
        {endorsers.map((endorser, index) => (
          <TestimonialCard
            key={endorser.name || index}
            endorserName={endorser.name}
            endorserProfilePic={endorser.profilePic}
            endorserPosition={endorser.positon}
            review={endorser.review}
          />
        ))}
      </div>
    </div>
  );
}
