import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const DefaultLayout = (props: Props) => {
    return (
        <div className=" md:max-w-[1440px] md:mx-auto">
            {props.children}
        </div>
    )
}
export default DefaultLayout