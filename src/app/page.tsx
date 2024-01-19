import CallToAction from "@/components/CallToAction";
import FeaturedPosts from "@/components/FeaturedPosts";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeaturedProducts />
      <Services />
      <FeaturedPosts />
      <Testimonial />
      <CallToAction />
    </main>
  );
}
