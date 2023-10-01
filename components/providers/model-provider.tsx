"use client"

import { CreateServerModal } from "@/components/models/create-server-model"
import { useEffect, useState } from "react"

export const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
            <CreateServerModal />
        </>
    )
}