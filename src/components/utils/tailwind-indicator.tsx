export default function TailwindIndicator() {
	if (process.env.NODE_ENV === "production") {
		return null;
	}

	return (
		<div className="z-[1000] fixed bottom-0 right-0 m-8 p-3 text-xs font-mono text-white size-6 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500">
			<div className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
				al
			</div>
			<div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
				sm
			</div>
			<div className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
				md
			</div>
			<div className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
				lg
			</div>
			<div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
				xl
			</div>
			<div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
				2xl
			</div>
		</div>
	);
}
