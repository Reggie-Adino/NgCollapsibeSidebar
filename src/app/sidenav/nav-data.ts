import { InavbarData } from "./helper";

export const navData:InavbarData[] = [
  {
    routeLink: "dashboard",
    icon: "fas fa-house-user",
    label: "Dashboard",
    items:[]
  },
  {
    routeLink: "products",
    icon: "fas fa-box-open",
    label: "Products",
    items:[]
  },
  {
    routeLink: "statistics",
    icon: "fas fa-chart-bar",
    label: "Statistics",
    items:[]
  },
  {
    routeLink: "coupens",
    icon: "fas fa-tags",
    label: "Coupens",
    items:[
      {
        routeLink:'coupens/list',
        label: 'List Coupens',
        items:[]
      },
      {
        routeLink:'coupens/create',
        label:'Create Coupens',
        items:[]
      }
    ]
  },
  {
    routeLink: "media",
    icon: "fa-solid fa-camera",
    label: "Media",
    items:[]
  },
  {
    routeLink: "settings",
    icon: "fas fa-cog",
    label: "settings",
    items:[]
  }
];

