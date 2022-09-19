import { Fragment, useState, useEffect } from 'react';

import Header from './components/UI/Header';
import ResultsDisplay from './components/resultsDisplay/ResultsDisplay';
import Input from './components/input/Input';
import Map from './components/map/Map';

function App() {
  const [data, setData] = useState({});

  function enteredIpHandler(ipAddress) {
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
            return setData({
              ip: item.ip,
              city: item.city,
              state: item.region_code,
              country: item.country_code,
              zipcode: item.postal,
              timezone: item.utc_offset,
              isp: item.org,
              lat: parseFloat(item.latitude),
              lng: parseFloat(item.longitude),
            });
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Fragment>
      <Header>
        <Input
          type="text"
          placeholder="Search for any IP address or domain"
          onEnteredIp={enteredIpHandler}
        ></Input>
        {data && (
          <ResultsDisplay
            ip={data.ip}
            city={data.city}
            state={data.state}
            postal={data.zipcode}
            timezone={data.timezone}
            isp={data.isp}
          />
        )}
      </Header>
      <Map lat={data.lat} lng={data.lng} />
    </Fragment>
  );
}

export default App;
