import React, { useState } from "react";
import Axios from "axios";
import Search from "./modules/Search";
import Weather from "./modules/Weather";
import {  Layout, theme } from 'antd';
const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          alignItems: 'center',
        }}
      >
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '10px 10px',
          alignItems: 'center',
          textAlign:'center',
          backgroundImage: `url("https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_1280.jpg")` ,
          backgroundRepeat: 'no-repeat',
          backgroundSize:"cover",
        }}
        
      >
        <div
          style={{
            padding: 50,
            minHeight: 795,
            backgroundImage: 
      "url(./Image/1540005.jpg)",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', }}
        >
      <h1 className="wt" >Weather API Huỳnh Gia Huy</h1>
      {city && weather ? (
        <Weather weather={weather} city={city} />
      ) : (
        <Search updateCity={updateCity} fetchWeather={fetchWeather} />
      )}

        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Huỳnh Gia Huy
      </Footer>
    </Layout>
  );
};
export default App;