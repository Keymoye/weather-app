export class WeatherError extends Error {}

export class CityNotFoundError extends WeatherError {
  constructor() {
    super("City not found");
  }
}

export class UnauthorizedError extends WeatherError {
  constructor() {
    super("Invalid API key");
  }
}

export class NetworkError extends WeatherError {
  constructor() {
    super("Network error");
  }
}

export class UnknownWeatherError extends WeatherError {
  constructor() {
    super("Unknown weather error");
  }
}
