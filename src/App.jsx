import React from "react";
import LandingPage from "./pages/LandingPage";
// import PhotoGallery from "./pages/PhotoGallery";
// import UploadPhoto from "./pages/UploadPhoto";
import Us from "./pages/Us";
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * Simple route-like behavior: this keeps the app single-file (no external router)
 * If you prefer react-router, you can swap to that quickly.
 */
const App = () => {
  // Basic in-app routing using hash to keep things simple
  const [route, setRoute] = React.useState(window.location.hash || "#/");

  React.useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const renderRoute = () => {
    // if (route.startsWith("#/gallery")) return <PhotoGallery />;
    // if (route.startsWith("#/upload")) return <UploadPhoto />;
    if (route.startsWith("#/us")) return <Us />;
    return <LandingPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-pink-50 text-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderRoute()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
