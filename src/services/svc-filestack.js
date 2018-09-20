import * as filestack from 'filestack-js'

const apikey = 'AxqLEuZ8SieYlkcrJG4yxz';
const client = filestack.init(apikey);


export function uploadFile(someFile){
  return client.upload(someFile)
}
