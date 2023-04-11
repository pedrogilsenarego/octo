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
