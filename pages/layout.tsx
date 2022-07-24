import Footer from "../components/footer";
import { Navbar } from "../components/navbar/navbar";


export interface LayoutProps {
  children: JSX.Element;
}
//@ts-ignore
export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;