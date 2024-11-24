import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow mt-[80px] mb-[589px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
