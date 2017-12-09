import myDis from './myDispatcher'

const ActionType = {
  gotQRCODE: 'gotQRCODE'
}

let Action = {
  receiveCode: (newCode) => {
    if(newCode === null) return
    myDis.dispatch({
      actionType: ActionType.gotQRCODE,
      value: newCode
    })
  }
}
export default Action
