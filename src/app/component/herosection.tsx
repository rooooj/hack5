'use client';

import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: 'Loudest à la Madison #1 (L’intégral)',
    description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
    date: '22 April 2021',
    comments: 10,
    image: '/unsplash_hHdHCfAifHU.png',
  },
  {
    id: 2,
    title: 'Loudest à la Madison #1 (L’intégral)',
    description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
    date: '22 April 2021',
    comments: 10,
    image: '/unsplash_tVEqStC2uz8.png',
  },
  {
    id: 3,
    title: 'Loudest à la Madison #1 (L’intégral)',
    description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
    date: '22 April 2021',
    comments: 10,
    image: '/pic.png',
  },
];

export default function FeaturedPosts() {
  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-blue-600 font-semibold">Practice Advice</h2>
      <h1 className="text-3xl font-bold mt-2">Featured Posts</h1>
      <p className="text-gray-500 mt-2">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <Image src={post.image} alt={post.title} width={400} height={250} className="w-full object-cover" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full">NEW</span>
            </div>
            <div className="p-4 text-left">
              <div className="text-gray-400 text-sm">Google • Trending • New</div>
              <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
                <span>📅 {post.date}</span>
                <span>💬 {post.comments} comments</span>
              </div>
              <a href="#" className="text-blue-600 font-semibold mt-4 block">Learn More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
