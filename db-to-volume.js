const dbToVolume = db => 10.0 ** 0.05 * db

const volumeToDb = volume => 20.0 * Math.log(volume)
