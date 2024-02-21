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
    <div class="flex flex-col w-full gap-6">
      <div class="flex flex-row gap-6">
        {plans.map((plan) => <CardPrice props={plan} />)}
      </div>
      <span dangerouslySetInnerHTML={{ __html: content }}>
      </span>
    </div>
  );
}
