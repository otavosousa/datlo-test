export default function City() {

  async function getCoords(ibgeCode) {
    const cityResponse = await fetch(
      `https://servicodados.ibge.gov.br/api/v3/malhas/municipios/${ibgeCode}/metadados`,
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

  return {
    getCoords,
  };
}
