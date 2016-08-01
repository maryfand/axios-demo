import axios from 'axios';

function getRepos(username){
  // 这里使用了 ES6 的字符串模板
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=5`);
}


function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`);
}

export default function getGithubInfo(username){
  // 将请求回来的数据做了一个 merge 操作
  return axios.all([
    getUserInfo(username),
    getRepos(username)
  ])
  .then((arr) => ({
      bio: arr[0].data,
      repos: arr[1].data}
  ));
}
