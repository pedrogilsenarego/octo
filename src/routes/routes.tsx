/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppRoute } from "./types";
import { ROUTE_PATHS } from "../constants/routes";
import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";
import { MainLayout } from "../layouts/MainLayout";
import { PagesLayout } from "../layouts/PagesLayout";
import AdminLayout from "../layouts/AdminLayout"

const Home = lazyWithRetryAndLoader(() => import("../modules/Home"));
const Shop = lazyWithRetryAndLoader(() => import("../modules/Shop"));
//const Product = lazyWithRetryAndLoader(() => import("../modules/Product"));
const Collections = lazyWithRetryAndLoader(() => import("../modules/Collections"))
const TermsOfService = lazyWithRetryAndLoader(() => import("../modules/TermsOfService"))
const CostumerService = lazyWithRetryAndLoader(() => import("../modules/CostumerService"))
const RefundsExchanges = lazyWithRetryAndLoader(() => import("../modules/RefundsExchanges"))
const PrivacyPolicy = lazyWithRetryAndLoader(() => import("../modules/PrivacyPolicy"))
const ContactUs = lazyWithRetryAndLoader(() => import("../modules/ContactUs"))
const Manifest = lazyWithRetryAndLoader(() => import("../modules/Manifest"))
const BuySuccess = lazyWithRetryAndLoader(() => import("../modules/BuySuccess"))
const Admin = lazyWithRetryAndLoader(() => import("../modules/Admin/ManageProducts"))
const About = lazyWithRetryAndLoader(() => import("../modules/About"))


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
    path: ROUTE_PATHS.COLLECTION,
    component: <PagesLayout noMarginBottom>
      <Collections />
    </PagesLayout>,
  },
  {
    path: ROUTE_PATHS.ABOUT,
    component: <PagesLayout noMarginBottom>
      <About />
    </PagesLayout>,
  },
  {
    path: ROUTE_PATHS.TERMS_OF_SERVICE,
    component: <PagesLayout noMarginBottom>
      <TermsOfService />
    </PagesLayout>,
  },
  {
    path: ROUTE_PATHS.CONTACT_US,
    component: <PagesLayout noMarginBottom>
      <ContactUs />
    </PagesLayout>,
  },
  {
    path: ROUTE_PATHS.MANIFEST,
    component: <PagesLayout noMarginBottom>
      <Manifest />
    </PagesLayout>,
  },
  {
    path: ROUTE_PATHS.REFUNDS_EXCHANGES,
    component: <PagesLayout noMarginBottom>
      <RefundsExchanges />
    </PagesLayout>,
  },
  {
    path: ROUTE_PATHS.BUY_SUCCESS,
    component: <PagesLayout noMarginBottom>
      <BuySuccess />
    </PagesLayout>,
  },
  {
    path: ROUTE_PATHS.PRIVACY_POLICY,
    component: <PagesLayout noMarginBottom>
      <PrivacyPolicy />
    </PagesLayout>,
  },
  {
    path: ROUTE_PATHS.COSTUMER_SERVICE,
    component: <PagesLayout noMarginBottom>
      <CostumerService />
    </PagesLayout>,
  },
  {
    path: ROUTE_PATHS.ADMIN,
    component: <AdminLayout>
      <Admin />
    </AdminLayout>,
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
