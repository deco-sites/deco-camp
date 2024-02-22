import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title Card
 */
export interface Props {
  icon: ImageWidget;
  /**
   * @format html
   */
  title: string;
  /**
   * @format html
   * @title content
   */
  content: string;
}

export default function CardWorks({ props }: { props: Props }) {
  const { icon, title, content } = props;

  return (
    <div class="flex flex-col gap-4 px-4 w-full md:w-[calc(50%-2rem)] xl:w-[calc(25%-2rem+8px)]">
      <div class="bg-base-200 rounded-full w-[56px] h-[56px] flex justify-center items-center">
        <Image width={24} height={24} src={icon} />
      </div>
      <h3
        class={"text-neutral font-semibold text-[1.5rem] lg:text-2xl "}
        dangerouslySetInnerHTML={{ __html: title }}
      >
      </h3>
      <span
        class={"text-base mt-auto"}
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </span>
    </div>
  );
}
