import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaVuejs } from "react-icons/fa";
import { SiRedux, SiTypescript, SiReactrouter } from "react-icons/si";
import { MdApi } from "react-icons/md";

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JavaScript",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "React",
    img: imgReact,
  },
  { title: "Vuejs", img: FaVuejs },
  { title: "Redux", img: SiRedux },
  { title: "Context-API", img: MdApi },
  { title: "React-Router-Dom", img: SiReactrouter },
  { title: "TypeScript", img: SiTypescript },
];
