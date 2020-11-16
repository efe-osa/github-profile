/**
 *
 * @param {string} query
 * @param {{[key:string]:string}} variables
 */

export default function queryAPI(query, variables) {
  return fetch('https://developer.github.com/v4/explorer/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
}
