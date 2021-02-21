import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://localhost:8080';
  namespace = 'api';
  
  /*buildURL(...args) {
    let url = `${super.buildURL(...args)}.json`;
    //let url = `${super.buildURL(...args)}`;
    console.log("URL - " + url);
    return `${super.buildURL(...args)}.json`;
  }*/
}