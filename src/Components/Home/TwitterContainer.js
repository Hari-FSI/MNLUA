import Head from "next/head";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function MyTwitterTimeline() {
	return (
		<>
			<Head>
				<script
					async
					src="https://platform.twitter.com/widgets.js"
					charset="utf-8"></script>
			</Head>
			<TwitterTimelineEmbed
				sourceType="profile"
				screenName="mnluauniversity?ref_src=twsrc%5Etfw"
				options={{ height: 400 }}
			/>
		</>
	);
}

export default MyTwitterTimeline;
