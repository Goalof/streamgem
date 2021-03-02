import React from "react";
import theme from "theme";
import { Theme, Link, Span, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="#050211"
			padding="0px 0 0px 0"
			border-width="0px 0px 1px 0px"
			border-style="solid"
			border-color="#000000"
			box-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
			quarkly-title="Header"
		>
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Stack margin="0px 0px 0px 0px" padding="0px 15px 0px 15px" min-height="80px">
				{"    "}
				<StackItem width="33.3333%" display="flex">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Link href="#" font="750 22px/29px Avenir Next Cyr" color="#F0F0F5" text-decoration-line="initial">
						stream{" "}
						<Span color="#592CF0">
							gem
						</Span>
						{"\n\n"}
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Link
						href="#"
						font="450 16px/140% Avenir Next Cyr"
						text-decoration-line="initial"
						color="#F0F0F5"
						opacity="0.9"
						margin="0px 20px 0px 20px"
					>
						Viewers{"\n\n"}
					</Link>
					<Link
						href="#"
						font="450 16px/140% Avenir Next Cyr"
						text-decoration-line="initial"
						color="#F0F0F5"
						opacity="0.9"
						margin="0px 20px 0px 20px"
					>
						Streamers{"\n\n"}
					</Link>
					<Link
						href="#"
						font="450 16px/140% Avenir Next Cyr"
						text-decoration-line="initial"
						color="#F0F0F5"
						opacity="0.9"
						margin="0px 20px 0px 20px"
					>
						Advertisers{"\n\n"}
					</Link>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					{"        "}
					<Link
						href="#"
						font="450 16px/22.4px Avenir Next Cyr"
						color="#F0F0F5"
						text-decoration-line="initial"
						padding="9px 24px 8px 24px"
						background="#592CF0"
						border-radius="60px"
					>
						Go to App{"\n\n"}
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#050211">
			<Override slot="SectionContent" max-width="1100px" />
			<Stack margin="0px 0px 0px 0px" gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" text-align="center" />
					<Text color="#ffffff" opacity="0.9" font="750 72px/67.68px Avenir Next Cyr" margin="0px 0px 0px 0px">
						Full stream monetization{"\n\n"}
					</Text>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" text-align="center" />
					<Text color="#6C6B7D" opacity="0.9" font="400 22px/30.8px &quot;Avenir Next Cyr&quot;" margin="0px 0px 0px 0px">
						Make money streaming. Improve the quality and interactivity{" "}
						<br />
						of your streams with widgets, polls and other features{"\n\n"}
					</Text>
					{"        "}{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});