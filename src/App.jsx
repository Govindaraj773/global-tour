import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import "./index.css";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

// import CountryList from "./components/CountryList";
// import AppNav from "./components/AppNav";

export default function App() {

  return (
    <CitiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login-page" element={<Login />} />
        <Route path="/app-layout" element={<AppLayout />}>
          {/* <Route index element={<CityList cities={cities} isLoading={isLoading} />} /> */}
          <Route index element={<Navigate replace to="cities" />} />  
          {/* above line code -- after clicking on tracking btn home page it will directly redirect to the cities page localhost/app-layout/cities*/}
          <Route path="cities" element={<CityList />} />  
          <Route path="cities/:id" element={<City />} />
          <Route path="countries" element={<CountryList  />} />
          <Route path="forms" element={<p>Forms</p>} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </CitiesProvider>
  )
}



// Below code is before applying Context API and custom hooks

// import { useEffect, useState } from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// import Pricing from "./pages/Pricing";
// import Product from "./pages/Product";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import "./index.css";
// import Login from "./pages/Login";
// import CityList from "./components/CityList";
// import CountryList from "./components/CountryList";
// import City from "./components/City";
// import Form from "./components/Form";

// // import CountryList from "./components/CountryList";
// // import AppNav from "./components/AppNav";


// const BASE_URL = "http://localhost:9000"

// export default function App() {
//   const [cities, setCities] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(function() {
//     async function fetchCities() {
//       try {
//         setIsLoading(true)
//         const res = await fetch(`${BASE_URL}/cities`);
//         const data = await res.json();
//         setCities(data);
//       } 
//        catch  {
//         alert("There is error in uploading data");
//       }
//        finally {
//         setIsLoading(false)
//        }
//     }
//     fetchCities();
//   }, [])


//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="pricing" element={<Pricing />} />
//         <Route path="product" element={<Product />} />
//         <Route path="login-page" element={<Login />} />
        
//         <Route path="/app-layout" element={<AppLayout />}>
//           {/* <Route index element={<CityList cities={cities} isLoading={isLoading} />} /> */}
//           <Route index element={<Navigate replace to="cities" />} />  
//           {/* above line code -- after clicking on tracking btn home page it will directly redirect to the cities page localhost/app-layout/cities*/}
//           <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
//           <Route path="cities/:id" element={<City />} />
//           <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>} />
//           <Route path="forms" element={<p>Forms</p>} />
//           <Route path="form" element={<Form />} />
//         </Route>
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }
