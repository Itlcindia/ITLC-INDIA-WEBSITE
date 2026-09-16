export default function VideoSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        {/* Heading */}

        {/* Auto Play Muted Video */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border bg-card soft-shadow">
            <video
              src="/vio/b.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
