function sleep(ms: number): Promise<true> {
  return new Promise(a => setTimeout(() => a(true), ms))
}

async function typing<T>(text: string, func: (x: string) => T): Promise<void> {
  for (let i = 1; i <= text.length; ++i) {
    await sleep(100)
    func(text.slice(0, i))
  }
}

async function multiTyping<T>(text: string[], func: (x:string) => T): Promise<void> {
    for(let i = 0; i<=text.length; i++){
        let current:string = text[i];
        await sleep(100);
        typing(current, func)
    }
}


const exports = {
    typing,
    multiTyping
}

export default exports;
