
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ScrollToTop from "../components/ScrollToTop";

// function MainLayout() {
//   return (
//     <>
//       <ScrollToTop />
//       <Navbar />

//       <main>
//         <Outlet />
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default MainLayout;


// new code

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b14",
        color: "white",
        padding: "20px",
      }}
    >
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
