import React from "react";
import Profile from "./../../assets/profile.png";
import Blogging from "./../../assets/blogging.png";
import SEO from "./../../assets/seo.png";
import Web from "./../../assets/web.png";
import Marketing from "./../../assets/marketing.png";

const Home = () => {
	return (
		<div>
			{/* Hero Section */}

			<div className="container flex flex-col">
				<div className="my-24">
					<div className="mb-5">
						<img className="w-36 h-36" src={Profile} alt="" />{" "}
					</div>
					<div className=" ">
						<p className="font-medium text-primary ">
							I’m Jonathan – Digital Marketer, Web Developer and Blogger
						</p>
						<p className="">
							I love building products, growing brands and generating REAL
							SALES.
						</p>
						<p className="">
							I have a decade of experience with over websites, SEO and
							marketing.
						</p>
					</div>
				</div>
			</div>

			{/* About Me Section */}
			<div className="bg-second">
				<div className="container py-20">
					<h2 className="text-primary font-medium mb-10">About Me</h2>
					<hr />
					<p className="mt-5">
						Hello, Jonathan here. I am a Tech Nerd who is passionate about{" "}
						<span className="font-medium text-primary">
							Web Development, Blogging, SEO
						</span>{" "}
						and{" "}
						<span className="font-medium text-primary">Digital Marketing</span>{" "}
						and based in Accra, Ghana.
					</p>
					<p>I have always been passionate about technology.</p>
					<p>
						After graduating from University of Ghana, Legon with a degree in
						IT, I decided to pursue a career in web development and digital
						marketing.
					</p>
					<p>
						I enjoy writing about web development and digital marketing on my{" "}
						<a className="font-medium text-primary" href="">
							blog
						</a>
						.
					</p>
					<p></p>
				</div>
			</div>

			{/* What i do */}
			<div className="container flex flex-col">
				<div className="my-24">
					<div className="mb-10">
						<p className="text-primary font-medium mb-10">What I do</p>
						<hr />
					</div>

					<div className="">
						<div className="md:flex gap-5 sm:flex-wrap">
							<div className="flex-1 sm:mb-10 bg-second p-5 rounded-2xl">
								<div className="mb-5">
									<img className="w-36 h-36" src={Web} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">Web Development</p>
									<p className="text-lg">
										I specialize in creating custom websites and web
										applications that are both functional and visually
										appealing, proficient in Reactjs, React Native, Nextjs.
									</p>
								</div>
							</div>
							<div className="flex-1 bg-second p-5 rounded-2xl mb-10">
								<div className="mb-5">
									<img className="w-36 h-36" src={Marketing} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">Digital Marketing</p>
									<p className="text-lg">
										I create digital marketing strategies that increase online
										visibility, generate leads and improve conversion rates.
									</p>
								</div>
							</div>
						</div>

						<div className="md:flex gap-5 mb-10 sm:flex-wrap">
							<div className="flex-1 sm:mb-10 bg-second p-5 rounded-2xl">
								<div className="mb-5">
									<img className="w-36 h-36" src={Blogging} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">Blogging</p>
									<p className="text-lg">
										I specialize in creating engaging and informative blog posts
										that resonate with readers and drive traffic to your
										website.
									</p>
								</div>
							</div>
							<div className="flex-1 bg-second p-5 rounded-2xl mb-10">
								<div className="mb-5">
									<img className="w-36 h-36" src={SEO} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">SEO</p>
									<p className="text-lg">
										I specialize in maximizing your website's search engine
										visibility through comprehensive SEO strategies that improve
										rankings, drive traffic and generate leads.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Projects */}
			<div className="container flex flex-col">
				<div className="">
					<div className="mb-10">
						<p className="text-primary font-medium mb-10">Projects</p>
						<hr />
					</div>

					<div className="">
						<div className="md:flex gap-5 mb-10 sm:flex-wrap">
							<div className="bg-second p-5 rounded-2xl sm:mb-10">
								<div className="mb-5">
									<img className="w-36 h-36" src={Profile} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">
										Cookie Restore Lab
									</p>
									<p className="text-lg">
										Cookie Restore Lab is a feminine wellness brand created to
										assist women with the best care and plant derived products
										for their delicate parts to eliminate vaginal infections and
										other common feminine issues.
									</p>
								</div>
							</div>
							<div className=" bg-second p-5 rounded-2xl">
								<div className="mb-5">
									<img className="w-36 h-36" src={Profile} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">Kikibodyworks</p>
									<p className="text-lg">
										I create digital marketing strategies that increase online
										visibility, generate leads and improve conversion rates.
									</p>
								</div>
							</div>
						</div>

						<div className="md:flex gap-5 mb-10 sm:flex-wrap">
							<div className=" bg-second p-5 rounded-2xl sm:mb-10">
								<div className="mb-5">
									<img className="w-36 h-36" src={Profile} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">Lukins Production</p>
									<p className="text-lg">
										We conduct comprehensive research on the latest AI and UI/UX
										developments, industry competition, trends, successes and
										failures, as well as customer behavior and preferences to
										create customized solutions that effectively convert for our
										clients.
									</p>
								</div>
							</div>
							<div className="bg-second p-5 rounded-2xl">
								<div className="mb-5">
									<img className="w-36 h-36" src={Profile} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">
										A1 College Biology
									</p>
									<p className="text-lg">
										A1 College Biology is a holistic Biology text book which has
										been approved by Ghana Education Service to be used as
										supplementary textbook in Senior High Schools
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Testimonials */}
			<div className="container flex flex-col my-12">
				<div className="">
					<div className="mb-10">
						<p className="text-primary font-medium mb-10">
							What clients are saying
						</p>
						<hr />
					</div>

					<div className="">
						<p>
							I take pride in delivering high-quality work that meets my
							clients' needs and exceeds their expectations.
						</p>
						<div className="md:flex gap-5 sm:flex-wrap">
							<div className="flex-1 sm:mb-10 bg-second p-5 rounded-2xl">
								<div className="mb-5">
									<img className="w-36 h-36" src={Web} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">Priscilla Sekum</p>
									<p className="text-lg">
										I specialize in creating custom websites and web
										applications that are both functional and visually
										appealing, proficient in Reactjs, React Native, Nextjs.
									</p>
								</div>
							</div>
							<div className="flex-1 bg-second p-5 rounded-2xl mb-10">
								<div className="mb-5">
									<img className="w-36 h-36" src={Marketing} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">Anthony Aidoo</p>
									<p className="text-lg">
										I create digital marketing strategies that increase online
										visibility, generate leads and improve conversion rates.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Courses */}
			<div className="container my-10 text-center">
				<p className="font-light font-bold text-primary">
					"I believe in sharing knowledge and helping others learn new skills
					that can benefit them in their careers."
				</p>
				<a className="text-primary font-medium" href="">
					{" "}
					Check out my courses;
				</a>
			</div>

			{/* Footer section */}
			<div className="bg-second">
				<div className="container  py-20">
					<div className="flex flex-col gap-24">
						<div className="">
							<h2 className="text-[54px] font-bold mt-5">Get in touch</h2>
							<p>
								Please don't hesitate to reach out to me about your project or
								business.
							</p>

							<p className="">Want to reach out?</p>
							<p className="">
								Shoot me mail:{" "}
								<a className="text-primary" href="mailto:jonathankd9@gmail.com">
									jonathankd9@gmail.com
								</a>
							</p>
						</div>
					</div>

					<div className="my-5">
						<div className="flex justify-between text-lg">
							<a href="#">Linkdln</a>
							<a href="#">Twitter</a>
							<a href="#">Instagram</a>
						</div>
					</div>

					<hr style={{ borderTop: "1px solid #FAF9F6", marginTop: 40 }} />
					<p className="mt-5 font-light text-base text-center">
						© 2023, Jonathan Kofi Donkor. <br /> Made with Reactjs and
						Tailwindcss 🚀.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
