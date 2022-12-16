import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'

import {
	Accordion,
	AccordionSection,
	ClosedSchedule,
	DropdownWrapper,
	HoursWrappers,
} from './styles'
import IosArrowDown from '@meronex/icons/ios/IosArrowDown'

export const ScheduleAccordion = (props) => {

	const {
		scheduleFormatted,
		schedule,
		weekIndex
	} = props

	const [isActive, setActiveState] = useState(false)
	const [, t] = useLanguage()

	const daysOfWeek = [
		t('DAY7', 'Sunday'),
		t('DAY1', 'Monday'),
		t('DAY2', 'Tuesday'),
		t('DAY3', 'Wednesday'),
		t('DAY4', 'Thursday'),
		t('DAY5', 'Friday'),
		t('DAY6', 'Saturday'),
	]

	return (
		<AccordionSection>
			<Accordion
				onClick={() => setActiveState(!isActive)}
			>
				<DropdownWrapper>
					<h4>{daysOfWeek[weekIndex]}</h4>
					<IosArrowDown />
				</DropdownWrapper>
				<HoursWrappers style={{ display: isActive ? 'flex' : 'none', paddingLeft: 60 }}>
					{schedule?.lapses?.map((lapse, i) => (
						schedule?.enabled ?
							<p key={`${i}-${scheduleFormatted(lapse.open)}`}>
								{scheduleFormatted(lapse.open) +
									' - ' +
									scheduleFormatted(lapse.close)}
							</p>
							:
							<ClosedSchedule>
								{t('CLOSED', 'Closed')}
							</ClosedSchedule>
					))}
				</HoursWrappers>
			</Accordion>
		</AccordionSection>
	)
}
