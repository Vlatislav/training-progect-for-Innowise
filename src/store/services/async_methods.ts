export async function incrementFunc (numb:number) {
  console.log(numb,'numb from async func')
  const answer = await new Promise((res)=>{
    setTimeout(()=>{
      res(numb)
    },2000)
  }).then(num=>num)
  console.log(answer,'answer from async func')
  return answer
}