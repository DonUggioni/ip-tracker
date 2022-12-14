import { Fragment, useState, useEffect } from 'react';

import Header from './components/UI/Header';
import ResultsDisplay from './components/resultsDisplay/ResultsDisplay';
import Input from './components/input/Input';
import Map from './components/map/Map';
import Loading from './components/loading/Loading';
import ErrorMessage from './components/errorMessage/ErrorMessage';

function App() {
  const [data, setData] = useState({});
  const [ipAddress, setIpAddress] = useState('193.135.236.233');
  const [isLoading, setIsLoading] = useState(false);

  function enteredIpHandler(ipAddress) {
    setIpAddress(ipAddress);

    const isNum = /^[0-9.,]+$/.test(ipAddress);
    if (ipAddress.length === 0 || !isNum) {
      return;
    }

    setIsLoading(true);
    fetch(`https://ipapi.co/${ipAddress}/json/`)
      .then(function (response) {
        response.json().then((data) => {
          const dataArr = [data];
          dataArr.map((item) => {
            console.log(item);
            if (item.error === true) {
              return setData({ ip: item.reason });
            }
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
          setIsLoading(false);
        });
      })
      .catch(function (error) {
        setData({ ip: error.message });
        console.log(error);
      });
  }

  useEffect(() => {
    enteredIpHandler(ipAddress);
  }, [ipAddress]);

  const invalidIP = data.ip === 'Reserved IP Address';

  return (
    <Fragment>
      <Header>
        <Input
          type="text"
          placeholder="Search for any IP address"
          onEnteredIp={enteredIpHandler}
        ></Input>
        {isLoading && <Loading />}
        {invalidIP && (
          <ErrorMessage errorMessage={'This is a reserved IP address.'} />
        )}
        {!isLoading && !invalidIP && (
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
