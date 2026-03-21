export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="object-cover w-full h-full"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Overlay for readability */}

      <div className="absolute inset-0 bg-black/50"></div>

    </div>
  );
}