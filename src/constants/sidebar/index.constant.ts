import { Bell, Chart, Dev, People, Person } from "@b1nd/dds-web";
import { IconType } from "@src/types/icon.type";

export type SidebarDataType = {
  text: string;
  link: string;
  icon: IconType;
}[]

export const SIDEBAR_DATA: SidebarDataType = [
  {
    text: "랭킹",
    link: "/rank/total",
    icon: Chart,
  },
  {
    text: "마이페이지",
    link: "/profile",
    icon: Person,
  },
  {
    text: "명예의 전당",
    link: "/honor/weekly-commit",
    icon: People,
  },
  {
    text: "미션",
    link: "/mission",
    icon: Bell,
  },
  {
    text: "프로젝트",
    link: "/project",
    icon: Dev,
  },
];