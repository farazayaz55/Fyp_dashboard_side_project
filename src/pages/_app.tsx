import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from 'next/router';
import SidebarComp from "~/Components/Sidebar";
import { ProSidebarProvider } from 'react-pro-sidebar';
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
const currentPage = router.pathname;
  return(
    <>
    <div className="flex">
    <ProSidebarProvider>
    {currentPage !== '/' && <SidebarComp />}
   <Component {...pageProps}/>;
   </ProSidebarProvider>
   </div>
   </>
   )
};

export default MyApp;
