import type { TechTool } from "@/types/TechTool";

interface TechStacksProps {
  frontend: TechTool[];
  infra: TechTool[];
}

const TechStacks: React.FC<TechStacksProps> = ({ frontend, infra }) => {
  return (
    <div className="col-span-1 flex flex-col justify-center gap-8">
      <h2 className="text-center font-bold">Tech Stack</h2>

      <div className="flex flex-col gap-8 sm:flex-row md:flex-col xl:flex-row">
        <div className="flex w-full flex-col gap-3">
          <div className="bg-gradient-to-r from-primary to-white px-4 py-2">
            <h2 className="font-medium text-white">Frontend</h2>
          </div>

          <div className="flex flex-col gap-3">
            {frontend.map((tech: TechTool, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex h-8 w-8 flex-none items-center justify-center">
                  {tech.icon}
                </div>
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-3">
          <div className="bg-gradient-to-r from-primary to-white px-4 py-2">
            <h2 className="font-medium text-white">Infra</h2>
          </div>

          <div className="flex flex-col gap-3">
            {infra.map((tech: TechTool, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex h-8 w-8 flex-none items-center justify-center">
                  {tech.icon}
                </div>
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
