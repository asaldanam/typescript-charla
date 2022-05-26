import PokeApi from "./pokeapi/index";

(async () => {
  const list = await PokeApi.request('/api/v2/pokemon', 'get', {})
  const name = list.results[2].name;
  const detail = await PokeApi.request('/api/v2/pokemon/:name', 'get', { route: { name } })
  console.log(detail.abilities.map(ability => ability.ability.name))

  // await PokeApi.request('/api/v2/pokemon', 'post', {})
})()