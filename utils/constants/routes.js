const routes = {
  home: { path: '/', isProtected: false },
  login: { path: '/login', isProtected: false },
  wishlist: { path: '/wishlist', isProtected: true },
  dashboard: { path: '/dashboard', isProtected: true },
  dashboardEdit: { path: '/dashboard/edit', isProtected: true },
  dashboardOrders: { path: '/dashboard/orders', isProtected: true },
  result: { path: '/results', isProtected: false },
  brands: { path: '/brands', isProtected: false },
};

export default routes;
