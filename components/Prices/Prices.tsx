import type { Props as Plan } from "$store/components/Prices/CardPrice.tsx";
import CardPrice from "./CardPrice.tsx";

export interface Props {
  plans: Plan[];
  /**
   * @format html
   */
  content: string;
}

export default function Prices({ props }: { props: Props }) {
  const { plans, content } = props;

  return (
    <div class="flex flex-col w-full gap-6 px-4 py-10 container">
      <div class="flex flex-col gap-6 items-center lg:flex-row lg: justify-center">
        {plans.map((plan) => <CardPrice props={plan} />)}
      </div>
      <span
        class={"text-center md:text-2xl text-white"}
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </span>
    </div>
  );
}