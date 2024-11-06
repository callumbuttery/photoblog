export const About: React.FC = () => {
	return (
		<div className="flex flex-col items-center gap-8">
			<h1 className="font-bold text-3xl self-center">Meet the crew</h1>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
				<div className="flex gap-4">
					<img alt="Logo" src="/avatar.png" className="rounded-full w-24" />
					<div className="flex flex-col gap-2">
						<h3 className="font-bold">David Forren</h3>
						<span className="text-sm">Founder / CEO</span>
						<div className="flex text-accent text-xs">
							<a className="btn btn-ghost btn-sm btn-circle">
								<i className="fa-brands fa-github text-lg"></i>
							</a>
							<a className="btn btn-ghost btn-sm btn-circle">
								<i className="fa-brands fa-twitter text-lg"></i>
							</a>
							<a className="btn btn-ghost btn-sm btn-circle">
								<i className="fa-brands fa-facebook text-lg"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
