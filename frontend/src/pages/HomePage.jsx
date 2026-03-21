import Hero from '../components/Hero';
import InternshipTraining from '../components/InternshipTraining';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="my-10 px-4 sm:px-6 lg:px-8">
        <InternshipTraining />
      </div>
    </>
  );
}
