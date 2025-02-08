import Image from "next/image";

// Define the TypeScript interface for team members
interface TeamMemberProps {
  name: string;
  profession: string;
  image: string;
}

const teamMembers: TeamMemberProps[] = [
  { name: "Username", profession: "Profession", image: "/team-1-user-1 (1).jpg" },
  { name: "Username", profession: "Profession", image: "/media (5).png" },
  { name: "Username", profession: "Profession", image: "/team-1-user-3.jpg" },
  { name: "Username", profession: "Profession", image: "/media.png" },
  { name: "Username", profession: "Profession", image: "/media (2).png" },
  { name: "Username", profession: "Profession", image: "/team-1-user-1.jpg" },
  { name: "Username", profession: "Profession", image: "/team-1-user-2.jpg" },
  { name: "Username", profession: "Profession", image: "/team-1-user-2 (1).jpg" },
  { name: "Username", profession: "Profession", image: "/team-1-user-3 (3).jpg" },
];

// Add TypeScript type annotation to the component
const TeamMember: React.FC<TeamMemberProps> = ({ name, profession, image }) => (
  <div className="flex flex-col items-center text-center space-y-3">
    <div className="w-32 h-32 rounded-full overflow-hidden">
      <Image src={image} alt={name} width={128} height={128} />
    </div>
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-gray-500">{profession}</p>
    <div className="flex space-x-3 text-gray-600">
      <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
      <a href="#" className="hover:text-blue-500"><i className="fab fa-instagram"></i></a>
      <a href="#" className="hover:text-blue-500"><i className="fab fa-twitter"></i></a>
    </div>
  </div>
);

export default function MeetOurTeam() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
