import { ExpandableCard } from "@/components/ExpandableCard";
import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg mb-8">
        Guest star
      </h1>
      <ExpandableCard />
    </div>
  );
}
