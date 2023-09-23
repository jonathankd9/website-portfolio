import React from "react";
import Williams from "./../assets/coding/williams.png";
import Organick from "./../assets/coding/organick.png";
import Warkinon from "./../assets/coding/warkinon.png";

const Projects = () => {
	return (
		<div className="container">
			<div className="text-center my-10">
				<span className="font-light text-[54px] mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
					I'm <span className="font-bold">Jonathan</span>
				</span>
				<div className="font-light text-primary flex  justify-center md:gap-10 md:flex-row sm:flex-col flex-wrap mb-5">
					<div className="">🖥️ Web Designer</div>
					<div className="">👨🏽‍💻 Frontend Developer</div>
					<div className="">📱 Mobile App Developer</div>
				</div>
				<p className="text-2xl ">
					Expert at converting Figma, XD, PSD to HTML, Reactjs, Nextjs,
					TailwindCSS
				</p>
			</div>

			{/* List of projects */}
			<div className="">
				<div className="">
					<div className="mb-10">
						<span className="text-[54px] font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
							Web Design Projects
						</span>
						<hr />
					</div>

					<div className="">
						<div className="flex gap-10 flex-wrap md:flex-row sm:flex-col">
							<div className="flex-1 w-[45%]">
								<a
									href="https://williams-uidesigner.netlify.app/"
									target="_noblank">
									<div className="w-full flex justify-center bg-second border-16 rounded-3xl mb-5">
										<img
											className="w-[100%] rounded-3xl"
											src={Williams}
											alt=""
										/>
									</div>
								</a>

								<p className="font-medium text-primary text-center text-xl">
									Williams UI Designer
								</p>
							</div>

							<div className="flex-1 w-[45%]">
								<a href="https://organicks.netlify.app/" target="_noblank">
									<div className="w-full flex justify-center bg-second border-16 rounded-3xl mb-5">
										<img
											className="w-[100%] rounded-3xl"
											src={Organick}
											alt=""
										/>
									</div>
								</a>

								<p className="font-medium text-primary text-center text-xl">
									Organick
								</p>
							</div>

							<div className="">
								<a href="https://warkinon-joe.netlify.app/" target="_noblank">
									<div className="w-full flex justify-center bg-second border-16 rounded-3xl mb-5">
										<img
											className="w-[100%] rounded-3xl"
											src={Warkinon}
											alt=""
										/>
									</div>
								</a>

								<p className="font-medium text-primary text-center text-xl">
									Warkinon
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
