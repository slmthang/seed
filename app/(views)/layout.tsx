
 
 import MenuBar from "../ui/components/MenuBar";
 import NavBar from "../ui/components/NavBar";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" min-h-dvh flex-col md:flex-row">
      <MenuBar />
      {children}
      <NavBar />
    </div>
  );
}