import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { SiRedux, SiTypescript, SiReactrouter } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { SiDeno, SiDocker, SiFigma } from "react-icons/si";
import { IconType } from "react-icons";

interface IStack {
  title: string;
  img: IconType | string;
}

export const stackData: IStack[] = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  { title: "Figma", img: SiFigma },
  {
    title: "JavaScript",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {
    title: "React",
    img: imgReact,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  { title: "Redux", img: SiRedux },
  { title: "Context-API", img: MdApi },
  { title: "React-Router-Dom", img: SiReactrouter },
  { title: "TypeScript", img: SiTypescript },
  { title: "Deno", img: SiDeno },
  { title: "Docker", img: SiDocker },
];
