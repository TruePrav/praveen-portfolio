'use client';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function Twitter() {
  // an array of tweet IDs you choose to showcase
  const tweetIds = [
    "1892959077338153340",  // → paste the numeric ID from any tweet URL
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
          <div key={id} className="card">
            <TwitterTweetEmbed tweetId={id} />
          </div>
        ))}
      </div>
    </div>
  );
}
