import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  //creating IP state
  const [query, setIP] = useState("");
  const [country, setCountry] = useState("");
  const [regionName, setRegion] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  const [as, setAs] = useState("");
  const mobile = useState(false);
  const proxy = useState(false);
  const hosting = useState(false);


  const getData = async () => {
    const res = await axios.get("http://ip-api.com/json/");
    console.log(res.data);
    setCountry(res.data.country);
    setRegion(res.data.regionName);
    setTimezone(res.data.timezone);
    setIsp(res.data.isp);
    setAs(res.data.as);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Network Details</h1>
        <h2>Country : {country}</h2>
        <h2>Region : {regionName}</h2>
        <h2> Time Zone : {timezone}</h2>
        <h2> ISP Name : {isp}</h2>
        <h2> AS : {as}</h2>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
