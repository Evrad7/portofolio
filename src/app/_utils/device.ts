

function isMobile() : boolean  {
    if (typeof navigator !==  "undefined"){
        const agent: string = navigator.userAgent;
        return /Android|iPhone|iPad|iPod/i.test(agent)
    }
    return false
 
}

export {isMobile}