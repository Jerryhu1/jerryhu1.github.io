import {ReactNode} from "react";

const Pill = ({children}: {children: ReactNode}) => {
  return <div className="border border-primary-300 rounded-full w-fit px-2 py-0.5">
    {children}
  </div>
}

export default Pill