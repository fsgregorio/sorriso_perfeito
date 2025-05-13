
import { Smile } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="bg-pink-500 p-1.5 rounded-full mr-2">
        <Smile className="h-6 w-6 text-white" />
      </div>
      <div className="font-bold text-2xl text-dental-text">
        Sorriso Perfeito
      </div>
    </div>
  );
};

export default Logo;
