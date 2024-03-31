import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  //creating IP state

  const [ipData, setIpData] = useState({});

  const getData = async () => {
    const res = await axios.get("http://ip-api.com/json/?fields=16984841");
    console.log(res.data);
    setIpData({
      ip: res.data.query,
      country: res.data.country,
      region: res.data.regionName,
      timezone: res.data.timezone,
      isp: res.data.isp,
      as: res.data.as,
      mobile: res.data.mobile,
      proxy: res.data.proxy,
      hosting: res.data.hosting,
    });
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  if (!ipData) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <h1>Here are your Public Network Details</h1>
      <h2>Country : {ipData.country}</h2>
      <h2>Region : {ipData.region}</h2>
      <h2> Time Zone : {ipData.timezone}</h2>
      <h2> ISP Name : {ipData.isp}</h2>
      <h2> AS : {ipData.as}</h2>
      <h2> Is a Mobile Network ? : {String(ipData.mobile)}</h2>
      <h2> Is a Proxy Network ? : {String(ipData.proxy)}</h2>
      <h2> Is a Hosted Network ? : {String(ipData.hosting)}</h2>
    </div>
  );
}

export default App;