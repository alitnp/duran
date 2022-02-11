const routes = {
  home: { path: '/', isProtected: false },
  login: { path: '/login', isProtected: false },
  wishlist: { path: '/dashboard/wishlist', isProtected: true },
  dashboard: { path: '/dashboard', isProtected: true },
  dashboardEdit: { path: '/dashboard/edit', isProtected: true },
  dashboardOrders: { path: '/dashboard/orders', isProtected: true },
  dashboardRequests: { path: '/dashboard/requests', isProtected: true },
  result: { path: '/results', isProtected: false },
  brands: { path: '/brands', isProtected: false },
  product: { path: '/product', isProtected: false },
  request: { path: '/request', isProtected: false },
};

export default routes;
