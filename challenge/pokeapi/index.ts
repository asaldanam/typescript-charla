import { PokeApiSchema } from "./schema.types";

async function request<
  Path extends keyof PokeApiSchema,
  Method extends keyof PokeApiSchema[Path],
  Config extends keyof PokeApiSchema[Path][Method],
  Params extends PokeApiSchema[Path][Method][Extract<Config, 'params'>],
>(path: Path, method: Method, params: Params) {
  type Response = PokeApiSchema[Path][Method][Extract<Config, 'response'>]
  return await fetch(path).then(res => res.json()) as Response;
}

const PokeApi = { request }
export default PokeApi;


