import { ReactNode, useRef } from "react"
import UpdateFollowerWrapper from "../UpdateFollowerWrapper"


const UpdateFollowerLinkWrapper=({children}: {children: ReactNode})=>{
    const ref=useRef(null)

    return <UpdateFollowerWrapper className="mouse-follower" 
                style={{display:"inline"}}
                mouseOptions={{customPosition:ref,
                mixBlendMode: 'difference',
                backgroundColor: "black",
                scale: 5,
                followSpeed: 1
                }}
                >
            <div ref={ref} >
                {children}
            </div>
    </UpdateFollowerWrapper>

}

export default UpdateFollowerLinkWrapper