const routes = {
  home: { path: '/', isProtected: false },
  login: { path: '/login', isProtected: false },
  wishlist: { path: '/wishlist', isProtected: true },
  dashboard: { path: '/dashboard', isProtected: false },
  dashboardEdit: { path: '/dashboard/edit', isProtected: false },
  dashboardOrders: { path: '/dashboard/orders', isProtected: false },
  result: { path: '/result', isProtected: false },
};

export default routes;
