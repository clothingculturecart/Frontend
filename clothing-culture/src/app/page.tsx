import AnnouncementBar from "@/components/home/AnnouncementBar";
import HeroBanner from "@/components/home/HeroBanner";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="bg-black">
        <HeroBanner />
      </main>
    </>
  );
}