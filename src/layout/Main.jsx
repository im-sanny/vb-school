import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <h1 className="text-5xl text-red-500">Navbar</h1>
      {/* Outlet */}
      <Outlet />
      {/* Footer */}
      <h1>footer</h1>
    </div>
  );
};

export default Main;
