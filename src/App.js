import { Fragment, useState } from 'react';

import Header from './components/UI/Header';
import ResultsDisplay from './components/resultsDisplay/ResultsDisplay';
import Input from './components/input/Input';
import Map from './components/map/Map';

function App() {
  const [data, setData] = useState({});

  function enteredIpHandler(ipAddress) {
    // const ip = +ipAddress;
    if (ipAddress.length === 0) {
      return;
    }

    fetch(`https://ipapi.co/${ipAddress}/json/`)
      .then(function (response) {
        response.json().then((data) => {
          console.log(data);
          const dataArr = [data];
          const formatedData = dataArr.map((item) => {
            return setData({
              ip: item.ip,
              city: item.city,
              zipcode: item.postal,
              timezone: item.utc_offset,
              isp: item.org,
              lat: item.latitude,
              lng: item.longitude,
            });
          });
          console.log(formatedData);
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
        <ResultsDisplay ip={data.ip} />
      </Header>
      <Map />
    </Fragment>
  );
}

export default App;
