import type { Props as ButtonProps } from "$store/components/Button/Button.tsx";
import Button from "../Button/Button.tsx";

export interface Props {
  labelPlan: string;
  /**
   * @format hrml
   */
  flag: string;
  /**
   * @format html
   */
  infosPrice: string;
  button: ButtonProps;
  afterButton: string;
  requirements: {
    title: string;
    itemRequisite: string[];
  };
  type: "ligth" | "dark";
}

export default function CardPrice({ props }: { props: Props }) {
  const {
    labelPlan,
    flag,
    infosPrice,
    requirements,
    type,
    button,
    afterButton,
  } = props;

  return (
    <div class="flex flex-col ">
      <span dangerouslySetInnerHTML={{ __html: flag }}></span>
      <span dangerouslySetInnerHTML={{ __html: infosPrice }}></span>
      <Button />
      <span>{afterButton}</span>
      <span></span>
      <p>{requirements.title}</p>
      <ul>
        {requirements.itemRequisite.map((item) => (
          <li>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
