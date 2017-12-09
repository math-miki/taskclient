import {Dispatcher} from 'flux'
import myStore from './myStore'

const myDispatcher = new Dispatcher()

const ActionType = {
  gotQRCODE: 'gotQRCODE'
}

myDispatcher.register(payload => {
  // console.log(payload)
  switch(payload.actionType) {
    case ActionType.gotQRCODE:
      myStore.codeValue = payload.value
      myStore.gotQRCODE()
      break
  }
})

export default myDispatcher
