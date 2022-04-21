(async () => {
  const { data } = await axios.get('http://suta-production-5093.up.railway.app:80');
  const { servers, users } = data;

  const serversDOM = document.getElementById('servers');
  const usersDOM = document.getElementById('users');

  serversDOM.innerText = servers;
  usersDOM.innerText = users;
})();
