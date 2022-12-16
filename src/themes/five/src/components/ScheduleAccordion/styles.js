import styled from 'styled-components'

export const AccordionSection = styled.div`
  background: #FFF;
`

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const HoursWrappers = styled.div`
  flex-direction: column;

  p {
    margin: 0px 0px 10px 0px;
  }
`

export const ClosedSchedule = styled.p`
  color: ${props => props.theme?.colors?.danger500}
`
