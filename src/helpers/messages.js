import log from '../config/loger.config.js'
import MenuBody from '../sections/menuBody.js'
import MenuHeader from '../sections/menuHeader.js'

export const showMenu = () => {
  MenuHeader('Seleccione una opcion')
  MenuBody()
}
