import { useRouter } from "next/router";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";
import "../style/global.css";

// blueprint of every pages
export default function CustomApp({ Component, pageProps }) {
	const path = useRouter().pathname.substring(1);
	const titleString =
		path === "" ? "Home" : path.charAt(0).toUpperCase() + path.substring(1);
	return (
		<>
			<Seo title={titleString} />
			<Layout>
				<Component {...pageProps}></Component>
			</Layout>
		</>
	);
}
