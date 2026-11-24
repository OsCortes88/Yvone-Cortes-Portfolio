import { Quote } from "lucide-react";

export default function TestimonialCard({
  endorserName,
  endorserProfilePic,
  endorserPosition,
  review,
}) {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[auto_1fr] shadow-md p-6 sm:p-8 lg:p-10 gap-6 lg:gap-12 items-center rounded-2xl">
      <div className="flex items-center justify-center">
        <img
          className="object-cover w-40 lg:w-48 rounded-2xl"
          src={endorserProfilePic}
          alt={endorserName}
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1">
          <h1 className="font-bold text-lg">{endorserName}</h1>
          <h2 className="text-gray-600">{endorserPosition}</h2>
        </div>
        <div className="flex flex-col p-2 rounded-2xl bg-gray-200">
          <Quote fill="black" stroke="1" className="rotate-180 w-5 h-5" />
          <div className="flex flex-col gap-3 py-2 px-4 sm:px-8 lg:px-10">
            {review
              .split("\n")
              .filter((paragraph) => paragraph.trim() !== "")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
          <Quote fill="black" stroke="1" className="ml-auto w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
