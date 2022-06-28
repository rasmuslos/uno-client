export const pingServer = async (server: string): Promise<number> => {
  const { now } = await (await fetch(`${server}/ping`)).json()
  return new Date().getTime() - now
}