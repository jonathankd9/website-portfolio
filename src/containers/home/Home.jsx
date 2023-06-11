import React from "react";
import Hero from "./../../assets/hero.jpeg";

const Home = () => {
	return (
		<div>
			{/* navbar */}
			<div className="container grid grid-cols-3">
				<div className="text-3xl font-bold underline text-black">
					Jonathan Kofi Donkor
				</div>
				{/* Links */}
				<div className="">
					<div className="">About</div>
					<div className="">Projects</div>
					<div className="">Contact me</div>
				</div>
				{/* Call to Action */}
				<button>SEO Mastery</button>
			</div>

			{/* Hero Section */}
			<div className="bg-white flex justify-center items-center py-5">
				<div className="w-[81rem] justify-center items-center grid grid-cols-2">
					<div className="pr-40">
						<p className="text-xl font-bold">
							An ex-Head of SEO helping people learn about SEO on Youtube.
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

			{/* About Me Section */}
			<div className="bg-[#F8F8F9] min-h-screen flex justify-center items-start py-28">
				<div className="w-[81rem] justify-center items-start grid grid-cols-2 gap-24">
					{/* Services */}
					<div className="">
						<p className="mb-5 text-sm text-lightash">SERVICES</p>
						<hr />
						<h2 className="text-[54px] font-bold mt-5">About me</h2>
						<p className="my-5">
							I’m a marketing nerd based out of Barcelona, Spain.
						</p>
						<p className="my-5">
							You can usually find me breaking down successful SEO strategies on
							my YT channel, helping my clients with their online growth, or
							running a new SEO test on a website of mine!
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
								Your website is most likely the core of your business. Build it
								with someone that can prepare it for war.
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

			{/* Contact us section */}

			{/* Footer section */}
			<div className="bg-[#16161B] flex flex-col justify-center items-center py-20">
				<div className="w-[81rem] justify-center items-center grid grid-cols-2 gap-24 text-white">
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

				<hr style={{ borderTop: "1px solid black" }} />

				<p className="mt-10 text-white text-base">
					© 2023, Jonathan Kofi Donkor. Made with Reactjs and Tailwindcss 🚀.
				</p>
			</div>
		</div>
	);
};

export default Home;
