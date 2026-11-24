export default function VideoPlayer({ videoURL }) {
  return (
    <div className="flex items-center justify-center w-full px-4 py-4">
      <div className="w-full md:w-3/4 lg:w-1/2 overflow-hidden rounded-3xl shadow-lg">
        <iframe
          src={videoURL}
          title="YouTube video player"
          className="block w-full aspect-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
