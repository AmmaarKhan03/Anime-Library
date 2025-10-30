'use client';

import { useState } from 'react';
import { searchAnime } from '@/lib/anilist';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;

        setLoading(true);
        try {
            const data = await searchAnime(searchTerm);
            setResults(data);
        } catch (error) {
            console.error('Search failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen p-8 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Anime Library</h1>

            <form onSubmit={handleSearch} className="mb-8">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for anime..."
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                    >
                        {loading ? 'Searching...' : 'Search'}
                    </button>
                </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((anime) => (
                    <div key={anime.id} className="border rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={anime.coverImage.large}
                            alt={anime.title.romaji}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">
                                {anime.title.english || anime.title.romaji}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Episodes: {anime.episodes || 'TBA'} • Score: {anime.averageScore || 'N/A'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}