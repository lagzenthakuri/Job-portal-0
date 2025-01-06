import Header from "./components/header";
import Register from "./auth/register";
import Home from "./components/home";
import ViewDetails from "./jobHandle/viewdetails";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  
} from "react-router-dom";

import Footer from "./components/footer";
import Login from "./auth/Login";
import PostaJob from "./jobHandle/postajob";
import Apply from "./components/apply";
import Errore from "./handleError/error";
import SearchList from "./search/searchlist";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Charts from "./components/charts";
import FAQ from "./FAQ/FAQ";
import Employers from "./FAQ/employer";
import Jobseekers from "./FAQ/jobseeker";
import FAQbanner from "./handleError/FAQbanner";
import SearchData from "./FAQ/SearchData";
import UserProfilePage from "./components/UserProfilePage";
function App() {
  const [progress, setProgress] = useState(0);
  const [user,setUser] = useState(null)

  return (
    <>
      <Header  user={user}  setUser={setUser}/>

      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    
      
          <Routes>
           
              <Route path="/" element={<Home setProgress={setProgress} />} />
              <Route
                path="/home"
                element={<Home setProgress={setProgress} />}
              />
              <Route
                path="/login"
                element={<Login setProgress={setProgress} setUser={setUser} />}
              />
              <Route
                path="/register"
                element={<Register setProgress={setProgress} />}
              />
              <Route path="/userprofile" element={<UserProfilePage />} />

              <Route
                path="/charts"
                element={<Charts setProgress={setProgress} />}
              />
              <Route path="/FAQ" element={<FAQ setProgress={setProgress} />} />
              <Route
                path="/FAQ"
                element={<FAQbanner setProgress={setProgress} />}
              />
              <Route
                path="/employers"
                element={<Employers setProgress={setProgress} />}
              />
              <Route
                path="/jobseekers"
                element={<Jobseekers setProgress={setProgress} />}
              />
              <Route
                path="/PostaJob"
                element={<PostaJob setProgress={setProgress} />}
              />
              <Route
                path="/details"
                element={<ViewDetails setProgress={setProgress} />}
              />
              <Route
                path="/apply"
                element={<Apply setProgress={setProgress} />}
              />
              <Route
                path="/error"
                element={<Errore setProgress={setProgress} />}
              />
              <Route
                path="/searchlist"
                element={<SearchList setProgress={setProgress} />}
              />
              <Route
                path="/searchData"
                element={<SearchData setProgress={setProgress} />}
              />
  
          </Routes>
      

      <Footer />
    </>
  );
}
export default App;
