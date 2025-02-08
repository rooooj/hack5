import Image from 'next/image';

export default function MeetOurTeam() {
  return (
    <div className="container mx-auto p-6 text-center">
      {/* Video Section */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          <Image src="/media bg-cover.png" alt="Video Thumbnail" width={800} height={450} className="rounded-lg" />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-blue-500 text-white p-4 rounded-full">
              ▶
            </div>
          </button>
        </div>
      </div>

      {/* Team Section */}
      <h2 className="text-2xl font-bold mt-8">Meet Our Team</h2>
      <p className="text-gray-500">Problems trying to resolve the conflict between <br/> the two major realms of Classical physics: Newtonian mechanics</p>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <Image src="/team-1-user-1.jpg" alt="User 1" width={200} height={200} className="rounded-full mx-auto" />
          <h3 className="font-bold mt-2">Username</h3>
          <p className="text-gray-500">Profession</p>
          <div className="flex justify-center gap-3 mt-2">
            <a href="#"><Image src="/ant-design_facebook-filled.png" alt="Facebook" width={20} height={20} /></a>
            <a href="#"><Image src="/ant-design_twitter-outlined.png" alt="Twitter" width={20} height={20} /></a>
            <a href="#"><Image src="/ant-design_instagram-outlined.png" alt="Instagram" width={20} height={20} /></a>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <Image src="/team-1-user-2.jpg" alt="User 2" width={200} height={200} className="rounded-full mx-auto" />
          <h3 className="font-bold mt-2">Username</h3>
          <p className="text-gray-500">Profession</p>
          <div className="flex justify-center gap-3 mt-2">
            <a href="#"><Image src="/ant-design_facebook-filled.png" alt="Facebook" width={20} height={20} /></a>
            <a href="#"><Image src="/ant-design_twitter-outlined.png" alt="Twitter" width={20} height={20} /></a>
            <a href="#"><Image src="/ant-design_instagram-outlined.png" alt="Instagram" width={20} height={20} /></a>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <Image src="/media.png" alt="User 3" width={200} height={200} className="rounded-full mx-auto" />
          <h3 className="font-bold mt-2">Username</h3>
          <p className="text-gray-500">Profession</p>
          <div className="flex justify-center gap-3 mt-2">
            <a href="#"><Image src="/ant-design_facebook-filled.png" alt="Facebook" width={20} height={20} /></a>
            <a href="#"><Image src="/ant-design_twitter-outlined.png" alt="Twitter" width={20} height={20} /></a>
            <a href="#"><Image src="/ant-design_instagram-outlined.png" alt="Instagram" width={20} height={20} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
