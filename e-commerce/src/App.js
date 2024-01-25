import Header from "./layouts/Header";
import "./App.css";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect } from "react";
import axiosWithAuth from "./api/axiosWithAuth";
import { useDispatch, useSelector } from "react-redux";
import { userSuccess } from "./store/actions/userActions";

function App() {
  const [token, setToken] = useLocalStorage("token", "");
  const dispatch = useDispatch();
  let isLoggedIn = useSelector(
    (store) => store.userReducer.user
  ).hasOwnProperty("token");
  useEffect(() => {
    if (token) {
      axiosWithAuth()
        .get("/verify")
        .then((res) => {
          dispatch(userSuccess(res.data));
          setToken(res.data.token);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
        });
    }
  }, [isLoggedIn]);
  return (
    <div className="App max-sm:max-w-xs no-underline	">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
