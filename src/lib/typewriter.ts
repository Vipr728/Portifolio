//sings a lullaby to the program to make it sleep for a while. (i'm so funny, i know)
function sleep(ms: number): Promise<true> {
  return new Promise(a => setTimeout(() => a(true), ms))
}
//don't ask how im so good at this, i just am. (i'm not) it took me soo long to think up of this, i'm so proud of myself. 
async function typing<T>(text: string, func: (x: string) => T, delay:number): Promise<void> {
  for (let i = 1; i <= text.length; ++i) {
    await sleep(delay)
    func(text.slice(0, i))
  }
}
//function for typing and erasing multiple word.
async function multiTyping<T>(text: string[], func: (x:string) => T, delay:number): Promise<void> {
      let index = 0;
      while (true) {
        let current:string = text[index];
        await sleep(1000);
        typing(current, func, delay)
        await sleep(2000)
        erasing(current, func, delay)
       
        index = (index + 1) % text.length;

    }
  }

//what do ya think it does??? its basically the opposite of typing function, i++ becomes i-- (:/)
async function erasing<T>(text: string, func: (x: string) => T, delay:number): Promise<void> {
  for (let i = text.length-1; i >= 0; i--) {
    await sleep(delay)
    func(text.slice(0,i))
  }
}

//don't worry no export duty paid here. Kinda like Dubai Duty Free.
const exports = {
    typing,
    multiTyping,
    sleep
}

export default exports;
