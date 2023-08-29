/* eslint-disable @typescript-eslint/no-explicit-any */
import { ROUTE_PATHS } from "../constants/routes";
import WithAdminAuth from "../hoc/withAdminAuth";
import AdminLayout from "../layouts/AdminLayout";
import { MainLayout } from "../layouts/MainLayout";
import { PagesLayout } from "../layouts/PagesLayout";
import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";
import { AppRoute } from "./types";

const Home = lazyWithRetryAndLoader(() => import("../modules/Home"));
const Shop = lazyWithRetryAndLoader(() => import("../modules/Shop"));
//const Product = lazyWithRetryAndLoader(() => import("../modules/Product"));
const Collections = lazyWithRetryAndLoader(
  () => import("../modules/Collections")
);
const TermsOfService = lazyWithRetryAndLoader(
  () => import("../modules/TermsOfService")
);
const CostumerService = lazyWithRetryAndLoader(
  () => import("../modules/CostumerService")
);
const RefundsExchanges = lazyWithRetryAndLoader(
  () => import("../modules/RefundsExchanges")
);
const PrivacyPolicy = lazyWithRetryAndLoader(
  () => import("../modules/PrivacyPolicy")
);
const ContactUs = lazyWithRetryAndLoader(() => import("../modules/ContactUs"));
const Manifest = lazyWithRetryAndLoader(() => import("../modules/Manifest"));
const BuySuccess = lazyWithRetryAndLoader(
  () => import("../modules/BuySuccess")
);
const Admin = lazyWithRetryAndLoader(
  () => import("../modules/Admin/ManageProducts")
);
const AdminCreateProduct = lazyWithRetryAndLoader(
  () => import("../modules/Admin/ManageProducts/SubmitProduct")
);
const About = lazyWithRetryAndLoader(() => import("../modules/About"));
const Login = lazyWithRetryAndLoader(() => import("../modules/Login"));
const Test = lazyWithRetryAndLoader(() => import("../modules/Test"));

export const routes: AppRoute[] = [
  {
    path: ROUTE_PATHS.HOME,
    component: (
      <MainLayout noMarginBottom>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.SHOP,
    component: (
      <PagesLayout noMarginBottom>
        <Shop />
      </PagesLayout>
    ),
  },
  {
    path: ROUTE_PATHS.TEST,
    component: (
      <WithAdminAuth>
        <Test />
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.LOGIN,
    component: (
      <PagesLayout noMarginBottom>
        <Login />
      </PagesLayout>
    ),
  },

  {
    path: ROUTE_PATHS.COLLECTION,
    component: (
      <PagesLayout noMarginBottom>
        <Collections />
      </PagesLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ABOUT,
    component: (
      <PagesLayout noMarginBottom>
        <About />
      </PagesLayout>
    ),
  },
  {
    path: ROUTE_PATHS.TERMS_OF_SERVICE,
    component: (
      <PagesLayout noMarginBottom>
        <TermsOfService />
      </PagesLayout>
    ),
  },
  {
    path: ROUTE_PATHS.CONTACT_US,
    component: (
      <PagesLayout noMarginBottom>
        <ContactUs />
      </PagesLayout>
    ),
  },
  {
    path: ROUTE_PATHS.MANIFEST,
    component: (
      <PagesLayout noMarginBottom>
        <Manifest />
      </PagesLayout>
    ),
  },
  {
    path: ROUTE_PATHS.REFUNDS_EXCHANGES,
    component: (
      <PagesLayout noMarginBottom>
        <RefundsExchanges />
      </PagesLayout>
    ),
  },
  {
    path: ROUTE_PATHS.BUY_SUCCESS,
    component: (
      <PagesLayout noMarginBottom>
        <BuySuccess />
      </PagesLayout>
    ),
  },
  {
    path: ROUTE_PATHS.PRIVACY_POLICY,
    component: (
      <PagesLayout noMarginBottom>
        <PrivacyPolicy />
      </PagesLayout>
    ),
  },
  {
    path: ROUTE_PATHS.COSTUMER_SERVICE,
    component: (
      <PagesLayout noMarginBottom>
        <CostumerService />
      </PagesLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <Admin />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_PRODUCT_CREATE,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <AdminCreateProduct />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  // {
  //   path: ROUTE_PATHS.PRODUCT,
  //   component: (
  //     <MainLayout >
  //       <Product />
  //     </MainLayout>
  //   ),
  // },
];
