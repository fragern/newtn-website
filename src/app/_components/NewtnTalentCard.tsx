import { NewtnTalent } from "@/types/newtnTalent";

interface NewtnTalentCardProps {
  talent: NewtnTalent;
}

const NewtnTalentCard: React.FC<NewtnTalentCardProps> = ({ talent }) => {
  return (
    <div className="flex flex-none flex-col items-center">
      <img src={talent.image} alt={talent.name} />
      <p className="text-2xl font-semibold text-black mt-5">{talent.name}</p>
      <p className="text-lg text-black">{talent.role}</p>
    </div>
  );
};

export default NewtnTalentCard;
