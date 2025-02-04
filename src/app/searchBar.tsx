'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e:any) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/carListing/${query.toLowerCase()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2 p-4">
      <input
        type="text"
        placeholder="Enter car name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm 
        border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ borderRadius: '70px' }}
       
      
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
}
