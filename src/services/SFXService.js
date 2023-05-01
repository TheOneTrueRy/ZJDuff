import { AppState } from "../AppState.js"


class SFXService{
  setActiveSFX(sfxId){
    let sfx = AppState.SFX.find(s => s.id == sfxId)
    AppState.activeSFX = sfx
  }
}
export const sfxService = new SFXService()