export default function Cities() {
  async function index(page = 1) {
    const citiesResponse = await fetch(
      `https://www.api.development.datlo.com/Cities?pageNumber=${page}`,
      {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      },
    );
    const citiesJson = await citiesResponse.json();
    const citiesData = await citiesJson;

    // const citieResponse = await fetch('https://www.api.development.datlo.com/map/city?ibgeCode=4115200', {
    //   method: "GET",
    //   mode: 'cors',
    //   headers: { 'Content-Type': 'application/json',
    // }})
    // const citieJson = await citieResponse.json()
    // const citieData =  await citieJson
    // console.log(citieData)

    return citiesData.items;
  }

  return {
    index,
  };
}
