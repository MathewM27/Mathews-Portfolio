"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { Info } from "lucide-react"
import { useRef, useState } from "react"

const steps = [
	{
		title: "Client Reach Out",
		label: "Initial contact from client",
		description:
			"This is the first message or connection you send to me. Use the connection page to briefly explain your project and interest.",
	},
	{
		title: "Client Response",
		label: "My response & booking",
		description:
			"I respond to your initial request, gather a sense of your project, and send a booking confirmation for an online call (Google Meet) to discuss further.",
	},
	{
		title: "Client Discovery Call",
		label: "Free discovery call",
		description:
			"Once you confirm the booking, we proceed with a free discovery call to understand your problem, needs, and project overview. I will ask questions and request any relevant documents or information.",
	},
	{
		title: "Project Brainstorming Phase 1",
		label: "Research & strategy",
		description:
			"I research, organize your needs and expectations, and develop a strategy and plan of execution, sharing constraints, features, or needs.",
	},
	{
		title: "Project Scope Communication",
		label: "Clarify & align",
		description:
			"I clarify your needs and ensure the solution aligns with your vision. This process is still free of charge.",
	},
	{
		title: "Finalization of Project Strategy",
		label: "Final plan shared",
		description:
			"I share a brief 1-page strategy plan for execution and implementation. Detailed analysis is billable if you wish to implement yourself. This part is still free.",
	},
	{
		title: "Invoice & Agreement",
		label: "Quotation & contract",
		description:
			"I send an invoice quotation with timeline, milestones, and contract. We agree on deliverables and pricing. Work is done in milestones, with payment per milestone. Each milestone allows two changes; extra changes are billable.",
	},
	{
		title: "Project Completion",
		label: "Delivery & final payment",
		description:
			"After all milestones are complete, I deliver the final work and documentation. Final payment is made at this stage.",
	},
	{
		title: "Review & Recommendation",
		label: "Feedback & testimonial",
		description:
			"I request a review (form or video testimonial). Your feedback is highly appreciated and helps my business. You are welcome to recommend my services.",
	},
	{
		title: "Project Maintenance",
		label: "30 days free support",
		description:
			"For 30 days after launch, I provide free maintenance for bugs or issues. After 30 days, maintenance is billable. Integration with larger projects is billable; only the delivered scope is covered for free.",
	},
]

export default function ProcessPlan() {
	const [activeStep, setActiveStep] = useState<number | null>(null)
	const timelineRef = useRef<HTMLDivElement>(null)
	const inView = useInView(timelineRef, { once: false, margin: "-100px 0px" })
	const controls = useAnimation()

	// Animate the vertical line as it comes into view
	if (inView) controls.start({ height: "100%" })

	return (
		<section id="process" className="py-20 px-2 sm:px-6 lg:px-8 bg-black">
			<div className="max-w-4xl mx-auto">
				<motion.div
					className="text-center mb-10 sm:mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
						My Process Plan
					</h2>
					<p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
						A transparent, step-by-step approach to delivering your project with
						clarity and value.
					</p>
				</motion.div>

				{/* Timeline */}
				<div className="relative">
					{/* Vertical center line */}
					<motion.div
						ref={timelineRef}
						className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-800 -translate-x-1/2 z-0"
						initial={{ height: 0 }}
						animate={controls}
						transition={{ duration: 1, ease: "easeInOut" }}
						style={{ height: inView ? "100%" : 0 }}
					/>

					{/* Mobile timeline: single column */}
					<div className="flex flex-col gap-8 sm:hidden">
						{steps.map((step, index) => (
							<div key={index} className="relative flex flex-col items-center">
								<div className="flex flex-col items-center w-full">
									<div className="flex items-center gap-3 w-full">
										<div className="flex flex-col items-center">
											<div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-black shadow-lg" />
											{index < steps.length - 1 && (
												<div
													className="w-1 bg-gray-800 min-h-[40px] mx-auto"
													style={{ height: 32 }}
												/>
											)}
										</div>
										<motion.div
											className="bg-black rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 group w-full"
											whileHover={{ y: -2, borderColor: "#ea580c" }}
										>
											<div className="flex items-center justify-between mb-2">
												<div>
													<h3 className="text-base font-bold text-white group-hover:text-orange-600 transition-colors">
														{step.title}
													</h3>
													<p className="text-xs text-gray-400">
														{step.label}
													</p>
												</div>
												<button
													className="ml-2 p-2 rounded-full bg-black border border-gray-800 hover:bg-orange-600 transition-colors"
													onClick={() => setActiveStep(index)}
													aria-label="Show details"
													type="button"
												>
													<Info className="w-5 h-5 text-white" />
												</button>
											</div>
										</motion.div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Desktop timeline: two columns */}
					<div className="hidden sm:flex flex-col gap-12">
						{steps.map((step, index) => {
							const isLeft = index % 2 === 0
							return (
								<div key={index} className="relative flex min-h-[120px]">
									{/* Left side */}
									<div
										className={`flex-1 flex justify-end pr-8 ${
											isLeft ? "" : "invisible"
										}`}
									>
										{isLeft && (
											<motion.div
												className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 group w-full max-w-md"
												whileHover={{ y: -2, borderColor: "#ea580c" }}
											>
												<div className="flex items-center justify-between mb-2 sm:mb-3">
													<div>
														<h3 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-600 transition-colors">
															{step.title}
														</h3>
														<p className="text-xs sm:text-sm text-gray-400">
															{step.label}
														</p>
													</div>
													<button
														className="ml-2 p-2 rounded-full bg-black border border-gray-800 hover:bg-orange-600 transition-colors"
														onClick={() => setActiveStep(index)}
														aria-label="Show details"
														type="button"
													>
														<Info className="w-5 h-5 text-white" />
													</button>
												</div>
											</motion.div>
										)}
									</div>

									{/* Timeline node */}
									<div className="relative flex flex-col items-center z-10">
										<div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full border-4 border-black shadow-lg" />
										{/* Vertical line segment */}
										{index < steps.length - 1 && (
											<div className="flex-1 w-1 bg-gray-800 min-h-[60px]" />
										)}
									</div>

									{/* Right side */}
									<div
										className={`flex-1 flex justify-start pl-8 ${
											!isLeft ? "" : "invisible"
										}`}
									>
										{!isLeft && (
											<motion.div
												className="bg-black rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 group w-full max-w-md"
												whileHover={{ y: -2, borderColor: "#ea580c" }}
											>
												<div className="flex items-center justify-between mb-2 sm:mb-3">
													<div>
														<h3 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-600 transition-colors">
															{step.title}
														</h3>
														<p className="text-xs sm:text-sm text-gray-400">
															{step.label}
														</p>
													</div>
													<button
														className="ml-2 p-2 rounded-full bg-black border border-gray-800 hover:bg-orange-600 transition-colors"
														onClick={() => setActiveStep(index)}
														aria-label="Show details"
														type="button"
													>
														<Info className="w-5 h-5 text-white" />
													</button>
												</div>
											</motion.div>
										)}
									</div>
								</div>
							)
						})}
					</div>

					{/* Step Detail Modal/Popover */}
					{activeStep !== null && (
						<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
							<motion.div
								className="bg-black border border-gray-800 rounded-xl p-6 max-w-lg w-full mx-4 text-white relative"
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								transition={{ duration: 0.2 }}
							>
								<button
									className="absolute top-3 right-3 p-2 rounded-full bg-black border border-gray-800 hover:bg-orange-600 transition-colors"
									onClick={() => setActiveStep(null)}
									aria-label="Close"
									type="button"
								>
									<span className="text-white text-lg font-bold">&times;</span>
								</button>
								<h3 className="text-xl font-bold mb-2 text-orange-500">
									{steps[activeStep].title}
								</h3>
								<p className="text-gray-200 mb-2">
									{steps[activeStep].label}
								</p>
								<p className="text-gray-300">
									{steps[activeStep].description}
								</p>
							</motion.div>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
