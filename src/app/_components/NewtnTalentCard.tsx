import Link from "next/link";
import type { NewtnTalent } from "@/types/NewtnTalent";

interface NewtnTalentCardProps {
  talent: NewtnTalent;
}

const NewtnTalentCard: React.FC<NewtnTalentCardProps> = ({ talent }) => {
  return (
    <Link href={talent.linkedIn} target="_blank" className="w-full">
      <div className="hover:bg-primary/5 mb-2 flex w-full flex-row items-center justify-between rounded-full border border-transparent px-2 py-2 transition-all duration-300 ease-in-out hover:border-primary hover:shadow-md sm:px-4">
        <p className="w-3/5 text-lg font-medium text-primary transition-colors duration-300 sm:text-3xl">
          {talent.name}
        </p>
        <p className="w-2/5 text-right text-lg text-primary transition-colors duration-300 sm:text-2xl">
          {talent.role}
        </p>
      </div>
    </Link>
  );
};

export default NewtnTalentCard;
