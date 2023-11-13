import { Suspense } from 'react';
import { Outlet } from "react-router-dom";

import Header from './Header/Header';
import Footer from './Footer/Footer';


export const Layout = ({navigation}) => {

  return (
    <>
      <Header nav={navigation}/>
      <main>
        <Suspense fallback={
          <div>Loading...</div>
        }>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default Layout;