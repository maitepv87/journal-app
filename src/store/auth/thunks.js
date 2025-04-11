// import { pokemonApi } from "../../../api/pokemonApi";
import { checkingCredentials } from "./";

export const checkingAuthentication = () => {
  return async (dispatch, getState) => {
    console.log("checkingAuthentication");

    dispatch(checkingCredentials());
    // try {
    //   const response = await pokemonApi.get(
    //     `/pokemon?limit=10&offset=${page * 10}`
    //   );

    //   dispatch(
    //     setPokemons({ pokemons: response.data.results, page: page + 1 })
    //   );
    // } catch (error) {
    //   dispatch(setError("Failed to load pokemons"));
    // }
  };
};
