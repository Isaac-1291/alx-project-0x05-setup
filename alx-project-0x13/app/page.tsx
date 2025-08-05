import DisplayData from '../components/DisplayData';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Data Fetching Example</h1>
      <DisplayData />
    </main>
  );
}