export function getCurrentTime() {
  let today: object = new Date();
  let hours: number = (today.getHours() < 10 ? '0' : '') + today.getHours();
  let minutes: number = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
  return hours + ':' + minutes;
}
