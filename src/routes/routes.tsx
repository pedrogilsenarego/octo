/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppRoute } from "./types";
import { ROUTE_PATHS } from "../constants/routes";
import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";
import { MainLayout } from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout"

const Home = lazyWithRetryAndLoader(() => import("../modules/Home"));
const Shop = lazyWithRetryAndLoader(() => import("../modules/Shop"));
const About = lazyWithRetryAndLoader(() => import("../modules/About"));
const Product = lazyWithRetryAndLoader(() => import("../modules/Product"));


export const routes: AppRoute[] = [
  {
    path: ROUTE_PATHS.HOME,
    component: (
      <MainLayout >
        <Home />
      </MainLayout>
    ),
  },

  {
    path: ROUTE_PATHS.ABOUT,
    component: <MainLayout>
      <About />
    </MainLayout>,
  },
  {
    path: ROUTE_PATHS.SHOP,
    component: (
      <MainLayout >
        <Shop />
      </MainLayout>
    ),
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
