import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import me from "../../assets/me.jpg";

export const About: React.FC = () => {
	return (
		<div className="flex flex-col h-96 mt-24">
			<div className="flex m-auto gap-4">
				<img alt="Logo" src={me} className="rounded-full w-24 h-28" />
				<div className="flex flex-col gap-2">
					<h3 className="font-bold">Callum Buttery</h3>
					<span className="text-sm">Photographer / Software Engineer</span>
					<div className="flex text-accent text-xs">
						<a
							className="btn btn-ghost btn-xl btn-circle"
							onClick={() =>
								window.open("https://github.com/callumbuttery", "_blank")
							}
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faGithub} size="2xl" />
						</a>
						<a
							className="btn btn-ghost btn-xl btn-circle"
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/callumbuttery/",
									"_blank"
								)
							}
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faLinkedin} size="2xl" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
