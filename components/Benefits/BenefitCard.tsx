import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
    image: ImageWidget,
    title: string,
    subTitle: string,
    position: number,
    arrayLength: number,
}

export default function BenefitCard({ image, title, subTitle, position, arrayLength }: Props) {
    return (
        <>
            <div class={`py-6 ${position === arrayLength - 1 ? 'border-b-0' : 'border-b-[1px]'} md:w-[41%] md:border-none lg:w-[25%] lg:border-r-[1px]`}>
                <img class="mb-4" src={image} width={32} height={32} />
                
                <h4 class="text-[#fff] text-bold text-xl">{title}</h4>
                <h5 class="mt-2 text-[#A1A1AA] text-base">{subTitle}</h5>
            </div>
            <hr class={`${position === 0 || position === 2 ? 'w-[1px] bg-white mx-5 h-auto' : ''} hidden md:block lg:hidden`} />
        </>
    );
}