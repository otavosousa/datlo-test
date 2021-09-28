export default function City() {

  async function getCoords(ibgeCode) {
    const cityResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_IBGE}/${ibgeCode}/metadados`,
      {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const cityJson = await cityResponse.json();
    const cityData = await cityJson;

    const coordinates = [
      cityData[0].centroide.latitude,
      cityData[0].centroide.longitude,
    ];

    return coordinates;
  }

  async function show(ibgeCode){
    if(process.env.NEXT_PUBLIC_DEFAULT_IBGE_CODE != ibgeCode) {
      return
    }

    const getLocalData = localStorage.getItem('@datlo')
    

    if(!getLocalData) {
      
      const cityResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/map/city?ibgeCode=${ibgeCode}`, {
        method: "GET",
        mode: 'cors',
        headers: { 'Content-Type': 'application/json',
      }})
      const cityJson = await cityResponse.json()
      const cityData =  await cityJson
  
      localStorage.setItem('@datlo', JSON.stringify(cityData))
  
      return cityData
    }

    const cityData = JSON.parse(getLocalData)
    return cityData

  }

  return {
    getCoords,
    show,
  };
}
