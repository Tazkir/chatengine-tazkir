import React, { useEffect } from "react";
import Router from 'next/router'

const RedirectDMs = ()=>{
    useEffect(() => {
        Router.push('/docs/tutorials/direct_messages')
    },[]);

    return <div />
}

export default RedirectDMs