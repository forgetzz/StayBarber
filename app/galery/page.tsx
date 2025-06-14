import { ParallaxScrollDemo } from "@/components/ParallaxScroll";
import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Galery Staybarber</h1>
      <ParallaxScrollDemo />
    </div>
  );
}
