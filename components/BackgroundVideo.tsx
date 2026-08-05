export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed inset-0 h-full w-full object-cover"
    >
      <source src="/video/bg3.MOV" type="video/mp4" />
    </video>
  );
}
