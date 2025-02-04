import { createTypeTable } from "fumadocs-typescript/ui";
import { Heading } from "fumadocs-ui/components/heading";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
const { AutoTypeTable } = createTypeTable();
export async function WebTypes() {
	const WEB_TYPES = await (
		await fetch("https://raw.githubusercontent.com/spaceness/stardust/refs/heads/rewrite/packages/config/config.d.ts")
	).text();
	return (
		<>
			<AutoTypeTable name="Config" type={WEB_TYPES} />
			<Heading as="h4">Keys</Heading>
			<Tabs items={["NodeConfig", "AuthConfig", "SessionConfig"]}>
				<Tab>
					<AutoTypeTable name="NodeConfig" type={WEB_TYPES} />
				</Tab>
				<Tab>
					<AutoTypeTable name="AuthConfig" type={WEB_TYPES} />
					Cloudflare Turnstile is used to protect the sign up and sign in routes and can be optionally configured:
					<AutoTypeTable name="TurnstileConfig" type={WEB_TYPES} />
				</Tab>
				<Tab>
					<AutoTypeTable name="SessionConfig" type={WEB_TYPES} />
				</Tab>
			</Tabs>
		</>
	);
}
