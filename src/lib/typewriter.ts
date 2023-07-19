function sleep(ms: number): Promise<true> {
  return new Promise(a => setTimeout(() => a(true), ms))
}

async function typing<T>(text: string, func: (x: string) => T, delay:number): Promise<void> {
  for (let i = 1; i <= text.length; ++i) {
    await sleep(delay)
    func(text.slice(0, i))
  }
}

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
async function erasing<T>(text: string, func: (x: string) => T, delay:number): Promise<void> {
  for (let i = text.length-1; i >= 0; i--) {
    await sleep(delay)
    func(text.slice(0,i))
  }
}


const exports = {
    typing,
    multiTyping,
    sleep
}

export default exports;
