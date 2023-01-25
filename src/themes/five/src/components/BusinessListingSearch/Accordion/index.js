import React, { useState } from "react"
import { Title } from "../styles"
import BisUpArrow from "@meronex/icons/bi/BisUpArrow"

export const FilterAccordion = ({ title, children }) => {
  const [open, setOpen] = useState(false)
  const [setRotate, setRotateState] = useState("accordion__icon")

  const activeAccordion = (value) => {
    setRotateState(value ? 'accordion__icon rotate' : 'accordion__icon')
    setOpen(value)
  }

  return (
    <>
      <Title onClick={() => activeAccordion(!open)}>
        <h3>{title}</h3>
        <BisUpArrow className={`${setRotate}`} />
      </Title>
      {open && children}
    </>
  )
}
