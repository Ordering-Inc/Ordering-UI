import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './template/router'
import { OrderingProvider } from 'ordering-components'
import { Ordering } from 'ordering-api-sdk'

const wrapper = document.getElementById('app')
const configFile = {
  project: 'demo',
  api: {
    url: 'https://apiv4.ordering.co',
    language: 'en',
    version: 'v400'
  },
  socket: {
    url: 'https://socket.ordering.co'
  }
}
const ordering = new Ordering({
  url: 'https://apiv4.ordering.co',
  project: 'demo',
  language: 'en',
  version: 'v400'
})

ReactDOM.render(
  <OrderingProvider settings={configFile}>
    <Router ordering={ordering} />
  </OrderingProvider>
  , wrapper)

// ReactDOM.render(<Router />, wrapper)

// import {
//   ButtonPrimary,
//   Button, ButtonSecundary,
//   ButtonOutline,
//   ButtonPrimaryOutline,
//   ButtonSecundaryOutline,
//   ButtonCircle,
//   ButtonCirclePrimary,
//   ButtonCircleSecundary,
//   ButtonCircleOutline,
//   ButtonCircleOutlinePrimary,
//   ButtonCircleOutlineSecundary
// } from './src/Buttons'
// import {
//   Input,
//   InputPrimary,
//   InputSecundary,
//   InputGroupLeft,
//   InputGroupRight,
//   InputGroupPrimary
// } from './src/Inputs'
// import {
//   Select,
//   Selected,
//   Options,
//   Option
// } from './src/Selects'
// import {
//   FaParking,
//   FaMapMarkerAlt,
//   FaCarSide,
//   FaMotorcycle,
//   FaRoad,
//   FaStore
// } from 'react-icons/fa'
// import { Select } from './src/Select'

// const App = () => {
//   const options = [
//     { value: 1, content: <><FaMotorcycle /> Delivery</> },
//     { value: 2, content: <><FaCarSide /> Pickup</> },
//     { value: 3, content: <><FaStore /> Eat in</> },
//     { value: 4, content: <><FaParking /> Curbside</> },
//     { value: 5, content: <><FaRoad /> Drive thru</> }
//   ]
//   return (
//     <>
//       <h2>Buttons</h2>
//       <Button>Test</Button>
//       <ButtonOutline>Test</ButtonOutline>
//       <ButtonPrimary>Test</ButtonPrimary>
//       <ButtonPrimaryOutline>Test</ButtonPrimaryOutline>
//       <ButtonSecundary>Test</ButtonSecundary>
//       <ButtonSecundaryOutline>Test</ButtonSecundaryOutline>
//       <ButtonCircle><FaMapMarkerAlt /></ButtonCircle>
//       <ButtonCirclePrimary><FaMapMarkerAlt /></ButtonCirclePrimary>
//       <ButtonCircleSecundary><FaMapMarkerAlt /></ButtonCircleSecundary>
//       <ButtonCircleOutline><FaMapMarkerAlt /></ButtonCircleOutline>
//       <ButtonCircleOutlinePrimary><FaMapMarkerAlt /></ButtonCircleOutlinePrimary>
//       <ButtonCircleOutlineSecundary><FaMapMarkerAlt /></ButtonCircleOutlineSecundary>
//       <h2>Inputs</h2>
//       <Input type='text' />
//       <InputPrimary type='text' />
//       <InputSecundary type='test' />
//       <InputGroupPrimary>
//         <InputGroupLeft>
//           <ButtonCirclePrimary><FaMapMarkerAlt /></ButtonCirclePrimary>
//         </InputGroupLeft>
//         <InputPrimary type='text' />
//         <InputGroupRight>
//           <ButtonCirclePrimary><FaMapMarkerAlt /></ButtonCirclePrimary>
//         </InputGroupRight>
//       </InputGroupPrimary>
//       <h2>Selects</h2>
//       <Select placeholder='Select some option' options={options} defaultValue={2} onChange={(value) => console.log(value)} />
//     </>
//   )
// }
