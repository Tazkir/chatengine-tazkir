import React, { useEffect } from "react";
import Router from 'next/router'

const RedirectDMs = ()=>{
    useEffect(() => {
        Router.push('/docs/customize_ui/components')
    },[]);

    return <div />
}

export default RedirectDMs