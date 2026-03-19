import {Link} from "react-router-dom";

const Home = () => {
	return (
		<div>
			{/* Hero Section */}
			<div className="container">
				<div className="my-24 flex flex-col justify-center items-center">
					<div className="text-center">
						<div className="font-light text-[54px] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
							I&apos;m <span className="font-bold">Jonathan</span>
						</div>
						<div className="font-light text-primary flex md:gap-10 md:flex-row sm:flex-col flex-wrap mb-8 justify-center">
							<div>Web Designer</div>
							<div>Frontend Developer</div>
							<div>Mobile App Developer</div>
							<div>Niche Blogger</div>
						</div>
						<p className="text-2xl">
							I love building products, growing brands and generating REAL
							SALES. <br />I have 5 years of experience with websites, SEO and
							marketing.
						</p>
					</div>
				</div>
			</div>

			{/* About Me Section */}
			<div className="bg-second">
				<div className="container py-20">
					<span className="text-[54px] font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
						About Me
					</span>
					<hr />
					<p className="mt-5">
						Hello, Jonathan Kofi Donkor. I am a Tech Nerd who is passionate
						about{" "}
						<span className="font-medium text-primary">
							Frontend Technologies, Mobile App Development, Blogging, SEO
						</span>{" "}
						and{" "}
						<span className="font-medium text-primary">Digital Marketing</span>
						, based in Accra, Ghana.
					</p>
					<p>I have always been passionate about technology.</p>
					<p>
						After graduating from University of Ghana, Legon with a degree in
						IT, I decided to pursue a career in web development and digital
						marketing.
					</p>
					<p>
						I enjoy writing about web development and digital marketing on my{" "}
						<a
							className="font-medium text-primary underline"
							href="https://jonathankofidonkor.netlify.app/"
							rel="noreferrer"
							target="_blank">
							blog
						</a>
						.
					</p>
				</div>
			</div>

			{/* What I Do */}
			<div className="container flex flex-col">
				<div className="my-16">
					<div className="mb-10">
						<span className="text-[54px] font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
							What I do
						</span>
						<hr />
					</div>

					<div className="md:grid md:grid-cols-2 gap-5">
						<div className="transition ease-in delay-100 hover:-translate-y-1 hover:scale-105 bg-second p-8 rounded-2xl mb-5">
							<p className="font-bold text-primary text-xl mb-2">Web Development</p>
							<p className="text-lg">
								I specialize in creating custom websites that are both
								functional and visually appealing, proficient in Reactjs,
								Nextjs, Tailwindcss.
							</p>
						</div>
						<div className="transition ease-in delay-100 hover:-translate-y-1 hover:scale-105 bg-second p-8 rounded-2xl mb-5">
							<p className="font-bold text-primary text-xl mb-2">Digital Marketing</p>
							<p className="text-lg">
								I create digital marketing strategies that increase online
								visibility, generate leads and improve conversion rates.
							</p>
						</div>
						<div className="transition ease-in delay-100 hover:-translate-y-1 hover:scale-105 bg-second p-8 rounded-2xl mb-5">
							<p className="font-bold text-primary text-xl mb-2">Blogging</p>
							<p className="text-lg">
								I specialize in creating engaging and informative blog posts
								that resonate with readers and drive traffic to your website.
							</p>
						</div>
						<div className="transition ease-in delay-100 hover:-translate-y-1 hover:scale-105 bg-second p-8 rounded-2xl mb-5">
							<p className="font-bold text-primary text-xl mb-2">SEO</p>
							<p className="text-lg">
								I specialize in maximizing your website&apos;s search engine
								visibility through comprehensive SEO strategies that improve
								rankings.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Web Design Projects */}
			<div className="container mb-20">
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

				<div className="flex justify-center my-10">
					<Link
						to="/projects"
						className="text-center text-xl bg-gradient-to-r from-pink-500 to-violet-500 hover:scale-105 text-white px-6 py-4">
						View All Projects
					</Link>
				</div>
			</div>

			{/* Projects */}
			<div className="container flex flex-col mb-20">
				<div className="mb-10">
					<span className="text-[54px] font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
						Projects
					</span>
					<hr />
				</div>

				<div className="md:grid md:grid-cols-2 gap-5">
					<div className="transition ease-out delay-50 hover:translate-x-1 hover:scale-105 bg-second p-8 rounded-2xl mb-5">
						<p className="font-bold text-primary text-xl mb-2">Cookie Restore Lab</p>
						<p className="text-lg">
							Cookie Restore Lab is a feminine wellness brand created to
							assist women with the best care and plant derived products
							for their delicate parts to eliminate vaginal infections and
							other common feminine issues.
						</p>
					</div>
					<div className="transition ease-out delay-50 hover:translate-x-1 hover:scale-105 bg-second p-8 rounded-2xl mb-5">
						<p className="font-bold text-primary text-xl mb-2">Kikibodyworks</p>
						<p className="text-lg">
							Kikibodyworks is a brand that offers plant based organic
							products for body enhancement. We provide the best products
							for our clients to go on their body enhancement journey.
						</p>
					</div>
					<div className="transition ease-out delay-50 hover:translate-x-1 hover:scale-105 bg-second p-8 rounded-2xl mb-5">
						<p className="font-bold text-primary text-xl mb-2">Lukins Production</p>
						<p className="text-lg">
							We conduct comprehensive research on the latest AI and UI/UX
							developments, industry competition, trends, successes and
							failures, as well as customer behavior and preferences to
							create customized solutions that effectively convert for our
							clients.
						</p>
					</div>
					<div className="transition ease-out delay-50 hover:translate-x-1 hover:scale-105 bg-second p-8 rounded-2xl mb-5">
						<p className="font-bold text-primary text-xl mb-2">A1 College Biology</p>
						<p className="text-lg">
							A1 College Biology is a holistic Biology text book which has
							been approved by Ghana Education Service to be used as
							supplementary textbook in Senior High Schools.
						</p>
					</div>
				</div>
			</div>

			{/* Testimonials */}
			<div className="container flex flex-col my-12">
				<div className="mb-10">
					<span className="text-[54px] font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 sm:leading-10">
						What clients are saying
					</span>
					<hr />
				</div>

				<p>
					I take pride in delivering high-quality work that meets my
					clients&apos; needs and exceeds their expectations.
				</p>
				<div className="md:flex gap-5 sm:flex-wrap">
					<div className="flex-1 sm:mb-10 bg-second p-8 rounded-2xl">
						<div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-white font-bold text-xl mb-5">
							PS
						</div>
						<p className="font-bold text-primary mb-1">Priscilla Sekum</p>
						<p className="text-lg">
							&ldquo;I owe it all to Jonathan&apos;s expertise and dedication.
							Working with him was an absolute pleasure and I would
							recommend them to anyone looking for top-notch website
							development services.&rdquo;
						</p>
					</div>
					<div className="flex-1 bg-second p-8 rounded-2xl mb-10">
						<div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-white font-bold text-xl mb-5">
							AA
						</div>
						<p className="font-bold text-primary mb-1">Anthony Aidoo</p>
						<p className="text-lg">
							&ldquo;Thanks to Jonathan, I finally had the courage to share my
							book with the world, which is now selling across the
							country.&rdquo;
						</p>
					</div>
				</div>
			</div>

			{/* Courses */}
			<div className="container my-10 text-center">
				<p className="font-light text-primary">
					&ldquo;I believe in sharing knowledge and helping others learn new skills
					that can benefit them in their careers.&rdquo;
				</p>
				<a className="text-primary font-medium" href="">
					Check out my courses
				</a>
			</div>

			{/* Footer section */}
			<div className="bg-second">
				<div className="container py-20">
					<div className="flex flex-col gap-24">
						<div>
							<span className="text-[54px] font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 sm:leading-10">
								Get in touch
							</span>
							<p>
								Please don&apos;t hesitate to reach out to me about your project or
								business.
							</p>
							<p>Want to reach out?</p>
							<p>
								Shoot me a mail:{" "}
								<a
									className="text-primary text-lg"
									href="mailto:jonathankd9@gmail.com">
									jonathankd9@gmail.com
								</a>
							</p>
						</div>
					</div>

					<div className="my-5">
						<div className="flex justify-between text-lg">
							<a href="#">LinkedIn</a>
							<a href="#">Twitter</a>
							<a href="#">Instagram</a>
						</div>
					</div>

					<hr style={{borderTop: "1px solid #FAF9F6", marginTop: 40}} />
					<p className="mt-5 font-light text-base text-center">
						© 2024, Jonathan Kofi Donkor. <br /> Made with React and Tailwind CSS.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
