export default function Footer() {
  return (
    <footer className="p-10 bg-black text-white border-t border-t-zinc-700">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Socials */}
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-5">
              <a
                href="https://www.youtube.com/@YourCinematicVisuals"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-115"
              >
                <img src="icons/youtube.svg" className="w-12" />
              </a>
              <a
                href="https://www.linkedin.com/in/yvone-cortes/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-115"
              >
                <img src="icons/linkedin.svg" className="w-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
