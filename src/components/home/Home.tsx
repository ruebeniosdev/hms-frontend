import { Hero } from '@/components/Hero/hero';
import Features from '@/components/auth/Feature/feature';
import RoleAccess from '@/components/RoleAccess/roleaccess';

export const Home = () => {
  return (
    <div>
      <Hero />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Features />
          <RoleAccess />
        </div>
      </section>
    </div>
  );
};
