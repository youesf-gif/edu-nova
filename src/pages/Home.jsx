import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsBanner from "../components/StatsBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularCourses from "../components/PopularCourses";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import "../styles/home.css";

function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <StatsBanner />
        <WhyChooseUs />
        <PopularCourses />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default Home;
