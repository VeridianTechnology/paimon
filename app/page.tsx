export default function HomePage() {
  return (
    <main className="video-page">
      <iframe
        src="https://www.youtube.com/embed/NgdbsRYI0Iw?start=0&end=102&loop=1&playlist=NgdbsRYI0Iw"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </main>
  );
}
