import { QUESTIONS } from '@/entities/model/questions.data'
import { useState } from 'react'

export function Questions() {
	const [openIndex, setOpenIndex] = useState(null)

	return (
		<div>
			{QUESTIONS.map((question, index) => {
				return (
					<div className='my-1 mx-[50px] text-[20px] text-white' key={index}>
						<div
							onClick={() => {
								setOpenIndex(openIndex === index ? null : index)
							}}
							className={`relative cursor-pointer transition duration-200 mb-[2px] py-2.5 px-5 ${openIndex === index ? 'bg-[rgb(89,89,89)]' : 'bg-[rgb(48,48,48)]'} hover:bg-[rgb(89,89,89)]`}
						>
							{question.name}

							{/* Иконка + / x */}
							<span className='absolute right-4 top-[50%] translate-y-[-50%] w-5 h-5'>
								<span
									className={`
          absolute w-full h-[2px] bg-white top-1/2 left-0 transition duration-300
          ${openIndex === index ? 'rotate-45' : ''}
        `}
								/>
								<span
									className={`
          absolute w-full h-[2px] bg-white top-1/2 left-0 transition duration-300
          ${openIndex === index ? '-rotate-45' : 'rotate-90'}
        `}
								/>
							</span>
						</div>

						{openIndex === index && (
							<div className='py-2.5 px-5 bg-[rgb(48,48,48)]'>
								{question.description}
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}
