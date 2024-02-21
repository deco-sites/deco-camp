import { ImageWidget } from "apps/admin/widgets.ts";

import BenefitCard from "./BenefitCard.tsx";

export interface Props {
  items: {
    icon: ImageWidget;
    title: string;
    subTitle: string;
  }[];
}

const BASE_PROPS = {
  items: [
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/22c5637f-a952-4fe8-8c22-f2cd53f14ec4",
      title: "TypeScript, JSX, Tailwind ",
      subTitle: "Stack we will use",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/a9b63e44-031c-4aa7-8349-d6f786d97e3c",
      title: "Intermediate",
      subTitle: "Recommended Experience",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/66141bbe-ebde-410e-b575-2916c870c7fb",
      title: "15h of video content",
      subTitle: "3 weeks, 5h per week",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/c3ba4303-cec5-4911-aaf8-66e959ee0996",
      title: "Flexible Scheduele",
      subTitle: "Learn in your pace",
    },
  ],
};

export default function Benefits({ props }: { props: Props }) {
  const { items } = { ...BASE_PROPS, ...props };

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
