import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Typewriter from "../components/Typewriter";

export default function Home() {
  const roles = ["designer", "artist", "researcher", "writer"];

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-6xl font-bold">Hi Hela Here</h1>
        <p className="mt-3 text-3xl">
          <Typewriter words={roles} />
        </p>
      </main>
      <Footer />
    </div>
  );
}
