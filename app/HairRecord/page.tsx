import { Customer } from "@/components/Customer";
import { title } from "@/components/primitives";

export default function HairRecordPage() {
  return (
    <div>
      <h1 className={title()}>Hair Record Customer</h1>
      <Customer />
    </div>
  );
}
