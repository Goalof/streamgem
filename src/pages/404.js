import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/603e5d71752fdd001f9359eb/images/Group%201181.png?v=2021-03-03T20:57:33.791Z"} />
		</Helmet>
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
				{"@import url(\"/stylesheet.css\")\n@media (min-width: 1200px) {\n* {\n    scroll-behavior: smooth;\n    }\n    }\n:focus {\n    outline: none;\n}\n@font-face {\n  font-display: auto !important;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});