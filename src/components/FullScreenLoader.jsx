import { Loader } from "./Loader"

export const FullScreenLoader = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center content-center">
      <Loader size={100} />
    </div>
  )
}
