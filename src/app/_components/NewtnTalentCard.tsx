import Link from "next/link";
import type { NewtnTalent } from "@/types/NewtnTalent";

interface NewtnTalentCardProps {
  talent: NewtnTalent;
}

const NewtnTalentCard: React.FC<NewtnTalentCardProps> = ({ talent }) => {
  return (
    <Link href={talent.linkedIn} target="_blank" className="w-full">
      <div className="hover:bg-primary/5 mb-2 flex w-full flex-row items-center justify-between rounded-full border border-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:border-primary hover:shadow-md">
        <p className="text-3xl font-medium text-primary transition-colors duration-300">
          {talent.name}
        </p>
        <p className="text-right text-2xl text-primary transition-colors duration-300">
          {talent.role}
        </p>
      </div>
    </Link>
  );
};

export default NewtnTalentCard;
