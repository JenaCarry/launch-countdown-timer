import { Timer } from "@/components/Timer";

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="sr-only">Launch countdown timer</h1>
      <Timer />
    </main>
  );
}
