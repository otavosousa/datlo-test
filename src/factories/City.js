export default function City() {
  async function show(ibgeCode) {
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

    return cityData[0];
  }

  return {
    show,
  };
}
