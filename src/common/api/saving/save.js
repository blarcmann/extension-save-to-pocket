import { request } from '../_request/request'

/* API CALLS - Should return promises
–––––––––––––––––––––––––––––––––––––––––––––––––– */
export function saveToPocket(saveObject) {
  return request({
    path: 'send/',
    data: {
      actions: [
        {
          action: 'add',
          url: saveObject.url,
          title: saveObject.title,
          ...saveObject.actionInfo,
          ...saveObject.additionalParams
        }
      ]
    }
  }).then(response => {
    return response
      ? { saveObject, status: 'ok', response: response.action_results[0] }
      : undefined
  })
}
