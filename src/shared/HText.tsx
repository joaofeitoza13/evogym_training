import { TChildren } from "./types"

export const HText = ({ children }: TChildren) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
      {children}
    </h1>
  )
}