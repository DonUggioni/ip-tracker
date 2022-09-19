import { Fragment, useState, useEffect } from 'react';

import Header from './components/UI/Header';
import ResultsDisplay from './components/resultsDisplay/ResultsDisplay';
import Input from './components/input/Input';
import Map from './components/map/Map';

function App() {
  const [data, setData] = useState({});
  const [ipAddress, setIpAddress] = useState('209.87.141.228');

  function enteredIpHandler(ipAddress) {
    setIpAddress(ipAddress);

    const isNum = /^[0-9.,]+$/.test(ipAddress);
    if (ipAddress.length === 0 || !isNum) {
      return;
    }

    fetch(`https://ipapi.co/${ipAddress}/json/`)
      .then(function (response) {
        response.json().then((data) => {
          console.log(data);
          const dataArr = [data];
          dataArr.map((item) => {
            console.log(item.latitude);
            return setData({
              ip: item.ip,
              city: item.city,
              state: item.region_code,
              country: item.country_code,
              zipcode: item.postal,
              timezone: item.utc_offset,
              isp: item.org,
              lat: item.latitude,
              lng: item.longitude,
            });
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    enteredIpHandler(ipAddress);
  }, [ipAddress]);

  return (
    <Fragment>
      <Header>
        <Input
          type="text"
          placeholder="Search for any IP address or domain"
          onEnteredIp={enteredIpHandler}
        ></Input>

        <ResultsDisplay
          ip={data.ip}
          city={data.city}
          state={data.state}
          postal={data.zipcode}
          timezone={data.timezone}
          isp={data.isp}
        />
      </Header>
      <Map lat={data.lat} lng={data.lng} />
    </Fragment>
  );
}

export default App;
