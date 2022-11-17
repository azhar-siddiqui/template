import About from "./About/About";
import Home from "./Home/Home";
import CloudSolutions from "./Solutions/Nested/CloudSolutions";
import WorkplaceModernization from "./Solutions/Nested/WorkplaceModernization";
import ManagedServices from "./Solutions/Nested/ManagedServices";
import Sloutions from "./Solutions/Sloutions";
import AppAndData from "./Solutions/Nested/AppAndData";
import CloudSecurity from "./Solutions/Nested/CloudSecurity";
import CloudPartners from "./Cloud-Partners/CloudPartners";
import Careers from "./Careers/Careers";
import ContactUs from "./Contact-Us/ContactUs";

export const routeNames = {
  Home: {
    name: "home",
    component: Home,
  },
  AboutUs: {
    name: "about",
    component: About,
  },
  Solutions: {
    name: "solutions",
    component: Sloutions,
    nested: {
      CloudSolutions: {
        name: "cloud-solutions",
        component: CloudSolutions,
      },
      WorkplaceModernization: {
        name: "workplace-modernization",
        component: WorkplaceModernization,
      },
      ManagedServices: {
        name: "managed-services",
        component: ManagedServices,
      },
      AppAndData: {
        name: "app-and-data",
        component: AppAndData,
      },
      CloudSecurity: {
        name: "cloud-security",
        component: CloudSecurity,
      },
    },
  },
  CloudPartners: {
    name: "cloud-partners",
    component: CloudPartners,
  },
  Careers: {
    name: "careers",
    component: Careers,
  },
  ContactUs: {
    name: "contact-us",
    component: ContactUs,
  },
};
