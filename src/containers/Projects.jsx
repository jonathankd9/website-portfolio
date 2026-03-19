const Projects = () => {
	return (
		<div className="container">
			<div className="text-center my-10">
				<div className="font-light text-[54px] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
					I&apos;m <span className="font-bold">Jonathan</span>
				</div>
				<div className="font-light text-primary flex justify-center md:gap-10 md:flex-row sm:flex-col flex-wrap mb-5">
					<div>Web Designer</div>
					<div>Frontend Developer</div>
					<div>Mobile App Developer</div>
				</div>
				<p className="text-2xl">
					Expert at converting Figma, XD, PSD to HTML, React, Next.js,
					Tailwind CSS
				</p>
			</div>

			{/* List of projects */}
			<div className="mb-20">
				<div className="mb-10">
					<span className="text-[54px] font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
						Web Design Projects
					</span>
					<hr />
				</div>

				<div className="flex gap-6 flex-wrap md:flex-row sm:flex-col">
					<a
						href="https://williams-uidesigner.netlify.app/"
						target="_blank"
						rel="noreferrer"
						className="flex-1 transition ease-in delay-100 hover:-translate-y-1 hover:scale-105 bg-second p-8 rounded-2xl block">
						<p className="font-bold text-primary text-xl mb-2">Williams UI Designer</p>
						<p className="text-lg">UI design portfolio showcase →</p>
					</a>

					<a
						href="https://organicks.netlify.app/"
						target="_blank"
						rel="noreferrer"
						className="flex-1 transition ease-in delay-100 hover:-translate-y-1 hover:scale-105 bg-second p-8 rounded-2xl block">
						<p className="font-bold text-primary text-xl mb-2">Organick</p>
						<p className="text-lg">Organic food e-commerce website →</p>
					</a>

					<a
						href="https://warkinon-joe.netlify.app/"
						target="_blank"
						rel="noreferrer"
						className="flex-1 transition ease-in delay-100 hover:-translate-y-1 hover:scale-105 bg-second p-8 rounded-2xl block">
						<p className="font-bold text-primary text-xl mb-2">Warkinon</p>
						<p className="text-lg">Modern landing page design →</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;
