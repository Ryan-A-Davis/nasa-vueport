import { AppState } from '../AppState'
import { podsApi } from './AxiosService'

class PhotoService {
  async searchPods (query) {
    try {
      const res = await podsApi.get('apod?api_key=StY9s9kh8VuKzd4M70DRPEt53OVOFMYHYPEKQRL0&date=' + query)
      console.log(res.data)
      AppState.activePhoto = res.data
      console.log(AppState.activePhoto)
    } catch (error) {
      console.error(error)
    }
  }
}

export const photoService = new PhotoService()
