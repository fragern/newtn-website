import Image from "next/image";
import type { NewtnTalent } from "@/types/NewtnTalent";

interface NewtnTalentCardProps {
  talent: NewtnTalent;
}

const NewtnTalentCard: React.FC<NewtnTalentCardProps> = ({ talent }) => {
  return (
    <div className="flex flex-none flex-col items-center">
      <div className="relative aspect-[2/3] w-40 lg:w-52">
        <Image
          src={talent.image}
          alt={`Picture of ${talent.name}`}
          fill
          className="object-fit h-full w-full"
        />
      </div>

      <p className="mt-5 text-2xl font-semibold text-black">{talent.name}</p>
      <p className="text-lg text-black">{talent.role}</p>
    </div>
  );
};

export default NewtnTalentCard;
