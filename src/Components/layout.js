import Header from "./HeaderMain";
import Footer from "./FooterMain";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Layout({ children }) {
  const [counter, setCounter] = useState(0);
  const [notification, setNotification] = useState([]);

  const getNotification = async () => {
    //console.log("getPost id:", id);
    try {
      const response = await axios.get(`/api/notification`);
      console.log(response.data);
      setNotification(response.data.notification);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getTracker = async () => {
    //console.log("getPost id:", id);
    try {
      const response = await axios.get(`/api/visitor-counter`);
      //console.log(response.data);
      setCounter(response.data.name);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    //Runs only on the first render
    getTracker();
    getNotification();
  }, []);

  return (
    <>
      {" "}
      <div className="conatiner-box">
        <Header notification={notification} />
        <main>{children}</main>
        <Footer counter={counter} />
      </div>
    </>
  );
}
