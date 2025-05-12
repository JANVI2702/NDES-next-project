import { Metadata } from 'next';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'View our portfolio of projects and work',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
} 