import React from "react";
import Hero from "./../../assets/hero.jpeg";
import Seo from "./../../assets/seo.png";

const Home = () => {
	return (
		<div>
			{/* navbar */}
			<div className="bg-[#F8F8F9]">
				<div className="container flex justify-between bg-[#F8F8F9] items-center py-5">
					<div className="text-3xl font-bold text-black">
						Jonathan Kofi Donkor
					</div>
					{/* Links */}
					<div className="flex gap-5">
						<a href="" className="">
							About
						</a>
						<a href="" className="">
							Projects
						</a>
						<a href="" className="">
							Contact me
						</a>
					</div>
					{/* Call to Action */}
					<a href="">
						<button className="rounded-md bg-gray-950 text-white p-3 mt-5 px-5">
							SEO Mastery
						</button>
					</a>
				</div>
			</div>

			{/* Hero Section */}
			<div className="bg-white">
				<div className="container bg-white py-5">
					<div className="justify-center items-center grid grid-cols-2">
						<div className="pr-40">
							<p className="text-xl">
								A Freelance Blogger, Marketer and Developer....
							</p>
							<h1 className="text-[88px] space-grotesk font-bold leading-none">
								Hey, I'm Jonathan.
							</h1>
						</div>
						<div className="">
							<img src={Hero} alt="" />
						</div>
					</div>
				</div>
			</div>

			{/* About Me Section */}
			<div className="bg-[#F8F8F9]">
				<div className="container bg-[#F8F8F9] py-28">
					<div className="justify-center items-start grid grid-cols-2 gap-24">
						{/* Services */}
						<div className="">
							<p className="mb-5 text-sm text-lightash">SERVICES</p>
							<hr />
							<h2 className="text-[54px] font-bold mt-5">About me</h2>
							<p className="my-5">
								I’m a marketing nerd based out of Barcelona, Spain.
							</p>
							<p className="my-5">
								You can usually find me breaking down successful SEO strategies
								on my YT channel, helping my clients with their online growth,
								or running a new SEO test on a website of mine!
							</p>
							<p className="my-5">
								I’m always open to collaborations or new projects so don’t
								hesitate to contact me.
							</p>
						</div>
						{/* Organic growth and paid growth */}
						<div className="grid grid-cols-2 gap-12">
							<div className="">
								<p className="mb-5 text-sm text-lightash">ORGANIC GROWTH</p>
								<hr />
								<p className="text-2xl	font-bold text-black my-7">SEO</p>
								<p className="mb-10">
									Investing in your organic visibility means building a
									sustainable long-term online business.
								</p>
							</div>
							<div className="">
								<p className="mb-5 text-sm text-lightash">SERVICES</p>
								<hr />
								<p className="text-2xl font-bold text-black my-7">PPC</p>
								<p className="mb-10">
									A strong organic presence should always be supported by a
									powerful paid strategy to completely take over search.
								</p>
							</div>
							<div className="">
								<p>SERVICES</p>
								<hr />
								<p className="text-2xl	font-bold text-black my-7">
									Web Development
								</p>
								<p className="mb-10">
									Your website is most likely the core of your business. Build
									it with someone that can prepare it for war.
								</p>
							</div>
							<div className="">
								<p>SERVICES</p>
								<hr />
								<p className="text-2xl	font-bold text-black my-7">
									Marketing & Content Creation
								</p>
								<p className="mb-10">
									Struggling in any of these areas? Let’s hop on a call and see
									how we can fix that.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* What I Do */}
			<div className="bg-[white]">
				<div className="container bg-[white] py-28">
					{/* What i do */}
					<div className="">
						<p className="mb-5 text-sm text-lightash">WHAT I DO</p>
						<hr />
					</div>

					<div className="justify-center items-start grid grid-cols-2 gap-24">
						<h2 className="text-[54px] font-bold mt-5 leading-none">
							Become my next client by reaching out today
						</h2>
						<p className="my-5">
							Yet branding today is more than just a look or a logo. It has come
							to signify the emotional "gut feeling" reaction a company can
							elicit from its customers. All our projects are made with love.
						</p>
					</div>
				</div>
			</div>

			{/* Testimonials */}
			<div className="bg-[white]">
				<div className="container bg-[white] py-28">
					{/* Trust */}
					<div className="">
						<p className="mb-5 text-sm text-lightash">SATISFIED CUSTOMERS</p>
						<hr />
					</div>

					<div className="justify-center items-start grid grid-cols-3 gap-10">
						<div className="">
							<h1 className="text-[54px] font-bold mt-5 leading-none ">
								Trusted By Many
							</h1>
							<p>
								Yet branding today is more than just a look or a logo. It has
								come to signify the emotional "gut feeling" reaction a company
								can elicit from its customers. All our projects are made with
								love.
							</p>
						</div>
						<div className="my-5 col-span-2"></div>
					</div>
				</div>
			</div>

			{/* White line */}
			<hr style={{ borderTop: "2px solid white" }} />

			{/* Learn Course */}
			<div className="bg-[#F8F8F9]">
				<div className="container bg-[#F8F8F9] py-28">
					<div className="grid grid-cols-2 gap-10 text-black">
						<div className="justify-center items-center flex flex-col">
							<img src={Seo} alt="" />
							<button className="rounded-md bg-gray-950 text-white p-3 mt-5 px-5">
								SEO Mastery Course
							</button>
						</div>
						<div className="">
							<p className="mb-5 text-sm text-lightash">MY SEO COURSE</p>
							<hr />
							<h2 className="text-[54px] font-bold mt-5">Learn SEO</h2>
							<p className="pb-5">
								I just recently launched my complete SEO course. This is all of
								my SEO knowledge into one course. All my years of testing,
								working with clients, being a Head of SEO, and a current CMO.
							</p>
							<p>
								I’m excited to share this course with you guys, use code
								“Pre-sale” at checkout for 30% off before the course officially
								launches in late august. I’m excited to share this course with
								you guys, use code “Pre-sale” at checkout for 30% off before the
								course officially launches in late august.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Contact us section */}
			<div className="bg-[#FEFFFE]">
				<div className="container bg-[#FEFFFE] py-20">
					<div className="justify-center items-start grid grid-cols-3 gap-24 text-[#17161A]">
						{/* Get in touch */}
						<div className="">
							<h2 className="text-[54px] font-bold mt-5">Get in touch</h2>
							<p>
								Please fill out the contact form on the right or contact me
								directly through my email:
							</p>
							<p className="font-bold mt-5">jonathankd9@gmail.com</p>
						</div>
						{/* Contact box */}
						<div className="col-span-2">
							<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div className="sm:col-span-3">
									<label
										htmlFor="first-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Name (required)
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-3">
									<label
										htmlFor="last-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Email (required)
									</label>
									<div className="mt-2">
										<input
											type="email"
											name="email"
											id="email"
											autoComplete="email"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-3">
									<label
										htmlFor="company"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Company (optional)
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="compnay"
											id="company"
											autoComplete="company"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-3">
									<label
										htmlFor="Subject"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Subject (optional)
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="subject"
											id="subject"
											autoComplete="subject"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="col-span-full">
									<label
										htmlFor="about"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										About
									</label>
									<div className="mt-2">
										<textarea
											id="about"
											name="about"
											rows={3}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											defaultValue={""}
										/>
									</div>
									<p className="mt-3 text-sm leading-6 text-gray-600">
										Brief project details.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer section */}
			<div className="bg-[#16161B]">
				<div className="container bg-[#16161B]  py-20">
					<div className="justify-center items-center grid grid-cols-2 gap-24 text-white">
						<div className="">
							<p className="font-bold text-2xl text-[#D90A2C] mb-7">
								Jonathan Kofi Donkor
							</p>
							<div className="grid grid-cols-1">
								<a href="#">YouTube</a>
								<a href="#">Twitter</a>
								<a href="#">Instagram</a>
							</div>
						</div>
						<div className="">
							<p className="font-bold text-2xl mb-7">Contact me</p>
							<p>Want to reach out?</p>
							<p>
								Email me:{" "}
								<a href="mailto:jonathankd9@gmail.com">jonathankd9@gmail.com</a>
							</p>
						</div>
					</div>
					<hr style={{ borderTop: "1px solid #FAF9F6", marginTop: 40 }} />
					<p className="mt-10 text-white text-base">
						© 2023, Jonathan Kofi Donkor. Made with Reactjs and Tailwindcss 🚀.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
