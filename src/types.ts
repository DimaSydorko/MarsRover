export type PhotoT ={
  id: number
  sol: number
  img_src: string
  earth_date: string
  rover: RoverT
  camera: CameraT
} 
export type CameraT = {
  id: number
  name: string
  rover_id: number
  full_name: string
}
export type RoverT = {
  id: number
  name: string
  landing_date: string
  launch_date: string
  status: string
}

export type DataRequestApiT = {
  camera: string
  rover: string
  sol: number
  page: number
}

export type SelectsT  = {
  label: string,
  value: string,
}[]