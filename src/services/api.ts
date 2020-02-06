import { CharacterApi } from './character.model';
import { FilmApi } from './film.model';
import { PlanetApi } from './planet.model';
import { SpeciesApi } from './species.model';
import { StarshipApi } from './starship.model';
import { VehicleApi } from './vehicle.model';

import { setupCharacter } from './character.api';
import { setupFilm } from './film.api';
import { setupPlanet } from './planet.api';
import { setupSpecies } from './species.api';
import { setupStarship } from './starship.api';
import { setupVehicle } from './vehicle.api';

export interface ModuleApi {
  character: CharacterApi;
  film: FilmApi;
  planet: PlanetApi;
  species: SpeciesApi;
  starship: StarshipApi;
  vehicle: VehicleApi;
}

export const moduleApi: ModuleApi = {
  character: setupCharacter(),
  film: setupFilm(),
  planet: setupPlanet(),
  species: setupSpecies(),
  starship: setupStarship(),
  vehicle: setupVehicle(),
};
