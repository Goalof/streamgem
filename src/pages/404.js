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
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
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
				{"* {\n    scroll-behavior: smooth;\n    }\n.ytp-cued-thumbnail-overlay-image {\n    border-radius: 10px !important;\n}\n\n    @font-face {\n      font-family: 'AvenirNextCyrRegular';\n      src: url('/fonts/AvenirNextCyr-Regular.eot');\n      src: url('/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: 'AvenirNextCyrMedium';\n      src: url('/fonts/AvenirNextCyr-Medium.eot');\n      src: url('/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: 'AvenirNextCyrBold';\n      src: url('/fonts/AvenirNextCyr-Bold.eot');\n      src: url('/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: 'AvenirNextCyrDemi';\n      src: url('/fonts/AvenirNextCyr-Demi.otf');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n        font-family: 'Avenir Next Cyr Thin';\n        src: url('/fonts/AvenirNextCyr-Thin.eot');\n        src: url('/fonts/AvenirNextCyr-Thin.eot?#iefix') format('embedded-opentype'),\n        url('/fonts/AvenirNextCyr-Thin.woff') format('woff'),\n        url('/fonts/AvenirNextCyr-Thin.ttf') format('truetype');\n        font-weight: normal;\n        font-style: normal;\n        } \n  :focus {\n    outline: none;\n  }"}
			</style>
		</RawHtml>
	</Theme>;
});