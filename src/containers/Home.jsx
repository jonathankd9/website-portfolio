import Profile from "./../assets/profile.png";
import Blogging from "./../assets/story/blogging.png";
import SEO from "./../assets/story/seo.png";
import Web from "./../assets/story/web.png";
import Marketing from "./../assets/story/marketing.png";
import College from "./../assets/collegebiology.png";
import Cookie from "./../assets/cookie.png";
import Kiki from "./../assets/kikibodyworks.png";
import Lukins from "./../assets/lukinsprod.png";
import Anthony from "./../assets/anthony.png";
import Priscilla from "./../assets/priscilla.png";
import Williams from "./../assets/coding/williams.png";
import Organick from "./../assets/coding/organick.png";
import Warkinon from "./../assets/coding/warkinon.png";
import {Link} from "react-router-dom";

const Home = () => {
	return (
		<div>
			{/* Hero Section */}

			<div className="container">
				<div className="my-24 flex flex-col justify-center items-center ">
					<div className="mb-5">
						<img className="w-36 h-36" src={Profile} alt="" />
					</div>
					<div className="text-center">
						<span className="font-light text-[54px] mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
							I'm <span className="font-bold">Jonathan</span>
						</span>
						<div className="font-light text-primary flex md:gap-10 md:flex-row sm:flex-col flex-wrap mb-5">
							<div className="">🖥️ Web Designer</div>
							<div className="">👨🏽‍💻 Frontend Developer</div>
							<div className="">📱 Mobile App Developer</div>
							<div className="">✍️ Niche Blogger</div>
						</div>
						<p className="text-2xl ">
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
					<span className=" text-[54px]  font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
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
						<a
							className="font-medium text-primary underline"
							href="https://jonathankofidonkor.netlify.app/"
							rel="noreferrer"
							target="_blank">
							blog
						</a>
						.
					</p>
					<p></p>
				</div>
			</div>

			{/* What i do */}
			<div className="container flex flex-col">
				<div className="my-16">
					<div className="mb-10">
						<span className="text-[54px] font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
							What I do
						</span>
						<hr />
					</div>

					<div className="">
						<div className="md:flex gap-5 sm:flex-wrap">
							<div className="flex flex-col gap-5 justify-center transition ease-in delay-100 hover:-translate-y-1 hover:scale-105 flex-1 sm:mb-10 bg-second p-5 rounded-2xl">
								<div className="w-full flex justify-center">
									<img className="w-[80%]" src={Web} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">Web Development</p>
									<p className="text-lg">
										I specialize in creating custom websites that are both
										functional and visually appealing, proficient in Reactjs,
										Nextjs, Tailwindcss.
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-5 justify-center transition ease-in delay-100 hover:-translate-y-1 hover:scale-105 flex-1 bg-second p-5 rounded-2xl mb-10">
								<div className="w-full flex justify-center">
									<img className="w-[80%]" src={Marketing} alt="" />
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
							<div className="flex flex-col gap-5 justify-center transition ease-in delay-100 hover:-translate-y-1 hover:scale-105 flex-1 sm:mb-10 bg-second p-5 rounded-2xl">
								<div className="w-full flex justify-center">
									<img className="w-[80%]" src={Blogging} alt="" />
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
							<div className="flex flex-col gap-5 justify-center transition ease-in delay-100 hover:-translate-y-1 hover:scale-105 flex-1 bg-second p-5 rounded-2xl mb-10">
								<div className="w-full flex justify-center">
									<img className="w-[80%]" src={SEO} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">SEO</p>
									<p className="text-lg">
										I specialize in maximizing your website's search engine
										visibility through comprehensive SEO strategies that improve
										rankings.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Coding project */}
			<div className="container mb-20">
				<div className="">
					<div className="mb-10">
						<span className="text-[54px] font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
							Web Design Projects
						</span>
						<hr />
					</div>

					<div className="">
						<div className="flex gap-10 flex-wrap md:flex-row sm:flex-col">
							<div className="flex-1">
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

							<div className="flex-1">
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

							<div className="flex-1">
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

					<div className="flex justify-center my-6">
						<Link
							to="/projects"
							className="text-center text-xl bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-black hover:text-red-100 hover:scale-105 text-white px-6 py-4">
							View All Projects
						</Link>
					</div>
				</div>
			</div>

			{/* Projects */}
			<div className="container flex flex-col">
				<div className="">
					<div className="mb-10">
						<span className="text-[54px] font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
							Projects
						</span>
						<hr />
					</div>

					<div className="">
						<div className="md:flex gap-5 mb-10 sm:flex-wrap">
							<div className="transition ease-out delay-50 hover:translate-x-1 hover:scale-105 bg-second p-5 rounded-2xl sm:mb-10">
								<div className="mb-5">
									<img className="w-36 h-36" src={Cookie} alt="" />
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
							<div className="transition ease-out delay-50 hover:translate-x-1 hover:scale-105 bg-second p-5 rounded-2xl">
								<div className="mb-5">
									<img className="w-36 h-36" src={Kiki} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">Kikibodyworks</p>
									<p className="text-lg">
										Kikibodyworks is a brand that offers plant based organic
										products for body enhancement. We provide the best products
										for our clients to go on their body enhancement journey.
									</p>
								</div>
							</div>
						</div>

						<div className="md:flex gap-5 mb-10 sm:flex-wrap">
							<div className="transition ease-out delay-50 hover:translate-x-1 hover:scale-105 bg-second p-5 rounded-2xl sm:mb-10">
								<div className="mb-5">
									<img className="w-36 h-36" src={Lukins} alt="" />
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
							<div className="transition ease-out delay-50 hover:translate-x-1 hover:scale-105 bg-second p-5 rounded-2xl">
								<div className="mb-5">
									<img className="w-32 " src={College} alt="" />
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
						<span className="text-[54px] font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 sm:leading-10">
							What clients are saying
						</span>
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
									<img className="w-36 h-36" src={Priscilla} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">Priscilla Sekum</p>
									<p className="text-lg">
										"I owe it all to Jonathan's expertise and dedication.
										Working with him was an absolute pleasure and I would
										recommend them to anyone looking for top-notch website
										development services."
									</p>
								</div>
							</div>
							<div className="flex-1 bg-second p-5 rounded-2xl mb-10">
								<div className="mb-5">
									<img className="w-36 h-36" src={Anthony} alt="" />
								</div>
								<div className=" ">
									<p className="font-medium text-primary ">Anthony Aidoo</p>
									<p className="text-lg">
										"Thanks to Jonathan, I finally had the courage to share my
										book with the world, which is now selling across the
										country."
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Courses */}
			<div className="container my-10 text-center">
				<p className="font-light text-primary">
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
							<span
								className="text-[54px] 
							font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 sm:leading-10
							">
								Get in touch
							</span>
							<p>
								Please don't hesitate to reach out to me about your project or
								business.
							</p>

							<p className="">Want to reach out?</p>
							<p className="">
								Shoot me mail:{" "}
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
							<a href="#">Linkedin</a>
							<a href="#">Twitter</a>
							<a href="#">Instagram</a>
						</div>
					</div>

					<hr style={{borderTop: "1px solid #FAF9F6", marginTop: 40}} />
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
