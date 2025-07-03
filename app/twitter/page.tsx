'use client';
import { useState } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function Twitter() {
  const tweetIds = [
    "1892959077338153340",
    "1894772144237605212",
    "1839303421339512885",
    "1800530733833867398",
    "1929957815138808030",
    "1916650781060501755"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mt-12 mb-10 leading-tight tracking-tight animate-fade-in">
        My Alter Ego
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tweetIds.map((id) => (
          <TweetCard key={id} tweetId={id} />
        ))}
      </div>
    </div>
  );
}

function TweetCard({ tweetId }: { tweetId: string }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative p-2 rounded shadow bg-white dark:bg-gray-900">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 animate-pulse z-10 rounded">
          <span className="text-gray-500">Loading tweet...</span>
        </div>
      )}
      <div className={loading ? 'invisible' : ''}>
        <TwitterTweetEmbed
          tweetId={tweetId}
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
}
