const Search = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <form onSubmit={fetchWeather} class="Input">
        <input
          class="Input-text"
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button class="button-9" type={"submit"}>
          Search
        </button>
      </form>
      <br/>
<iframe width="650" height="450" src="https://embed.windy.com/embed2.html?lat=14.732&lon=108.018&detailLat=10.833&detailLon=106.658&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0">

</iframe>
    </>
  );
};
export default Search;
