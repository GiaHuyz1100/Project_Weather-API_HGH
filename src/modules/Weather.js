import React from "react";
import { Card, Col, Row } from "antd";
export const WeatherInfoIcons = {
  sunset:
    "https://cdn-icons-png.flaticon.com/512/1213/1213596.png?w=826&t=st=1685153152~exp=1685153752~hmac=27b90fb61e91f96fc4f420bb34e5be0ffbf9d96e9f64535cd74b2c34df03b481",
  sunrise:
    "https://cdn-icons-png.flaticon.com/512/577/577597.png?w=826&t=st=1685153227~exp=1685153827~hmac=9997ce605a552437d8ef808ae498c97e0f67f4ff44d74885164527122c1c2d82",
  humidity:
    "https://cdn-icons-png.flaticon.com/512/315/315339.png?w=826&t=st=1685153307~exp=1685153907~hmac=b28365f5788548d27bf621b99d84b9d7cb2be97448c3aff6ffc8d1ecf5c20824",
  wind: "https://cdn-icons-png.flaticon.com/512/1113/1113787.png?w=826&t=st=1685155114~exp=1685155714~hmac=65022a6fbb4f678a8357db0c9e3d4a2ebe9e04c588086f3bbda812f2ee32326f",
  pressure:
    "https://cdn-icons-png.flaticon.com/512/416/416215.png?w=826&t=st=1685153616~exp=1685154216~hmac=8cf14dcfdd8c7829a9c3aaf768776bdd72b12b3c47089d85a3611bb4a9317662",
};

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <div>
      <img class="infoicon" src={WeatherInfoIcons[name]} />
      <span class="ilabel">
        {value}
        {/* <span>{name}</span> */}
      </span>
    </div>
  );
};
const Weather = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <div class="wt1">
        <span class="condition">
          <span class="nd">{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          <p class="des">{`${weather?.weather[0].description}`}</p>
        </span>
      </div>
      <span className="weatherinfolabel">{`${weather?.name}, ${weather?.sys?.country}`}</span>

      <h3>Weather Info</h3>
      <Row
        gutter={30}
        justify="center"
      >
        <Col>
          <Card
            title={isDay ? "Sunset MIN : MAX" : "Sunrise  MIN : MAX"}
            bordered={false}
          >
            <WeatherInfoComponent
              name={isDay ? "sunset" : "sunrise"}
              value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}°C`}
            />
          </Card>
        </Col>
        <Col>
          <Card title="Humidity" bordered={false}>
            <WeatherInfoComponent
              name={"humidity"}
              value={weather?.main?.humidity + "%"}
            />
          </Card>
        </Col>
        <Col>
          <Card title="Wind" bordered={false}>
            <WeatherInfoComponent
              name={"wind"}
              value={weather?.wind?.speed + " Km/h"}
            />
          </Card>
        </Col>
        <Col>
          <Card title="Pressure" bordered={false}>
            <WeatherInfoComponent
              name={"pressure"}
              value={weather?.main?.pressure}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Weather;
