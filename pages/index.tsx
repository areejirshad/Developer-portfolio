import Hero from '../components/Hero';
import Header from '../components/Header';
import ExperienceSection from '@/components/WorkExperience';
import ProjectsSection from '../components/ProjectsSection';
import Tech from '@/components/Tech';
import Layout from '@/components/Layout';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <>
    
    <Header></Header>
    
    <Hero></Hero>
    <Layout>
    <ExperienceSection></ExperienceSection>
    <Tech></Tech>
    <ProjectsSection></ProjectsSection>
    <Footer/>
    </Layout>
    </>
  );
}
