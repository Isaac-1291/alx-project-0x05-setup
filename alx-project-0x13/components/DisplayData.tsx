'use client';
import useFetchData from '../hooks/useFetchData';

export default function DisplayData() {
  const { data, loading, error } = useFetchData('/api/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Fetched Data:</h2>
      <pre className="bg-gray-100 p-4 rounded-md">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}