import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import homeIcon from '../client/images/26818.jpg'

const homeImg = document.querySelector('[data-element=home]')
homeImg.src = homeIcon

export { handleSubmit }
