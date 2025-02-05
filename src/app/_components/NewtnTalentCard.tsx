import Image from "next/image";
import type { NewtnTalent } from "@/types/newtnTalent";

interface NewtnTalentCardProps {
  talent: NewtnTalent;
}

const NewtnTalentCard: React.FC<NewtnTalentCardProps> = ({ talent }) => {
  return (
    <div className="flex flex-none flex-col items-center">
      <Image
        src={talent.image}
        alt={`Picture of ${talent.name}`}
        width={200}
        height={300}
      />

      <p className="mt-5 text-2xl font-semibold text-black">{talent.name}</p>
      <p className="text-lg text-black">{talent.role}</p>
    </div>
  );
};

export default NewtnTalentCard;
