import { createTypeTable } from "fumadocs-typescript/ui";
import { Heading } from "fumadocs-ui/components/heading";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
const { AutoTypeTable } = createTypeTable();
export async function DaemonTypes() {
	const DAEMON_TYPES = await (
		await fetch(
			"https://raw.githubusercontent.com/spaceness/stardust/refs/heads/rewrite/apps/daemon/src/lib/config/types.d.ts",
		)
	).text();
	return (
		<>
			<AutoTypeTable name="Config" type={DAEMON_TYPES} />
			<Heading as="h4">Keys</Heading>
			<Tabs items={["DockerConfig", "SessionConfig"]}>
				<Tab>
					<AutoTypeTable name="DockerConfig" type={DAEMON_TYPES} />
				</Tab>
				<Tab>
					<AutoTypeTable name="SessionConfig" type={DAEMON_TYPES} />
				</Tab>
			</Tabs>
		</>
	);
}
