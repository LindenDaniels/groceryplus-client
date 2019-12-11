import config from '../config'

const ListService = {
  getLists() {
    return fetch(`${config.API_ENDPOINT}/lists`, {
      headers: {
      },
    })
      .then(res => {
        console.log("lists response:", res);
       return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
  },
  getList(listId) {
    return fetch(`${config.API_ENDPOINT}/lists/${listId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default ListService