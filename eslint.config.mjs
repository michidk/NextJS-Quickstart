import nextConfig from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
	...nextConfig,
	...nextCoreWebVitals,
	...nextTypescript,
	{
		settings: {
			import: {
				resolver: {
					typescript: {
						alwaysTryTypes: true,
						project: "./tsconfig.json",
					},
				},
			},
		},
		ignores: ["**/components/shadcn/**"],
	},
];

export default config;
