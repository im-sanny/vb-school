import Academy from '../components/Academy';
import Banner from '../components/Banner';
import Choose from '../components/Choose';
import Contact from '../components/Contact';
import Facilities from '../components/Facilities';
import NewsAndEvents from '../components/NewsAndEvent';
import SchoolLife from '../components/SchoolLife';

export default function Home() {
  return (
    <div>
      <Banner />
      <Choose />
      <Academy />
      <SchoolLife />
      <Facilities />
      <NewsAndEvents />
      {/* <QuickStats /> */}
      <Contact />
    </div>
  );
}
