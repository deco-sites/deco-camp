import type { ImageWidget, VideoWidget } from "apps/admin/widgets.ts";
import Button from "../Button/Button.tsx";

export interface Props {
  flag: string;
  /**
   * @format html
   */
  title: string;
  /**
   * @format html
   */
  subtitle: string;
  button: {
    label: string;
    details?: string;
    href: string;
  };
  afterButtonText: string;
  /**
   * @description id video of vimeo
   */
  idVimeo: string;
}

export default function Hero({ props }: { props: Props }) {
  const { flag, title, subtitle, button, afterButtonText, idVimeo } = props;

  return (
    <div class="w-full h-full flex flex-row justify-between items-center px-12 pb-16 pt-20 container">
      <div class=" h-full flex flex-col justify-center items-start gap-8 lg:w-[60%] xl:w-2/4">
        <span class="text-neutral border border-base-content rounded-3xl px-4 py-2 w-min">
          {flag}
        </span>
        <h2
          class="lg:text-5xl xl:text-6xl text-neutral"
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h2>
        <span
          class="lg:text-xl xl:text-2xl max-w-[540px]"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        >
        </span>
        <div class="flex flex-col gap-2">
          <Button
            label={button.label}
            href={button.href}
            details={button.details}
          />
          <span class="ml-4 text-neutral text-sm">{afterButtonText}</span>
        </div>
      </div>
      <div class="lg:w-5/12 xl:w-2/4 max-w-[548px]">
        <div style="padding:100% 0 0 0;position:relative;">
          <iframe
            src={`https://player.vimeo.com/video/${idVimeo}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            title="foxton"
          >
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  );
}
