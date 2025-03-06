import React, { useRef } from "react";
import style from "./home.module.css";
import logo from "../../img/anime.gif";
import ScrollUpButtom from "../ScrollUpButton/ScrollUpButton.jsx";
import Contact from "../Contact Me/Contact.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	IoLogoReact,
	IoLogoJavascript,
	IoLogoNodejs,
	IoLogoHtml5,
	IoLogoGithub,
	IoLogoLinkedin,
} from "react-icons/io5";
import videogameslogo from "../../img/videogame.png";
import where from "../../img/where.png";
import zurcher from "../../img/zurcher.png";
import profile from "../../img/profile.png";
import foodTicket from "../../img/foodticket.png";
import rickandmorty from "../../img/rickandmorty.png";

export default function Home() {
	const proyects = useRef();
	const about = useRef();
	const contact = useRef();

	const scrolltopproyects = () => {
		proyects.current.scrollIntoView({ behavior: "smooth" });
	};
	const scrolltoabout = () => {
		about.current.scrollIntoView({ behavior: "smooth" });
	};

	const scrolltocontact = () => {
		contact.current.scrollIntoView({ behavior: "smooth" });
	};

	if (window.onload) return <div>Cargando...</div>;

	return (
		<div className={style.principalDiv}>
			<div className={style.navbar}>
				<div onClick={scrolltoabout} className={style.navlink}>
					About Me
				</div>
				<div onClick={scrolltopproyects} className={style.navlink}>
					Projects
				</div>
				<div onClick={scrolltocontact} className={style.navlink}>
					Contact
				</div>
			</div>

			<div className={style.namecontainer}>
				<div>
					<p className={style.name}>Gaston Saravia</p>
					<p className={style.full}>FullStack Developer</p>

					<div style={{ marginTop: 40 }}>
						<a
							target={"new"}
							href={
								"https://drive.google.com/file/d/1LVf8ug9Fh0MWMxAz-4VWREXnKEbD16z8/view?usp=sharing"
							}
							className={style.resume}
						>
							Resume CV
						</a>

						<a href="https://www.linkedin.com/in/gaston-saravia/">
							<IoLogoLinkedin className={style.logos} />
						</a>
						<a href="https://github.com/Gasnis">
							<IoLogoGithub className={style.logos} />
						</a>
					</div>
				</div>

				<div>
					<img className={style.logo} src={profile} alt="" />
				</div>
			</div>
			<div ref={about}></div>

			<div className={style.about}>
				<div>
					<h1>About me</h1>
				</div>
				<div className={style.aboutIn}>
					<p>
						I am a Fullstack Developer with experience in JavaScript, React,
						Redux, HTML, CSS, Express, Node JS, SQL, and Sequelize. I focus on
						working with agile development methodologies, such as SCRUM, to
						ensure timely delivery of high-quality projects. I have experience
						leading projects from conception to implementation and maintenance,
						and working both independently and in a team. I am a person
						passionate about continuous learning and ready to take on new
						challenges and help create high-quality and scalable web solutions.
						My hobbies are video games, streaming, Formula 1, and paddle tennis.
					</p>
				</div>
			</div>

			<div className={style.projectsContainer} ref={proyects}>
				<h1 className={style.full}>PROJECTS</h1>
			</div>

			<div className={style.containerCard}>
				<a href="https://rick-and-morty-proyect-chi.vercel.app/" target="new">
					<div className={style.card}>
						<h1>Rick And Morty App</h1>
						<div>
							<img
								src={rickandmorty}
								alt="rickandmorty"
								className={style.appimage}
							/>
						</div>
						<div>
							<IoLogoReact className={style.loguitos} />
						</div>

						<p>
							Rick and morty project are a frontend web with support of The Rick
							and Morty API and the objetive is render all the characters from
							this television show
						</p>
					</div>
				</a>

				<a href="https://gasnis-videogames.vercel.app/" target="new">
					<div className={style.card}>
						<h1>Videogames</h1>
						<div>
							<img
								src={videogameslogo}
								alt="videogame"
								className={style.appimage}
							/>
						</div>
						<div>
							<IoLogoReact className={style.loguitos} />
							<IoLogoJavascript className={style.loguitos} />
							<IoLogoNodejs className={style.loguitos} />
							<IoLogoHtml5 className={style.loguitos} />
						</div>

						<p>
							Is an App desing to search your favorite videogames with a list of
							100 games to search an tu can filter and order like you want and
							you can create new videogames too.
						</p>
					</div>
				</a>

				<a href="https://wwwhere.vercel.app/" target="new">
					<div className={style.card}>
						<h1>WWWhere</h1>
						<div>
							<img src={where} alt="where" className={style.appimage} />
						</div>
						<div>
							<IoLogoReact className={style.loguitos} />
							<IoLogoJavascript className={style.loguitos} />
							<IoLogoNodejs className={style.loguitos} />
							<IoLogoHtml5 className={style.loguitos} />
						</div>
						<p>
							Wwwhere is an App desing to search a place to go out with your
							friend in the night. you have to login to book in the site if you
							want, if you are owner of a place you can publish you site in the
							app free and we only share the book.
						</p>
					</div>
				</a>

				<a href="https://zurcher-handyman.vercel.app/" target="new">
					<div className={style.card}>
						<h1>Zurcher Handyman</h1>
						<div>
							<img src={zurcher} alt="where" className={style.appimage} />
						</div>
						<div>
							<IoLogoReact className={style.loguitos} />
							<IoLogoJavascript className={style.loguitos} />
						</div>

						<p>
							Zurcher Handyman is an app for a worker in florida in this app you
							can see all his jobs and contact via email to book and estimate
							the work you want
						</p>
					</div>
				</a>

				<a href="https://foodticket.vercel.app/" target="new">
					<div className={style.card}>
						<h1>FoodTicket</h1>
						<div>
							<img
								src={foodTicket}
								alt="foodticket"
								className={style.appimage}
							/>
						</div>
						<div>
							<IoLogoJavascript className={style.loguitos} />
							<IoLogoNodejs className={style.loguitos} />
							<IoLogoReact className={style.loguitos} />
						</div>

						<p>
							Foodticket is a web application designed to streamline order
							management in a restaurant for both service staff and kitchen
							staff. The application offers a user-friendly interface
						</p>
					</div>
				</a>

				<div className={style.card}>
					<h1>Working in new projects...</h1>
					<div>
						<img src={logo} alt="logo" className={style.appimage} />
					</div>
				</div>
			</div>
			<div ref={contact}>
				<Contact className={style.contact}></Contact>
			</div>

			<ScrollUpButtom></ScrollUpButtom>
		</div>
	);
}
