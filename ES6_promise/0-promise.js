export default function getResponseFromApi() {
  return new Promise((resolve, reject) => { resolve('resolved'); reject(new Error('promise unresolved')); });
}
