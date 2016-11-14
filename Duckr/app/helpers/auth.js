export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Marshall Murphy',
        avatar: 'https://avatars3.githubusercontent.com/u/18636492?v=3&u=aa28ba182fd27698242cd9029c30217be7aa9e95&s=140',
        uid: 'marshallmurphy'
      })
    }, 2000)
  })
}
