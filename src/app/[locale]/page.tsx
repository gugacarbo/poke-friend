import { Header } from "@/features/Layout";

export const runtime = 'edge';

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center py-6 min-h-screen">
      <Header />
    </main>
  );
}
