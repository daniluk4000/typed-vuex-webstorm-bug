import {getAccessorType} from 'typed-vuex'
import * as submodule from './submodule/submodule'

export const state = () => ({
  example: true
})

export const accessorType = getAccessorType({
  state,
  modules: {
    submodule: {
      //Try to remove this and see how autocompletion works for this module
      namespaced: true,
      modules: {
        submodule,
      },
    }
  },
})
