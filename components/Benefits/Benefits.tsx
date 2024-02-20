import { ImageWidget } from "apps/admin/widgets.ts";

import BenefitCard from "./BenefitCard.tsx"

export interface Props {
    items: {
        icon: ImageWidget,
        title: string,
        subTitle: string
    }[]
}

export default function Benefits({ items }: Props) {
    return (
        <div class="container md:flex md:flex-wrap md:gap-6 px-12 lg:justify-between lg:flex-nowrap divide-x-2">
            {
                items.map((item, index) => <BenefitCard image={item.icon} title={item.title} subTitle={item.subTitle} position={index} arrayLength={items.length} />)
            }
        </div>
    );
}