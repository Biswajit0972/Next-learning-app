"use client"

import React from 'react'

const Form = ({
                  children,
                  className,
                  Onsubmit
              }: {
    children: React.ReactNode
    className?: string
    Onsubmit?: (v: React.FormEvent<HTMLFormElement>) => void
}) => {
    return (
        <form onSubmit={Onsubmit} className={className}>{children}</form>
    )
}
export default Form
