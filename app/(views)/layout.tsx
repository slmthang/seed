
 
 import { MenuBar, NavBar } from '@/app/ui/components';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" h-dvh flex-col md:flex-row">
      <MenuBar />
      {children}
      <NavBar />
    </div>
  );
}