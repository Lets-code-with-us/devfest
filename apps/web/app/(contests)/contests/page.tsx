"use client";
import React, { useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Trophy,
	Clock,
	Users,
	Calendar,
	ArrowRight,
	CheckCircle2,
	Award,
} from "lucide-react";

const Page = () => {
	const [activeTab, setActiveTab] = useState("ongoing");

	const ongoingContests = [
		{
			id: 1,
			title: "Weekly Contest 425",
			description: "Algorithmic problem solving competition",
			startTime: "Jan 12, 2026 08:00 AM IST",
			duration: "1.5 hours",
			participants: 15234,
			prizes: "Top 3 get prizes",
			difficulty: "All levels",
			type: "Rated",
		},
		{
			id: 2,
			title: "Biweekly Contest 145",
			description: "Competitive programming challenge",
			startTime: "Jan 14, 2026 08:00 PM IST",
			duration: "2 hours",
			participants: 12567,
			prizes: "Prizes for top performers",
			difficulty: "All levels",
			type: "Rated",
		},
		{
			id: 3,
			title: "Data Science Competition",
			description: "Machine learning model building challenge",
			startTime: "Jan 15, 2026 12:00 PM IST",
			duration: "3 days",
			participants: 8934,
			prizes: "$50,000 prize pool",
			difficulty: "Advanced",
			type: "Rated",
		},
		{
			id: 4,
			title: "Starters 168",
			description: "Programming contest for all skill levels",
			startTime: "Jan 16, 2026 08:00 PM IST",
			duration: "3 hours",
			participants: 9821,
			prizes: "Laddus for top 100",
			difficulty: "All levels",
			type: "Rated",
		},
	];

	const previousContests = [
		{
			id: 5,
			title: "Weekly Contest 424",
			description: "Algorithmic problem solving competition",
			completedDate: "Jan 5, 2026",
			duration: "1.5 hours",
			participants: 16234,
			winner: "tourist",
			rank1Score: "4/4 problems",
			submissions: 45678,
		},
		{
			id: 6,
			title: "Biweekly Contest 144",
			description: "Competitive programming challenge",
			completedDate: "Jan 7, 2026",
			duration: "2 hours",
			participants: 13245,
			winner: "Benq",
			rank1Score: "4/4 problems",
			submissions: 38921,
		},
		{
			id: 7,
			title: "Image Classification Challenge",
			description: "Deep learning competition for image recognition",
			completedDate: "Jan 3, 2026",
			duration: "30 days",
			participants: 7842,
			winner: "ML_Masters",
			rank1Score: "0.9876 accuracy",
			submissions: 12453,
		},
		{
			id: 8,
			title: "Starters 167",
			description: "Programming contest for all skill levels",
			completedDate: "Jan 2, 2026",
			duration: "3 hours",
			participants: 10234,
			winner: "Gennady",
			rank1Score: "8/8 problems",
			submissions: 34567,
		},
	];

	return (
		<div className="mt-16">
			{/* Main Content */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className="w-full"
				>
					<TabsList className="w-full justify-start bg-transparent border-b border-gray-200 rounded-none h-auto p-0 mb-6">
						<TabsTrigger
							value="ongoing"
							className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-3 text-sm font-medium"
						>
							Ongoing & Upcoming
						</TabsTrigger>
						<TabsTrigger
							value="previous"
							className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-3 text-sm font-medium"
						>
							Past Contests
						</TabsTrigger>
					</TabsList>

					{/* Ongoing Contests */}
					<TabsContent value="ongoing" className="mt-0">
						<div className="space-y-4">
							{ongoingContests.map((contest) => (
								<Card
									key={contest.id}
									className="hover:shadow-md transition-shadow border border-gray-200 rounded-lg"
								>
									<CardHeader className="pb-3">
										<div className="flex items-start justify-between">
											<div className="flex-1">
												<div className="flex items-center space-x-3 mb-2">
													<h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
														{contest.title}
													</h3>
													<Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 text-xs font-medium border-0">
														{contest.type}
													</Badge>
												</div>
												<p className="text-sm text-gray-600 mb-3">
													{contest.description}
												</p>

												<div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
													<div className="flex items-center">
														<Calendar className="w-4 h-4 mr-1.5 text-gray-400" />
														<span>
															{contest.startTime}
														</span>
													</div>
													<div className="flex items-center">
														<Clock className="w-4 h-4 mr-1.5 text-gray-400" />
														<span>
															{contest.duration}
														</span>
													</div>
													<div className="flex items-center">
														<Users className="w-4 h-4 mr-1.5 text-gray-400" />
														<span>
															{contest.participants.toLocaleString()}{" "}
															registered
														</span>
													</div>
													<div className="flex items-center">
														<Trophy className="w-4 h-4 mr-1.5 text-gray-400" />
														<span>
															{contest.prizes}
														</span>
													</div>
												</div>
											</div>

											<div className="ml-6 flex flex-col items-end space-y-2">
												<Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6">
													Register
												</Button>
												<span className="text-xs text-gray-500">
													{contest.difficulty}
												</span>
											</div>
										</div>
									</CardHeader>
								</Card>
							))}
						</div>
					</TabsContent>

					{/* Previous Contests */}
					<TabsContent value="previous" className="mt-0">
						<div className="space-y-4">
							{previousContests.map((contest) => (
								<Card
									key={contest.id}
									className="hover:shadow-md transition-shadow border border-gray-200 rounded-lg"
								>
									<CardHeader className="pb-3">
										<div className="flex items-start justify-between">
											<div className="flex-1">
												<div className="flex items-center space-x-3 mb-2">
													<h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
														{contest.title}
													</h3>
													<Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 text-xs font-medium border-0">
														<CheckCircle2 className="w-3 h-3 mr-1" />
														Completed
													</Badge>
												</div>
												<p className="text-sm text-gray-600 mb-3">
													{contest.description}
												</p>

												<div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
													<div className="flex items-center">
														<Calendar className="w-4 h-4 mr-1.5 text-gray-400" />
														<span>
															{
																contest.completedDate
															}
														</span>
													</div>
													<div className="flex items-center">
														<Clock className="w-4 h-4 mr-1.5 text-gray-400" />
														<span>
															{contest.duration}
														</span>
													</div>
													<div className="flex items-center">
														<Users className="w-4 h-4 mr-1.5 text-gray-400" />
														<span>
															{contest.participants.toLocaleString()}{" "}
															participated
														</span>
													</div>
													<div className="flex items-center">
														<ArrowRight className="w-4 h-4 mr-1.5 text-gray-400" />
														<span>
															{contest.submissions.toLocaleString()}{" "}
															submissions
														</span>
													</div>
												</div>

												<div className="flex items-center space-x-2 text-sm">
													<Award className="w-4 h-4 text-yellow-600" />
													<span className="text-gray-700">
														<span className="font-semibold text-gray-900">
															{contest.winner}
														</span>{" "}
														• {contest.rank1Score}
													</span>
												</div>
											</div>

											<div className="ml-6 flex flex-col items-end space-y-2">
												<Button
													variant="outline"
													className="border-blue-600 text-blue-600 hover:bg-blue-50 text-sm px-6"
												>
													View Details
												</Button>
												<Button
													variant="ghost"
													className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-xs px-6"
												>
													Practice
												</Button>
											</div>
										</div>
									</CardHeader>
								</Card>
							))}
						</div>
					</TabsContent>
				</Tabs>
			</main>
		</div>
	);
};

export default Page;
