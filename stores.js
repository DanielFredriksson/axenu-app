import { store } from 'rfx-core'
import LeftStore from './source/LeftStore'
import HomeStore from './source/HomeStore'

export default store.setup({
   homeStore: HomeStore,
   leftStore: LeftStore
})