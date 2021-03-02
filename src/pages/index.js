import React from "react";
import theme from "theme";
import { Theme, Link, Span, Box, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
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
					<Link
						href="#"
						font="600 22px/29px --fontFamily-googleInter"
						color="#F0F0F5"
						text-decoration-line="initial"
						transition="color 0.2s ease 0s"
						hover-color="#592CF0"
					>
						stream{" "}
						<Span
							color="#592CF0"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
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
						font="450 16px/140% --fontFamily-googleInter"
						text-decoration-line="initial"
						color="#F0F0F5"
						opacity="0.9"
						margin="0px 20px 0px 20px"
						transition="color 0.2s ease 0s"
						hover-color="#592CF0"
					>
						Viewers{"\n\n"}
					</Link>
					<Link
						href="#"
						font="450 16px/140% --fontFamily-googleInter"
						text-decoration-line="initial"
						color="#F0F0F5"
						opacity="0.9"
						margin="0px 20px 0px 20px"
						transition="color 0.2s ease 0s"
						hover-color="#592CF0"
					>
						Streamers{"\n\n"}
					</Link>
					<Link
						href="#"
						font="450 16px/140% --fontFamily-googleInter"
						text-decoration-line="initial"
						color="#F0F0F5"
						opacity="0.9"
						margin="0px 20px 0px 20px"
						transition="color 0.2s ease 0s"
						hover-color="#592CF0"
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
						font="450 16px/22.4px --fontFamily-googleInter"
						color="#F0F0F5"
						text-decoration-line="initial"
						padding="9px 24px 8px 24px"
						background="#592CF0"
						border-radius="60px"
						transition="background-color 0.2s ease 0s"
						hover-background="#F0F0F5"
						hover-color="#592CF0"
					>
						Go to App{"\n\n"}
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#050211" padding="60px 0 60px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Box position="relative">
				<Box
					quarkly-title="Background"
					position="absolute"
					width="100%"
					height="100%"
					background="repeating-linear-gradient(88.11deg,rgba(79, 58, 223, 0.29) 24.43%,rgba(200, 58, 223, 0.29) 82.21%),url(https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Vector%201.png?v=2021-03-02T20:31:33.375Z) 50% 50%/contain no-repeat"
					filter="blur(220px)"
					transform="matrix(-1, 0.01, 0.01, 1, 0, 0)"
				/>
				<Stack margin="0px 0px 0px 0px" gap="20px">
					{"    "}
					<StackItem width="100%" display="flex">
						<Override slot="StackItemContent" align-items="center" justify-content="center" text-align="center" />
						<Text color="#ffffff" opacity="0.9" font="650 72px/67.68px --fontFamily-googleInter" margin="0px 0px 0px 0px">
							Full stream monetization{"\n\n"}
						</Text>
						{"        "}{"    "}
					</StackItem>
					<StackItem width="100%" display="flex">
						<Override
							slot="StackItemContent"
							align-items="center"
							justify-content="center"
							text-align="center"
							flex-direction="column"
						/>
						<Text color="#6C6B7D" opacity="0.9" font="400 22px/30.8px --fontFamily-googleInter" margin="0px 0px 36px 0px">
							Make money streaming. Improve the quality and interactivity{" "}
							<br />
							of your streams with widgets, polls and other features{"\n\n"}
						</Text>
						<Link
							href="#"
							font="400 20px/28px --fontFamily-googleInter"
							color="#F0F0F5"
							text-decoration-line="initial"
							padding="12px 30px 12px 30px"
							background="#592CF0"
							border-radius="60px"
							transition="background-color 0.2s ease 0s"
							hover-background="#F0F0F5"
							hover-color="#592CF0"
						>
							Get an invite{"\n\n"}
						</Link>
						{"        "}{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" gap="20px">
					{"    "}
					<StackItem width="35%" display="flex">
						<Override slot="StackItemContent" align-items="center" justify-content="flex-end" text-align="center" />
						<Image src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group335262.png?v=2021-03-02T20:26:07.909Z" />
						{"        "}{"    "}
					</StackItem>
					<StackItem width="30%" display="flex">
						<Override slot="StackItemContent" align-items="center" justify-content="center" text-align="center" />
						{"        "}{"    "}
					</StackItem>
					<StackItem width="35%" display="flex">
						<Override slot="StackItemContent" align-items="center" justify-content="start" text-align="center" />
						<Image src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201177.png?v=2021-03-02T20:29:15.696Z" />
						{"        "}{"    "}
					</StackItem>
					<StackItem width="35%" display="flex">
						<Override slot="StackItemContent" align-items="center" justify-content="flex-end" text-align="center" />
						<Image src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201171.png?v=2021-03-02T20:40:39.210Z" margin="0px 30px 0px 0px" />
						{"        "}{"    "}
					</StackItem>
					<StackItem width="30%" display="flex">
						<Override slot="StackItemContent" align-items="center" justify-content="center" text-align="center" />
						{"        "}{"    "}
					</StackItem>
					<StackItem width="35%" display="flex">
						<Override slot="StackItemContent" align-items="center" justify-content="start" text-align="center" />
						<Image src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201177.png?v=2021-03-02T20:29:15.696Z" />
						{"        "}{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Box>
			<Components.Video border-radius="10px" width="80%">
				<Override slot="Button" background="#592CF0" />
			</Components.Video>
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
		<RawHtml>
			<style place={"endOfHead"} rawKey={"603e751a50a2640bdf3f75d3"}>
				{"* {\n    scroll-behavior: smooth;\n    }\n.ytp-cued-thumbnail-overlay-image {\n    border-radius: 10px !important;\n}\n\n    @font-face {\n      font-family: 'AvenirNextCyrRegular';\n      src: url('/fonts/AvenirNextCyr-Regular.eot');\n      src: url('/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: 'AvenirNextCyrMedium';\n      src: url('/fonts/AvenirNextCyr-Medium.eot');\n      src: url('/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: 'AvenirNextCyrBold';\n      src: url('/fonts/AvenirNextCyr-Bold.eot');\n      src: url('/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: 'AvenirNextCyrDemi';\n      src: url('/fonts/AvenirNextCyr-Demi.otf');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n        font-family: 'Avenir Next Cyr Thin';\n        src: url('/fonts/AvenirNextCyr-Thin.eot');\n        src: url('/fonts/AvenirNextCyr-Thin.eot?#iefix') format('embedded-opentype'),\n        url('/fonts/AvenirNextCyr-Thin.woff') format('woff'),\n        url('/fonts/AvenirNextCyr-Thin.ttf') format('truetype');\n        font-weight: normal;\n        font-style: normal;\n        } \n  :focus {\n    outline: none;\n  }"}
			</style>
		</RawHtml>
	</Theme>;
});