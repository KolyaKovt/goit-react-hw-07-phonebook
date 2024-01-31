export const Loader = ({ size }) => {
  return (
    <span
      className={`w-[${size}px] mx-auto block loading loading-infinity text-accent`}
    ></span>
  )
}
