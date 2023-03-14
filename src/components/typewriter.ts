
function sleep(ms: number): Promise<true> {
  return new Promise(a => setTimeout(() => a(true), ms))
}

export default async function typing<T>(text: string, func: (x: string) => T): Promise<void> {
  for (let i = 1; i <= text.length; ++i) {
    await sleep(100)
    func(text.slice(0, i))
  }
}
