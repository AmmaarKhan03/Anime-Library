import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-neutral-800 text-white py-20 px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Your Personal Anime Library
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        Track, organize, and discover your favorite anime and manga all in one place
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link
                            href="/signup"
                            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
                        >
                            Get Started Free
                        </Link>
                        <Link
                            href="/explore"
                            className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-purple-800 transition"
                        >
                            Explore Anime
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-8 bg-neutral-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Everything You Need to Track Your Anime
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-neutral-800 p-6 rounded-lg ">
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="text-xl font-bold mb-2">Personal Library</h3>
                            <p className="text-white">
                                Keep track of what you're watching, completed, and plan to watch. Never lose your place again.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-neutral-800 p-6 rounded-lg ">
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-bold mb-2">Track Progress</h3>
                            <p className="text-white">
                                Monitor your episodes watched, rate shows, and add personal notes to remember your thoughts.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-neutral-800 p-6 rounded-lg ">
                            <div className="text-4xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold mb-2">Discover New Anime</h3>
                            <p className="text-white">
                                Explore thousands of anime and manga with real-time data from AniList. Find your next favorite.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-neutral-800 p-6 rounded-lg ">
                            <div className="text-4xl mb-4">📁</div>
                            <h3 className="text-xl font-bold mb-2">Custom Collections</h3>
                            <p className="text-white">
                                Organize your library with custom lists. Create collections for favorites, genres, or moods.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-neutral-800 p-6 rounded-lg ">
                            <div className="text-4xl mb-4">⭐</div>
                            <h3 className="text-xl font-bold mb-2">Rate & Review</h3>
                            <p className="text-white">
                                Keep track of your ratings and write notes about each series. Build your personal anime diary.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-neutral-800 p-6 rounded-lg ">
                            <div className="text-4xl mb-4">📈</div>
                            <h3 className="text-xl font-bold mb-2">Statistics</h3>
                            <p className="text-white">
                                View detailed stats about your watching habits. Total episodes, favorite genres, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-neutral-800 text-white py-16 px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Organize Your Anime?
                    </h2>
                    <p className="text-xl mb-8 text-purple-100">
                        Join now and start tracking your anime journey today. It's completely free!
                    </p>
                    <Link
                        href="/signup"
                        className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block"
                    >
                        Create Your Account
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-8 px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <p>&copy; 2024 Anime Library. Built with Next.js and AniList API.</p>
                </div>
            </footer>
        </div>
    );
}