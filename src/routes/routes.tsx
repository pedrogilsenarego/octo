/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppRoute } from "./types";
import { ROUTE_PATHS } from "../constants/routes";
import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";
import { MainLayout } from "../layouts/MainLayout";
import { PagesLayout } from "../layouts/PagesLayout";
import AdminLayout from "../layouts/AdminLayout"

const Home = lazyWithRetryAndLoader(() => import("../modules/Home"));
const Shop = lazyWithRetryAndLoader(() => import("../modules/Shop"));
const Product = lazyWithRetryAndLoader(() => import("../modules/Product"));
const Collections = lazyWithRetryAndLoader(() => import("../modules/Collections"))
const TermsOfService = lazyWithRetryAndLoader(() => import("../modules/TermsOfService"))
const CostumerService = lazyWithRetryAndLoader(() => import("../modules/CostumerService"))
const PrivacyPolicy = lazyWithRetryAndLoader(() => import("../modules/PrivacyPolicy"))
const BuySuccess = lazyWithRetryAndLoader(() => import("../modules/BuySuccess"))


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
    component: <MainLayout>
      <Collections />
    </MainLayout>,
  },
  {
    path: ROUTE_PATHS.TERMS_OF_SERVICE,
    component: <PagesLayout noMarginBottom>
      <TermsOfService />
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
      <>Teste</>
    </AdminLayout>,
  },
  {
    path: ROUTE_PATHS.PRODUCT,
    component: (
      <MainLayout >
        <Product />
      </MainLayout>
    ),
  },

];
