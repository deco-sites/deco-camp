import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  image: ImageWidget;
  title: string;
  subTitle: string;
}

export default function BenefitCard(
  { image, title, subTitle }: Props,
) {
  return (
    <>
      <div
        class={`py-6 lg:pl-6 lg:py-0`}
      >
        <img class="mb-4" src={image} width={32} height={32} />

        <h4 class="text-[#fff] text-bold text-xl">{title}</h4>
        <h5 class="mt-2 text-[#A1A1AA] text-base">{subTitle}</h5>
      </div>
    </>
  );
}
