import { useState, useEffect } from 'react';
import Head from 'next/head';

// Define the Player type
type Player = {
  id: string;
  name: string;
  phone: string;
  level: 'A' | 'B' | 'C' | 'D' | 'E';
  location: string;
  preferredTimeFrames: string[];
  createdAt: string;
  updatedAt: string;
};

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentUser, setCurrentUser] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch players from the backend
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('/api/players');
        if (!response.ok) {
          throw new Error(`Failed to fetch players: ${response.status}`);
        }
        const data = await response.json();
        setPlayers(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load players');
        setLoading(false);
        console.error('Error fetching players:', err);
      }
    };

    fetchPlayers();
  }, []);

  // Initialize with a test player if no players exist
  useEffect(() => {
    const initCurrentUser = async () => {
      if (players.length === 0) {
        try {
          const response = await fetch('/api/players', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: 'Test Player',
              phone: '+1234567890',
              level: 'B',
              location: 'Sydney, NSW',
              preferredTimeFrames: ['Morning', 'Evening']
            }),
          });
          
          if (response.ok) {
            const newPlayer = await response.json();
            setCurrentUser(newPlayer);
          }
        } catch (err) {
          console.error('Error creating test player:', err);
        }
      }
    };

    initCurrentUser();
  }, [players]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading players...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Baddy-Matching - Find Badminton Partners</title>
        <meta name="description" content="Find badminton partners based on skill level, location, and time preferences" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Baddy-Matching</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your perfect badminton partner based on skill level, location, and preferred time frames
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player) => (
            <div key={player.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{player.name}</h2>
                  <div className="flex items-center mt-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Level {player.level}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243A1.998 1.998 0 013 16.375V6.25a2.25 2.25 0 012.25-2.25h9.75a2.25 2.25 0 012.25 2.25v10.125z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 7.5v10.5" />
                  </svg>
                  <p className="text-gray-600">{player.location}</p>
                </div>

                <div className="flex items-start">
                  <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-600">
                    {player.preferredTimeFrames.join(', ')}
                  </p>
                </div>

                <div className="flex items-start">
                  <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.676l1.766 5.32a1 1 0 01-.825 1.246l-3.967.982c-.385.104-.665.425-.733.82a2.16 2.16 0 00-.124.538l-2.369 8.33a1 1 0 00.557 1.256c.34.194.805.276 1.25.193l.557-.124a2.16 2.16 0 001.25-.733l8.33-2.369a1 1 0 00.733-.825l.982-3.967a1 1 0 00-.825-.733l-5.32-1.766a1 1 0 01-.676-.948V5a2 2 0 012-2z" />
                  </svg>
                  <p className="text-gray-600">
                    {player.phone}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors">
                  Match
                </button>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition-colors">
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>

        {players.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-gray-500">No players found. Be the first to create your profile!</p>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Baddy-Matching - Find your badminton partners</p>
        </div>
      </footer>
    </div>
  );
}