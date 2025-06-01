import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

export default [
	...compat.extends(
		"next/core-web-vitals",
		"next/typescript"
	),
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
