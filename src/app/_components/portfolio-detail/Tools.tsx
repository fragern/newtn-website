import type { TechTool } from "@/types/techTool";

interface ToolsProps {
  tools: TechTool[];
}

const Tools: React.FC<ToolsProps> = ({ tools }) => {
  return (
    <div className="col-span-1 flex w-full flex-col justify-center gap-3">
      <div className="w-full bg-gradient-to-r from-primary to-white px-4 py-2 sm:w-1/2 md:w-full xl:w-1/2">
        <h2 className="font-medium text-white">Tools</h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
        {tools.map((tech: TechTool, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex h-8 w-8 flex-none items-center justify-center">
              {tech.icon}
            </div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
