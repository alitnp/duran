const Layout = ({ children }) => {
  return (
    <main
      className="relative h-full mx-auto mb-auto d-container grow-0"
      // style={{ direction: 'rtl' }}
    >
      {children}
    </main>
  );
};

export default Layout;
