export async function asyncFunc (data:any,sec:number) {
  console.log(data,'numb from async func')
  const answer = await new Promise((res)=>{
    setTimeout(()=>{
      res(data)
    },sec)
  }).then(data=>data)
  console.log(answer,'answer from async func')
  return answer
}