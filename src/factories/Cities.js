export default function Cities() {
  async function index(page = 1) {
    const citiesResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/Cities?pageNumber=${page}`,
      {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      },
    );
    const citiesJson = await citiesResponse.json();
    const citiesData = await citiesJson;
    return citiesData.items;
  }

  async function search(string, page = 1) {
    const cityResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/Cities?searchString=${string}&pageNumber=${page}`,
      {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      },
    );
    const cityJson = await cityResponse.json();
    const cityData = await cityJson;

    return cityData;
  }

  return {
    search,
    index,
  };
}
