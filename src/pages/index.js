import React from "react";
import theme from "theme";
import { Theme, Link, Span, Text, Box, Image, Hr, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section, Formspree, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Stream Gem
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z"} />
		</Helmet>
		<Section
			background="#050211"
			padding="0px 0 0px 0"
			border-width="0px 0px 1px 0px"
			border-style="solid"
			border-color="#1C1B26"
			box-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
			quarkly-title="Header"
		>
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Stack margin="0px 0px 0px 0px" padding="0px 15px 0px 15px" min-height="80px">
				{"    "}
				<StackItem width="33.3333%" display="flex" md-width="50%">
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
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-display="none">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Link
						href="#Viewers"
						font="450 16px/140% --fontFamily-googleInter"
						text-decoration-line="initial"
						color="#F0F0F5"
						opacity="0.9"
						margin="0px 20px 0px 20px"
						transition="color 0.2s ease 0s"
						hover-color="#592CF0"
					>
						Viewers
					</Link>
					<Link
						href="#Streamers"
						font="450 16px/140% --fontFamily-googleInter"
						text-decoration-line="initial"
						color="#F0F0F5"
						opacity="0.9"
						margin="0px 20px 0px 20px"
						transition="color 0.2s ease 0s"
						hover-color="#592CF0"
					>
						Streamers
					</Link>
					<Link
						href="#Advertisers"
						font="450 16px/140% --fontFamily-googleInter"
						text-decoration-line="initial"
						color="#F0F0F5"
						opacity="0.9"
						margin="0px 20px 0px 20px"
						transition="color 0.2s ease 0s"
						hover-color="#592CF0"
					>
						Advertisers
					</Link>
					{"            "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="50%">
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
						Go to App
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#050211" padding="60px 0 60px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Box position="relative">
				<Stack margin="0px 0px 0px 0px" gap="20px" position="relative" z-index="9">
					{"    "}
					<StackItem width="100%" display="flex">
						<Override slot="StackItemContent" align-items="center" justify-content="center" text-align="center" />
						<Text
							color="#ffffff"
							opacity="0.9"
							font="650 72px/67.68px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							lg-font="650 64px/60px --fontFamily-googleInter"
							md-font="650 50px/47px --fontFamily-googleInter"
						>
							Full stream monetization
						</Text>
						{"            "}
					</StackItem>
					<StackItem width="100%" display="flex" position="relative" z-index="9">
						<Override
							slot="StackItemContent"
							align-items="center"
							justify-content="center"
							text-align="center"
							flex-direction="column"
							position="relative"
							z-index="9"
						/>
						<Text
							color="#6C6B7D"
							opacity="0.9"
							font="400 22px/30.8px --fontFamily-googleInter"
							margin="0px 0px 36px 0px"
							md-font="400 18px/25px --fontFamily-googleInter"
						>
							Make money streaming. Improve the quality and interactivity{" "}
							<br />
							of your streams with widgets, polls and other features
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
							margin="0px 0px 10px 0px"
							position="relative"
							z-index="9"
						>
							Get an invite
						</Link>
						{"            "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack
					margin="0px 0px 0px 0px"
					gap="20px"
					position="relative"
					z-index="1"
					padding="35px 0px 145px 0px"
					lg-justify-content="center"
					md-padding="0px 0px 130px 0px"
				>
					{"    "}
					<Box
						quarkly-title="Background-butterfly"
						position="absolute"
						width="100%"
						height="100%"
						background="repeating-linear-gradient(88.11deg,rgba(79, 58, 223, 0.29) 23.3%,rgba(200, 58, 223, 0.29) 82.21%),url(https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Vector%201.png?v=2021-03-02T20:31:33.375Z) 50% 50%/contain no-repeat"
						filter="blur(220px)"
						transform="matrix(-1, 0.01, 0.01, 1, 0, 0)"
						z-index="2"
					/>
					<Box
						position="absolute"
						width="100%"
						height="100%"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/face12424%201.png?v=2021-03-02T21:06:47.811Z) center bottom/630px no-repeat scroll padding-box"
						z-index="9"
						quarkly-title="Bg-man"
						transform="rotate(-0.04deg)"
						lg-width="80%"
						lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/face12424%201.png?v=2021-03-02T21:06:47.811Z) center bottom/550px no-repeat scroll padding-box"
						md-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/face12424%201.png?v=2021-03-02T21:06:47.811Z) center bottom/440px no-repeat scroll padding-box"
						sm-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/face12424%201.png?v=2021-03-02T21:06:47.811Z) center bottom/330px no-repeat scroll padding-box"
					/>
					<Box
						position="absolute"
						width="100%"
						height="100%"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/fontv.png?v=2021-03-02T21:01:48.259Z) center 0%/auto no-repeat scroll padding-box"
						z-index="1"
						filter="blur(18px)"
						padding="0px 0px 0px 0px"
						quarkly-title="Bg-tv"
						md-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/fontv.png?v=2021-03-02T21:01:48.259Z) center 0%/400px no-repeat scroll padding-box"
					/>
					<StackItem
						width="35%"
						display="flex"
						position="relative"
						z-index="9"
						sm-width="40%"
					>
						<Override slot="StackItemContent" align-items="center" justify-content="flex-end" text-align="center" />
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group335262.png?v=2021-03-02T20:26:07.909Z"
							transition="transform 0.2s ease 0s"
							hover-transform="translateX(-10px)"
							md-max-height="40px"
							sm-min-height="39px"
						/>
						{"            "}
					</StackItem>
					<StackItem
						width="30%"
						display="flex"
						position="relative"
						z-index="9"
						sm-width="20%"
					>
						<Override slot="StackItemContent" align-items="center" justify-content="center" text-align="center" />
						{"            "}
					</StackItem>
					<StackItem
						width="35%"
						display="flex"
						position="relative"
						z-index="9"
						sm-width="40%"
					>
						<Override slot="StackItemContent" align-items="center" justify-content="start" text-align="center" />
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201177.png?v=2021-03-02T20:29:15.696Z"
							transition="transform 0.2s ease 0s"
							hover-transform="translateX(10px)"
							md-max-height="40px"
							sm-min-height="39px"
						/>
						{"            "}
					</StackItem>
					<StackItem
						width="35%"
						display="flex"
						position="relative"
						z-index="9"
						sm-width="40%"
					>
						<Override slot="StackItemContent" align-items="center" justify-content="flex-end" text-align="center" />
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201171.png?v=2021-03-02T20:40:39.210Z"
							margin="0px 30px 0px 0px"
							transition="transform 0.2s ease 0s"
							hover-transform="translateX(-10px)"
							md-max-height="40px"
							sm-min-height="39px"
							sm-margin="0px 0px 0px 0px"
						/>
						{"            "}
					</StackItem>
					<StackItem
						width="30%"
						display="flex"
						position="relative"
						z-index="9"
						sm-width="20%"
					>
						<Override slot="StackItemContent" align-items="center" justify-content="center" text-align="center" />
						{"            "}
					</StackItem>
					<StackItem
						width="35%"
						display="flex"
						position="relative"
						z-index="9"
						sm-width="40%"
					>
						<Override slot="StackItemContent" align-items="center" justify-content="start" text-align="center" />
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201166.png?v=2021-03-02T20:56:48.661Z"
							margin="0px 0px 0px 30px"
							transition="transform 0.2s ease 0s"
							hover-transform="translateX(10px)"
							md-max-height="40px"
							sm-min-height="39px"
							sm-margin="0px 0px 0px 0px"
						/>
						{"            "}
					</StackItem>
					<StackItem
						width="35%"
						display="flex"
						position="relative"
						z-index="9"
						sm-width="40%"
					>
						<Override slot="StackItemContent" align-items="center" justify-content="flex-end" text-align="center" />
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201174.png?v=2021-03-02T20:58:34.921Z"
							margin="0px 0px 0px 0px"
							transition="transform 0.2s ease 0s"
							hover-transform="translateX(-10px)"
							md-max-height="40px"
							sm-min-height="39px"
						/>
						{"            "}
					</StackItem>
					<StackItem
						width="30%"
						display="flex"
						position="relative"
						z-index="9"
						sm-width="20%"
					>
						<Override slot="StackItemContent" align-items="center" justify-content="center" text-align="center" />
						{"            "}
					</StackItem>
					<StackItem
						width="35%"
						display="flex"
						position="relative"
						z-index="9"
						sm-width="40%"
					>
						<Override slot="StackItemContent" align-items="center" justify-content="start" text-align="center" />
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201178.png?v=2021-03-02T20:59:25.930Z"
							margin="0px 0px 0px 0px"
							transition="transform 0.2s ease 0s"
							hover-transform="translateX(10px)"
							md-max-height="40px"
							sm-min-height="39px"
						/>
						{"            "}
					</StackItem>
					{"    "}
				</Stack>
			</Box>
			<Components.Video
				border-radius="10px"
				width="80%"
				margin="35px 0px 0px 0px"
				lg-width="90%"
				md-margin="0px 0px 0px 0px"
				sm-width="100%"
				overflow-y="hidden"
				overflow-x="hidden"
			>
				<Override slot="Button" background="#592CF0" cursor="pointer" hover-background="#2d07ae" />
			</Components.Video>
		</Section>
		<Section background="#050211" padding="60px 0 60px 0" sm-padding="60px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack
				margin="0px 0px 0px 0px"
				gap="20px"
				position="relative"
				z-index="9"
				width="100%"
			>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" text-align="center" />
					<Text
						color="#ffffff"
						opacity="0.9"
						font="650 72px/67.68px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						lg-font="650 64px/60px --fontFamily-googleInter"
						md-font="650 48px/45px --fontFamily-googleInter"
					>
						Join, it's easy{" "}
					</Text>
					{"            "}
				</StackItem>
				<StackItem
					width="100%"
					display="flex"
					position="relative"
					z-index="9"
					margin="0px 0px 40px 0px"
					sm-margin="0px 0px 0px 0px"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						text-align="center"
						flex-direction="column"
						position="relative"
						z-index="9"
					/>
					<Text
						color="#6C6B7D"
						opacity="0.9"
						font="400 22px/30.8px --fontFamily-googleInter"
						margin="0px 0px 36px 0px"
						position="relative"
						z-index="9"
						md-font="400 20px/26px --fontFamily-googleInter"
					>
						Set up your system in 3 steps
					</Text>
					{"            "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					position="relative"
					z-index="9"
					md-width="100%"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						text-align="center"
						flex-direction="column"
						position="relative"
						z-index="1"
					/>
					<Box
						width="122px"
						height="122px"
						background="linear-gradient(86.84deg,rgba(252, 228, 82, 0.61) 27.6%,rgba(248, 166, 91, 0.562344) 50.5%,rgba(196, 196, 196, 0) 88.6%),url(https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Elli21.png?v=2021-03-03T20:44:15.177Z) 0% 0%/contain no-repeat"
						position="absolute"
						z-index="1"
						transform="rotate(-59.91deg)"
						filter="blur(94px)"
						left="auto"
						right="90px"
						top="-50px"
						bottom="auto"
						text-align="center"
						md-right="auto"
						sm-top="-50px"
					/>
					<Image src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%208@4x.png?v=2021-03-03T20:39:03.380Z" position="relative" z-index="4" margin="0px 0px 0px 0px" />
					{"            "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					position="relative"
					z-index="9"
					md-width="100%"
					md-order="2"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						text-align="center"
						flex-direction="column"
						position="relative"
						z-index="1"
					/>
					<Box
						width="122px"
						background="linear-gradient(86.84deg, rgba(231, 22, 205, 0.61) 30.4%, rgba(253, 68, 233, 0.61) 36.31%, rgba(196, 196, 196, 0) 106.11%),url(https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Elli21.png?v=2021-03-03T20:44:15.177Z) 0% 0%/contain no-repeat"
						position="absolute"
						z-index="1"
						transform="rotate(-59.91deg)"
						filter="blur(94px)"
						top="-50px"
						bottom="auto"
						left="auto"
						right="90px"
						height="122px"
						text-align="center"
						lg-right="50px"
						md-right="auto"
					/>
					<Image src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%201@4x.png?v=2021-03-03T20:52:20.454Z" position="relative" z-index="4" />
					{"            "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					position="relative"
					z-index="9"
					md-width="100%"
					md-order="5"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						text-align="center"
						flex-direction="column"
						position="relative"
						z-index="1"
					/>
					<Box
						width="122px"
						background="linear-gradient(86.84deg, rgba(0, 123, 97, 0.61) 30.4%, rgba(43, 190, 188, 0.61) 36.31%, rgba(196, 196, 196, 0) 106.11%),url(https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Elli21.png?v=2021-03-03T20:44:15.177Z) 0% 0%/contain no-repeat"
						position="absolute"
						z-index="1"
						transform="rotate(-59.91deg)"
						filter="blur(94px)"
						top="-50px"
						bottom="auto"
						left="auto"
						right="110px"
						height="122px"
						text-align="center"
						lg-right="0px"
						md-right="auto"
					/>
					<Image src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%2011@4x.png?v=2021-03-03T20:52:28.284Z" position="relative" z-index="4" left="0px" />
					{"            "}
				</StackItem>
				<StackItem
					width="100%"
					display="flex"
					position="relative"
					z-index="9"
					margin="10px 0px 0px 0px"
					md-display="none"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						text-align="center"
						flex-direction="column"
						position="relative"
						z-index="9"
					/>
					<Box width="100%" display="flex" justify-content="space-around" position="absolute">
						<Image src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z" position="relative" right="7px" />
						<Image src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z" />
						<Image src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z" margin="0px 0px 0px 0px" position="relative" left="7px" />
					</Box>
					<Hr width="100%" background="linear-gradient(90deg, rgba(42, 13, 48, 0) 0%, #280D31 10.61%, #19103D 89.56%, rgba(23, 16, 62, 0) 100%)" border-color="rgba(0, 0, 0, 0)" />
					{"            "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					position="relative"
					z-index="9"
					md-width="100%"
					md-order="1"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						text-align="center"
						flex-direction="column"
						position="relative"
						z-index="1"
					/>
					<Text font="600 22px/30.8px --fontFamily-googleInter" color="#F0F0F5" opacity="0.9" lg-font="500 18px/30.8px --fontFamily-googleInter">
						Register and setting
						<br />
						up tools
					</Text>
					{"            "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					position="relative"
					z-index="9"
					md-width="100%"
					md-order="3"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						text-align="center"
						flex-direction="column"
						position="relative"
						z-index="1"
					/>
					<Text font="600 22px/30.8px --fontFamily-googleInter" color="#F0F0F5" opacity="0.9" lg-font="500 18px/30.8px --fontFamily-googleInter">
						Add a link to the stream
						<br />
						gem to your bs
					</Text>
					{"            "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					position="relative"
					z-index="9"
					md-width="100%"
					md-order="6"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						text-align="center"
						flex-direction="column"
						position="relative"
						z-index="1"
					/>
					<Text font="600 22px/30.8px --fontFamily-googleInter" color="#F0F0F5" opacity="0.9" lg-font="500 18px/30.8px --fontFamily-googleInter">
						You start getting your
						<br />
						hard-earned
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section id="Viewers" background="#050211" padding="60px 0 60px 0" lg-padding="60px 0 40px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack
				margin="0px 0px 0px 0px"
				gap="20px"
				position="relative"
				z-index="9"
				width="100%"
			>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" text-align="center" />
					<Text
						color="#ffffff"
						opacity="0.9"
						font="650 72px/67.68px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						lg-font="650 64px/60px --fontFamily-googleInter"
						md-font="650 48px/45px --fontFamily-googleInter"
					>
						Viewers
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="100%" display="flex" position="relative" z-index="9">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						text-align="center"
						flex-direction="column"
						position="relative"
						z-index="9"
					/>
					<Text
						color="#6C6B7D"
						opacity="0.9"
						font="400 22px/30.8px --fontFamily-googleInter"
						margin="4px 0px 24px 0px"
						md-font="400 18px/23px --fontFamily-googleInter"
					>
						Monetize your audience
					</Text>
					{"            "}
				</StackItem>
				<StackItem
					width="100%"
					display="flex"
					position="relative"
					z-index="9"
					padding="10px 10px 10px 10px"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						text-align="center"
						flex-direction="column"
						position="relative"
						z-index="9"
						background="#09001E url(https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Frame%201191.png?v=2021-03-03T21:59:09.340Z) 0% 0% /auto repeat scroll padding-box"
						padding="60px 0px 0px 0px"
						min-height="487px"
						lg-min-height="407px"
						lg-padding="40px 0px 0px 0px"
						md-max-height="323px"
						md-height="323px"
						md-min-height="323px"
						sm-padding="40px 20px 0px 20px"
						border-radius="22px"
					/>
					<Box>
						<Text
							font="700 48px/57.68px --fontFamily-googleInter"
							color="#ffffff"
							margin="0px 0px 32px 0px"
							lg-font="700 32px/38px --fontFamily-googleInter"
							md-font="700 23px/27px --fontFamily-googleInter"
						>
							The most favorable conditions
							<br />
							for donations — no percent
						</Text>
						<Text
							color="#6C6B7D"
							opacity="0.9"
							font="400 22px/30.8px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							md-font="400 18px/23px --fontFamily-googleInter"
							sm-font="400 18px/30px --fontFamily-googleInter"
						>
							Withdrawal of funds from{"    "}
							<Span
								border-width="1px"
								border-style="dashed"
								border-color="rgba(255, 255, 255, 0.25)"
								border-radius="50%"
								padding="7px 8px 7px 8px"
								data-q-widget-type="PRIMITIVE"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								$1
							</Span>
						</Text>
					</Box>
					{"            "}
				</StackItem>
				<StackItem width="100%" margin="-227px 0px 0px 0px">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Box
						position="relative"
						z-index="9"
						left="auto"
						right="auto"
						bottom="0px"
						top="auto"
					>
						<Box position="relative">
							<Box
								background="linear-gradient(86.84deg, rgba(252, 228, 82, 0.61) 30.4%, rgba(248, 166, 91, 0.562344) 36.31%, rgba(196, 196, 196, 0) 106.11%);"
								transform="rotate(-33.72deg)"
								filter="blur(94px)"
								height="150px"
								width="280px"
								position="absolute"
								left="120px"
								right="auto"
								bottom="110px"
								top="auto"
								md-bottom="0px"
								md-left="60px"
								md-width="150px"
								md-height="110px"
							/>
							<Image
								src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%201@3x%201.png?v=2021-03-03T22:09:23.043Z"
								filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
								md-max-height="180px"
								md-position="relative"
								md-bottom="-70px"
								sm-max-height="120px"
								sm-top="90px"
							/>
						</Box>
					</Box>
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#050211" padding="90px 0 60px 0" lg-padding="60px 0 40px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack
				margin="0px 0px 0px 0px"
				gap="20px"
				position="relative"
				z-index="9"
				width="100%"
			>
				{"    "}
				<StackItem
					width="60%"
					display="flex"
					lg-width="50%"
					lg-padding="10px 10px 10px 0px"
					md-width="100%"
					md-order="1"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						text-align="center"
						position="relative"
						flex-direction="column"
						md-align-items="center"
						md-justify-content="center"
					/>
					<Box
						display="flex"
						flex-direction="column"
						align-items="center"
						position="relative"
						z-index="2"
					>
						<Image src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Rectangle%205282.png?v=2021-03-03T23:02:29.816Z" lg-width="100%" md-width="90%" />
						<Image src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Rectangle%205283.png?v=2021-03-03T23:04:20.837Z" sm-max-width="102px" />
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Rectangle%205278.png?v=2021-03-03T23:04:55.283Z"
							position="absolute"
							bottom="50px"
							left="50px"
							right="auto"
							top="auto"
							lg-left="20px"
							md-max-width="127px"
							md-left="40px"
							sm-bottom="30px"
						/>
					</Box>
					<Box
						background="linear-gradient(97.83deg, rgba(79, 58, 223, 0.3) 23.57%, rgba(200, 58, 223, 0.3) 92.49%);"
						filter="blur(220px)"
						width="100%"
						height="70%"
						position="absolute"
						z-index="1"
						top="0px"
						left="auto"
						right="auto"
						bottom="auto"
					/>
					{"            "}
				</StackItem>
				<StackItem width="40%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						padding="60px 10px 0px 0px"
						lg-padding="0px 10px 0px 10px"
						md-align-items="center"
						md-justify-content="center"
					/>
					<Text
						color="#592CF0"
						font="400 14px/18px --fontFamily-googleInter"
						margin="0px 0px 23px 0px"
						letter-spacing="3px"
						text-transform="uppercase"
					>
						Everything in sight
					</Text>
					<Text
						color="#ffffff"
						opacity="0.9"
						font="500 48px/48px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						lg-font="500 40px/40px --fontFamily-googleInter"
						md-font="500 36px/36px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Display the stream
					</Text>
					<Text
						color="#6C6B7D"
						opacity="0.9"
						font="400 20px/28px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						lg-font="400 18px/24px --fontFamily-googleInter"
						md-font="400 20px/27px --fontFamily-googleInter"
						md-text-align="center"
						md-margin="0px 0px 20px 0px"
					>
						notifications of donations, subscriptions, messages and other inactive tools to connect with the audience
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#050211" padding="60px 0 60px 0" lg-padding="60px 0 40px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack
				margin="0px 0px 0px 0px"
				gap="20px"
				position="relative"
				z-index="9"
				width="100%"
			>
				{"    "}
				<StackItem width="40%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						flex-direction="column"
						padding="0px 20px 0px 0px"
						md-align-items="center"
						md-justify-content="center"
					/>
					<Text
						color="#592CF0"
						font="400 14px/18px --fontFamily-googleInter"
						margin="0px 0px 23px 0px"
						letter-spacing="3px"
						text-transform="uppercase"
					>
						Heading
					</Text>
					<Text
						color="#ffffff"
						opacity="0.9"
						font="500 48px/48px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						lg-font="500 40px/40px --fontFamily-googleInter"
						md-font="500 36px/36px --fontFamily-googleInter"
						sm-text-align="center"
						md-text-align="center"
					>
						Regular support
					</Text>
					<Text
						color="#6C6B7D"
						opacity="0.9"
						font="400 20px/28px --fontFamily-googleInter"
						margin="0px 0px 50px 0px"
						lg-font="400 18px/24px --fontFamily-googleInter"
						md-font="400 20px/27px --fontFamily-googleInter"
						md-text-align="center"
						md-margin="0px 0px 20px 0px"
					>
						Give your viewers the opportunity to support you regularly
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
						margin="0px 0px 10px 0px"
						position="relative"
						z-index="9"
						md-margin="0px 0px 20px 0px"
					>
						Get an invite
					</Link>
					{"            "}
				</StackItem>
				<StackItem width="60%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-end"
						justify-content="center"
						text-align="center"
						position="relative"
						flex-direction="column"
						md-align-items="center"
					/>
					<Box
						display="flex"
						flex-direction="column"
						align-items="center"
						position="relative"
						z-index="2"
					>
						<Box
							background="linear-gradient(86.84deg, rgba(252, 228, 82, 0.61) 30.4%, rgba(248, 166, 91, 0.562344) 36.31%, rgba(196, 196, 196, 0) 106.11%);"
							filter="blur(94px)"
							width="30%"
							height="40%"
							position="absolute"
							z-index="4"
							top="auto"
							left="24px"
							right="auto"
							bottom="0px"
							transform="rotate(-117.91deg)"
						/>
						<Box
							background="linear-gradient(97.83deg, rgba(79, 58, 223, 0.3) 23.57%, rgba(200, 58, 223, 0.3) 92.49%)"
							filter="blur(220px)"
							width="100%"
							height="70%"
							position="absolute"
							z-index="3"
							top="0px"
							left="auto"
							right="auto"
							bottom="auto"
						/>
						<Box
							width="100%"
							height="60%"
							position="absolute"
							z-index="2"
							top="auto"
							left="-47px"
							right="auto"
							bottom="0px"
							transform="rotate(-180deg)"
							background="linear-gradient(180deg, #04010F 24.55%, rgba(4, 1, 15, 0) 100%)"
							md-left="0px"
						/>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201201.png?v=2021-03-03T23:27:49.023Z"
							position="relative"
							left="-47px"
							lg-width="100%"
							lg-left="auto"
							md-max-width="263px"
						/>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%20335246.png?v=2021-03-03T23:29:10.456Z"
							position="absolute"
							right="0px"
							left="auto"
							bottom="0px"
							top="auto"
							z-index="4"
							lg-width="100%"
							lg-max-width="208px"
							md-max-width="192px"
							md-bottom="40px"
						/>
						<Image
							position="absolute"
							bottom="-30px"
							left="30px"
							right="auto"
							top="auto"
							z-index="5"
							lg-max-height="137px"
							md-max-width="120px"
							md-bottom="0px"
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%203@3x%203.png?v=2021-03-03T23:29:00.567Z"
						/>
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#050211" padding="90px 0 60px 0" md-padding="30px 0 60px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack
				margin="0px 0px 0px 0px"
				gap="20px"
				position="relative"
				z-index="9"
				width="100%"
			>
				{"    "}
				<StackItem
					width="60%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					md-order="1"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-end"
						text-align="center"
						position="relative"
						flex-direction="column"
						md-align-items="center"
						md-justify-content="center"
					/>
					<Box
						display="flex"
						flex-direction="column"
						align-items="center"
						position="relative"
						z-index="2"
					>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%20335247.png?v=2021-03-03T23:49:06.158Z"
							position="relative"
							left="50px"
							lg-left="15px"
							md-max-width="260px"
						/>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%20335257.png?v=2021-03-03T23:49:18.193Z"
							position="absolute"
							bottom="80px"
							left="0px"
							right="auto"
							top="auto"
							lg-width="100%"
							md-bottom="40px"
						/>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%2011@4x.png?v=2021-03-04T00:16:37.637Z"
							position="absolute"
							bottom="-62px"
							top="auto"
							left="auto"
							right="100px"
							lg-bottom="-30px"
							md-max-width="34px"
							md-bottom="-20px"
							md-right="94px"
						/>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%209@4x.png?v=2021-03-04T00:18:11.672Z"
							position="absolute"
							top="110px"
							bottom="auto"
							right="100px"
							left="7px"
							lg-left="-30px"
							lg-top="77px"
							lg-bottom="auto"
							lg-right="auto"
							md-max-width="34px"
							md-left="0px"
							md-top="75px"
						/>
					</Box>
					<Box
						background="linear-gradient(97.83deg, rgba(79, 58, 223, 0.3) 23.57%, rgba(200, 58, 223, 0.3) 92.49%)"
						filter="blur(220px)"
						width="80%"
						height="60%"
						position="absolute"
						z-index="7"
						top="auto"
						left="auto"
						right="auto"
						bottom="100px"
						transform="rotate(14.18deg)"
					/>
					{"            "}
				</StackItem>
				<StackItem width="40%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						flex-direction="column"
						padding="0px 20px 0px 0px"
						lg-padding="0px 0px 0px 20px"
						md-align-items="center"
					/>
					<Text
						color="#592CF0"
						font="400 14px/18px --fontFamily-googleInter"
						margin="-10px 0px 23px 0px"
						letter-spacing="3px"
						text-transform="uppercase"
					>
						Play with the audience
					</Text>
					<Text
						color="#ffffff"
						opacity="0.9"
						font="500 48px/48px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						lg-font="500 40px/40px --fontFamily-googleInter"
						md-font="500 36px/36px --fontFamily-googleInter"
						md-text-align="center"
					>
						Race with your admirers
					</Text>
					<Text
						color="#6C6B7D"
						opacity="0.9"
						font="400 20px/28px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						lg-font="400 18px/24px --fontFamily-googleInter"
						md-font="400 20px/27px --fontFamily-googleInter"
						md-text-align="center"
						md-margin="0px 0px 20px 0px"
					>
						Take your viewers to the party and teach them to finally play
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section id="Streamers" background="#050211" padding="60px 0 40px 0" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack
				margin="0px 0px 0px 0px"
				gap="20px"
				position="relative"
				z-index="9"
				width="100%"
			>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" text-align="center" />
					<Text
						color="#ffffff"
						opacity="0.9"
						font="650 72px/67.68px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						lg-font="650 64px/60px --fontFamily-googleInter"
						md-font="650 48px/45px --fontFamily-googleInter"
					>
						Streamers
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="100%" display="flex" position="relative" z-index="9">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						text-align="center"
						flex-direction="column"
						position="relative"
						z-index="9"
					/>
					<Text
						color="#6C6B7D"
						opacity="0.9"
						font="400 22px/30.8px --fontFamily-googleInter"
						margin="4px 0px 24px 0px"
						md-font="400 18px/23px --fontFamily-googleInter"
					>
						Monetize relationships with other streamers
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#050211" padding="60px 0 60px 0" md-padding="60px 0 60px 0" sm-overflow-x="hidden">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack
				margin="0px 0px 0px 0px"
				gap="20px"
				position="relative"
				z-index="9"
				width="100%"
			>
				{"    "}
				<StackItem
					width="60%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					md-order="1"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-end"
						text-align="center"
						position="relative"
						flex-direction="column"
						md-align-items="center"
						md-justify-content="center"
					/>
					<Box
						display="flex"
						flex-direction="column"
						align-items="center"
						position="relative"
						z-index="2"
					>
						<Box display="flex" align-items="flex-start">
							<Image
								src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/photo-1568602471122-7832951cc4c5.png?v=2021-03-04T10:54:01.139Z"
								bottom="auto"
								left="0px"
								right="auto"
								top="auto"
								margin="0px 20px 0px 0px"
								position="relative"
								z-index="5"
								lg-max-height="150px"
							/>
							<Image
								src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/photo-1568602471122-7832951cc4%D1%8B.png?v=2021-03-04T10:56:50.868Z"
								bottom="auto"
								left="0px"
								right="auto"
								top="auto"
								position="relative"
								z-index="9"
								lg-max-height="90px"
							/>
						</Box>
						<Box display="flex" align-items="flex-end">
							<Image
								src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Avatar%D1%8B%D1%84%D0%B2%D1%84%D1%8B.png?v=2021-03-04T10:57:26.341Z"
								position="relative"
								left="50px"
								margin="0px 20px 0px 0px"
								z-index="9"
								lg-max-height="90px"
								sm-left="20px"
							/>
							<Image
								src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/asdsaxzc.png?v=2021-03-04T10:53:46.469Z"
								position="relative"
								left="50px"
								top="-50px"
								z-index="9"
								lg-max-height="128px"
								sm-left="20px"
								sm-top="-20px"
							/>
						</Box>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%2011@4x.png?v=2021-03-04T18:43:57.902Z"
							position="absolute"
							top="-10px"
							left="-40px"
							right="auto"
							bottom="auto"
							z-index="6"
							lg-max-height="72px"
						/>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%204@4x.png?v=2021-03-04T18:44:39.795Z"
							position="absolute"
							top="auto"
							bottom="160px"
							right="-120px"
							left="auto"
							lg-right="-80px"
							lg-max-height="52px"
							sm-right="-40px"
						/>
					</Box>
					<Box
						background="linear-gradient(97.83deg, rgba(79, 58, 223, 0.15) 23.57%, rgba(200, 58, 223, 0.15) 92.49%)"
						filter="blur(220px)"
						width="100%"
						height="100%"
						position="absolute"
						z-index="1"
						top="auto"
						left="auto"
						right="auto"
						bottom="auto"
					/>
					<Box
						background="linear-gradient(88.2deg, #4F3ADF 27.59%, #A529DF 82.27%)"
						filter="blur(230.359px)"
						width="50%"
						height="50%"
						position="absolute"
						z-index="1"
						top="100px"
						left="auto"
						right="200px"
						bottom="auto"
						transform="rotate(45deg)"
						sm-filter="blur(250.359px)"
						sm-top="0px"
						sm-height="10%"
						sm-width="15%"
					/>
					<Box
						background="linear-gradient(86.84deg, rgba(203, 0, 197, 0.61) 30.4%, rgba(80, 32, 155, 0.61) 36.31%, rgba(80, 32, 156, 0.61) 106.11%)"
						filter="blur(230.359px)"
						width="20%"
						height="20%"
						position="absolute"
						z-index="1"
						top="150px"
						left="auto"
						bottom="auto"
						transform="rotate(-33.72deg)"
						right="150px"
					/>
					<Box
						background="linear-gradient(86.84deg, rgba(0, 186, 146, 0.61) 30.4%, rgba(2, 186, 147, 0.61) 36.31%, rgba(196, 196, 196, 0) 106.11%)"
						filter="blur(94px)"
						width="30%"
						height="30%"
						position="absolute"
						z-index="1"
						top="0px"
						left="-40px"
						bottom="auto"
						transform="rotate(-33.72deg)"
						right="auto"
					/>
					{"            "}
				</StackItem>
				<StackItem width="40%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						flex-direction="column"
						padding="0px 20px 0px 0px"
						lg-padding="0px 0px 0px 20px"
						md-align-items="center"
						md-justify-content="center"
					/>
					<Text
						color="#592CF0"
						font="400 14px/18px --fontFamily-googleInter"
						margin="-10px 0px 23px 0px"
						letter-spacing="3px"
						text-transform="uppercase"
					>
						Play with the audience
					</Text>
					<Text
						color="#ffffff"
						opacity="0.9"
						font="500 48px/48px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						lg-font="500 40px/40px --fontFamily-googleInter"
						md-font="500 36px/36px --fontFamily-googleInter"
						md-text-align="center"
					>
						Teams
					</Text>
					<Text
						color="#6C6B7D"
						opacity="0.9"
						font="400 20px/28px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						lg-font="400 18px/24px --fontFamily-googleInter"
						md-font="400 20px/27px --fontFamily-googleInter"
						md-text-align="center"
						md-margin="0px 0px 30px 0px"
					>
						Create temporary or permanent teams and collect donations from viewers into a common pot
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section id="Advertisers" background="#050211" padding="60px 0 60px 0" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack
				margin="0px 0px 0px 0px"
				gap="20px"
				position="relative"
				z-index="9"
				width="100%"
			>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						text-align="center"
						md-align-items="center"
						md-justify-content="center"
					/>
					<Text
						color="#ffffff"
						opacity="0.9"
						font="650 72px/67.68px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						lg-font="650 64px/60px --fontFamily-googleInter"
						md-font="650 48px/45px --fontFamily-googleInter"
					>
						Advertisers
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="100%" display="flex" position="relative" z-index="9">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						text-align="center"
						flex-direction="column"
						position="relative"
						z-index="9"
						md-align-items="center"
						md-justify-content="center"
					/>
					<Text
						color="#6C6B7D"
						opacity="0.9"
						font="400 22px/30.8px --fontFamily-googleInter"
						margin="4px 0px 24px 0px"
						md-font="400 18px/23px --fontFamily-googleInter"
					>
						Our system allows you to automate interactions with advertisers,
						<br />
						so its size is not important.
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			background="#050211"
			padding="60px 0 60px 0"
			md-padding="30px 0 80px 0"
			sm-overflow-x="hidden"
			lg-overflow-x="hidden"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack
				margin="0px 0px 0px 0px"
				gap="20px"
				position="relative"
				z-index="9"
				width="100%"
			>
				{"    "}
				<StackItem width="40%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						flex-direction="column"
						padding="0px 20px 0px 0px"
						md-align-items="center"
						md-justify-content="center"
					/>
					<Text
						color="#592CF0"
						font="400 14px/18px --fontFamily-googleInter"
						margin="0px 0px 23px 0px"
						letter-spacing="3px"
						text-transform="uppercase"
					>
						Banner advertising
					</Text>
					<Text
						color="#ffffff"
						opacity="0.9"
						font="500 48px/48px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						lg-font="500 40px/40px --fontFamily-googleInter"
						md-font="500 36px/36px --fontFamily-googleInter"
						md-text-align="center"
					>
						Show advertisers banner
					</Text>
					<Text
						color="#6C6B7D"
						opacity="0.9"
						font="400 20px/28px --fontFamily-googleInter"
						margin="0px 0px 50px 0px"
						lg-font="400 18px/24px --fontFamily-googleInter"
						lg-margin="0px 0px 0px 0px"
						md-font="400 20px/27px --fontFamily-googleInter"
						md-margin="0px 0px 30px 0px"
						md-text-align="center"
					>
						Directly on the stream, during a break or on the donation page
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="60%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						text-align="center"
						position="relative"
						flex-direction="column"
						md-align-items="center"
						md-justify-content="center"
					/>
					<Box
						background="linear-gradient(97.83deg, rgba(79, 58, 223, 0.2) 23.57%, rgba(200, 58, 223, 0.2) 92.49%)"
						filter="blur(150px)"
						width="80%"
						height="80%"
						position="absolute"
						z-index="9"
						top="auto"
						left="auto"
						right="auto"
						bottom="auto"
					/>
					<Box
						display="flex"
						flex-direction="column"
						align-items="center"
						position="relative"
						z-index="2"
						min-width="280px"
					>
						<Box
							background="rgba(255, 255, 255, 0.02)"
							width="60%"
							height="60%"
							position="absolute"
							z-index="3"
							top="auto"
							left="-70px"
							right="auto"
							border-radius="22px"
							bottom="-50px"
							lg-left="0px"
						/>
						<Box
							background="rgba(255, 255, 255, 0.02)"
							width="80%"
							height="287.391px"
							position="absolute"
							z-index="3"
							top="60px"
							left="auto"
							right="-150px"
							bottom="64.6094px"
							border-radius="22px"
							sm-right="-130px"
						/>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Frame%201244.png?v=2021-03-04T19:59:24.465Z"
							position="relative"
							left="16px"
							right="auto"
							bottom="auto"
							top="auto"
							z-index="8"
							lg-max-height="326px"
							sm-left="5px"
						/>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%207@4x.png?v=2021-03-04T19:59:40.639Z"
							position="absolute"
							right="auto"
							left="-77px"
							top="0px"
							z-index="7"
							lg-left="-58px"
							lg-bottom="auto"
							lg-top="-20px"
						/>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%203@4x.png?v=2021-03-04T22:06:50.017Z"
							position="absolute"
							bottom="20px"
							left="auto"
							right="-80px"
							top="auto"
							z-index="8"
							lg-max-height="72px"
							lg-right="-30px"
							sm-right="-20px"
						/>
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#050211" padding="90px 0 90px 0" lg-padding="60px 0 70px 0" md-padding="40px 0 100px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack
				margin="0px 0px 0px 0px"
				gap="20px"
				position="relative"
				z-index="9"
				width="100%"
			>
				{"    "}
				<StackItem
					width="60%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					md-order="1"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						text-align="center"
						position="relative"
						flex-direction="column"
						md-align-items="center"
						md-justify-content="center"
					/>
					<Box
						background="linear-gradient(97.83deg, rgba(79, 58, 223, 0.2) 23.57%, rgba(200, 58, 223, 0.2) 92.49%)"
						filter="blur(100px)"
						width="70%"
						height="100%"
						position="absolute"
						z-index="9"
						top="auto"
						left="auto"
						right="auto"
						bottom="auto"
						transform="rotate(-117.91deg)"
					/>
					<Box
						display="flex"
						flex-direction="column"
						align-items="center"
						position="relative"
						z-index="2"
						min-width="280px"
					>
						<Box
							background="rgba(255, 255, 255, 0.02)"
							width="80%"
							height="80px"
							position="absolute"
							z-index="3"
							top="-85px"
							left="36px"
							right="auto"
							border-radius="22px"
							bottom="auto"
							lg-max-height="64px"
							lg-top="-68px"
							md-text-align="center"
						/>
						<Box
							background="rgba(255, 255, 255, 0.02)"
							width="80%"
							height="80px"
							position="absolute"
							z-index="3"
							top="auto"
							left="36px"
							right="auto"
							border-radius="22px"
							bottom="-85px"
							lg-max-height="64px"
							lg-bottom="-68px"
						/>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Frame123124.png?v=2021-03-04T23:16:31.892Z"
							position="relative"
							left="0px"
							right="auto"
							bottom="auto"
							top="auto"
							z-index="8"
							lg-width="100%"
						/>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%206@4x.png?v=2021-03-04T23:22:26.103Z"
							position="absolute"
							right="auto"
							left="0px"
							top="auto"
							z-index="8"
							bottom="-180px"
							lg-bottom="-108px"
							lg-max-height="90px"
							lg-left="35px"
						/>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/g733-lilac-gallery-1%201.png?v=2021-03-04T23:20:36.614Z"
							position="absolute"
							right="auto"
							left="115px"
							top="-106px"
							z-index="8"
							lg-max-height="75px"
							lg-top="-50px"
							lg-left="87px"
						/>
						<Image
							src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%2011@4x.png?v=2021-03-04T23:17:02.260Z"
							position="absolute"
							bottom="auto"
							left="auto"
							right="25px"
							top="-60px"
							z-index="8"
							lg-max-height="75px"
							lg-top="-60px"
						/>
					</Box>
					{"            "}
				</StackItem>
				<StackItem width="40%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						flex-direction="column"
						padding="0px 20px 0px 0px"
						lg-padding="0px 0px 0px 20px"
						md-align-items="center"
						md-justify-content="center"
					/>
					<Text
						color="#592CF0"
						font="400 14px/18px --fontFamily-googleInter"
						margin="-10px 0px 23px 0px"
						letter-spacing="3px"
						text-transform="uppercase"
					>
						Native advertising
					</Text>
					<Text
						color="#ffffff"
						opacity="0.9"
						font="500 48px/48px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						lg-font="500 40px/40px --fontFamily-googleInter"
						md-font="500 36px/36px --fontFamily-googleInter"
						md-text-align="center"
					>
						Fulfill advertiser orders
					</Text>
					<Text
						color="#6C6B7D"
						opacity="0.9"
						font="400 20px/28px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						lg-font="400 18px/24px --fontFamily-googleInter"
						md-text-align="center"
						md-font="400 20px/27px --fontFamily-googleInter"
						md-margin="0px 0px 60px 0px"
					>
						Choose orders of interest to you, follow the instructions and get rewards.
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#050211" padding="90px 0 60px 0" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack
				margin="0px 0px 0px 0px"
				gap="0px"
				position="relative"
				z-index="9"
				width="100%"
				background="rgba(55, 17, 181, 0.53) url(https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Frame%201245.png?v=2021-03-04T00:51:33.975Z) 0% 0% /cover no-repeat scroll padding-box"
				overflow-y="hidden"
				border-radius="18px"
				lg-background="rgba(55, 17, 181, 0.53) url(https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Frame%201245.png?v=2021-03-04T00:51:33.975Z) 0% 0% /cover no-repeat scroll padding-box"
			>
				{"    "}
				<Image
					src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/%D0%A0%D0%B5%D1%81%D1%83%D1%80%D1%81%203@4x.png?v=2021-03-04T00:53:28.626Z"
					position="absolute"
					bottom="40px"
					top="auto"
					right="117px"
					left="auto"
					z-index="6"
					md-right="0px"
					md-max-width="70px"
				/>
				<Image
					src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/stock-vector-set-of-fantasy-jewelry-gems-stone-for-game-vector-illustration-1226968321-removebg-preview%204.png?v=2021-03-04T00:52:19.054Z"
					position="absolute"
					bottom="0px"
					top="auto"
					right="auto"
					left="32px"
					z-index="6"
					md-max-width="80px"
					md-left="0px"
					md-bottom="40px"
				/>
				<StackItem
					width="100%"
					display="flex"
					position="relative"
					z-index="9"
					padding="10px 10px 10px 10px"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						text-align="center"
						flex-direction="column"
						position="relative"
						z-index="9"
						padding="60px 0px 0px 0px"
					/>
					<Text
						color="#ffffff"
						opacity="0.9"
						font="400 18px/24px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						padding="6px 11px 6px 11px"
						background="#FF0743"
						border-radius="6px"
					>
						Coming soon
					</Text>
					<Box>
						<Text
							font="600 72px/86px --fontFamily-googleInter"
							color="#ffffff"
							margin="0px 0px 40px 0px"
							letter-spacing="-1.5px"
							lg-font="650 64px/60px --fontFamily-googleInter"
							md-font="650 50px/60px --fontFamily-googleInter"
						>
							Join alpha testing
						</Text>
					</Box>
					{"            "}
				</StackItem>
				<StackItem width="100%" margin="0px 0px 0px 0px">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Formspree
						errorMessage="Something went wrong"
						completeText="Success"
						endpoint="xpzobepb"
						margin="0px 0px 60px 0px"
						width="70%"
						display="flex"
						justify-content="center"
						lg-width="100%"
						lg-padding="0px 20px 0px 20px"
						md-flex-direction="column"
					>
						<Input
							name="Twitch chanel"
							placeholder="Twitch chanel"
							margin-right="4px"
							background="rgba(255, 255, 255, 0)"
							border-color="rgba(255, 255, 255, 0.25)"
							font="400 16px/22px --fontFamily-googleInter"
							border-width="0px 0px 2px 0px"
							placeholder-color="#ffffff"
							placeholder-opacity="0.5"
							padding="6px 30px 12px 2px"
							margin="0px 14px 0px 0px"
							type="text"
							color="#ffffff"
							md-width="100%"
						/>
						<Input
							name="email"
							placeholder="Email"
							margin-right="4px"
							background="rgba(255, 255, 255, 0)"
							border-color="rgba(255, 255, 255, 0.25)"
							font="400 16px/22px --fontFamily-googleInter"
							border-width="0px 0px 2px 0px"
							placeholder-color="#ffffff"
							placeholder-opacity="0.5"
							padding="6px 30px 12px 2px"
							margin="0px 14px 0px 14px"
							type="email"
							color="#ffffff"
							md-margin="20px 14px 0px 0px"
							md-width="100%"
						/>
						<Button
							background="#FFFFFF"
							border-radius="60px"
							color="#592CF0"
							font="600 16px/22px --fontFamily-googleInter"
							margin="0px 0px 0px 32px"
							md-margin="20px 0px 0px 0px"
							md-width="100%"
							md-padding="9px 24px 9px 24px"
						>
							Go
						</Button>
					</Formspree>
				</StackItem>
				<StackItem width="100%" margin="0px 0px 0px 0px">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Image
						src="https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Rectangle%205255.png?v=2021-03-04T00:44:48.540Z"
						position="relative"
						z-index="5"
						transition="transform 0.2s ease 0s"
						transform="translateY(12px)"
						hover-transform="translateY(0px)"
						lg-width="90%"
					/>
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#050211" padding="24px 0 64px 0" md-padding="24px 0 34px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem width="70%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						lg-flex-direction="column"
						lg-align-items="flex-start"
						md-align-items="center"
						md-justify-content="center"
					/>
					{"        "}
					<Text
						color="#6C6B7D"
						opacity="0.9"
						font="400 16px/22px --fontFamily-googleInter"
						margin="0px 24px 0px 0px"
						lg-order="1"
						sm-text-align="center"
						sm-margin="0px 0px 0px 0px"
						md-margin="0px 0px 0px 0px"
						md-text-align="center"
					>
						© 2021 stream gem — full stream monetization
					</Text>
					<Box lg-margin="0px 0px 30px 0px">
						<Link
							href="#"
							font="400 16px/22px --fontFamily-googleInter"
							text-decoration-line="initial"
							color="#6C6B7D"
							transition="color 0.2s ease 0s"
							hover-color="#ffffff"
							margin="0px 12px 0px 12px"
							lg-margin="0px 12px 0px 0px"
						>
							Privacy
						</Link>
						<Link
							href="#"
							font="400 16px/22px --fontFamily-googleInter"
							text-decoration-line="initial"
							color="#6C6B7D"
							transition="color 0.2s ease 0s"
							hover-color="#ffffff"
							margin="0px 12px 0px 12px"
						>
							Community
						</Link>
						<Link
							href="#"
							font="400 16px/22px --fontFamily-googleInter"
							text-decoration-line="initial"
							color="#6C6B7D"
							transition="color 0.2s ease 0s"
							hover-color="#ffffff"
							margin="0px 12px 0px 12px"
						>
							Help
						</Link>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="30%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-end"
						lg-align-items="flex-start"
						md-align-items="center"
						md-justify-content="center"
					/>
					{"        "}
					<SocialMedia
						facebook="https://www.facebook.com/quarklyapp/"
						twitter="https://twitter.com/quarklyapp"
						youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
						vkontakte="https://vk.com/quarklyapp"
						telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
					>
						<Override
							slot="link"
							background="#0E0D1C"
							color="#ffffff"
							border-radius="50%"
							hover-background="#592CF0"
						/>
					</SocialMedia>
					{"    "}
				</StackItem>
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
		<RawHtml>
			<style place={"endOfHead"} rawKey={"603e751a50a2640bdf3f75d3"} />
		</RawHtml>
	</Theme>;
});