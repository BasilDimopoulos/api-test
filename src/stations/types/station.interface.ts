export interface Station {
  id: number;
  name: string;
  apparent_t: number;
  lat: number;
  lon: number;
}

export interface StationResponse {
  sort_order?: number;
  wmo?: number;
  name: string;
  history_product?: string;
  local_date_time?: string;
  local_date_time_full?: string;
  aifstime_utc?: string;
  lat: number;
  lon: number;
  apparent_t: number;
  cloud?: string;
  cloud_base_m?: string;
  cloud_oktas?: string;
  cloud_type?: string;
  cloud_type_id?: string;
  delta_t?: number;
  gust_kmh?: number;
  gust_kt?: number;
  air_temp?: number;
  dewpt?: number;
  press?: string;
  press_msl?: string;
  press_qnh?: string;
  press_tend?: string;
  rain_trace?: number;
  rel_hum?: number;
  sea_state?: string;
  swell_dir_worded?: string;
  swell_height?: string;
  swell_period?: string;
  vis_km?: number;
  weather?: string;
  wind_dir?: string;
  wind_spd_kmh?: number;
  wind_spd_kt?: number;
}
