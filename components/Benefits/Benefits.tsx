import { ImageWidget } from "apps/admin/widgets.ts";

import BenefitCard from "./BenefitCard.tsx";

export interface Props {
  items: {
    icon: ImageWidget;
    title: string;
    subTitle: string;
  }[];
}

export default function Benefits({ items }: Props) {
  return (
    <div class="container md:grid md:grid-cols-2 md:gap-6 px-12 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x">
      {items.map((item, index) => (
        <BenefitCard
          image={item.icon}
          title={item.title}
          subTitle={item.subTitle}
        />
      ))}
    </div>
  );
}
