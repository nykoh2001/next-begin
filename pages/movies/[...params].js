import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function MovieDetail({ title, id }) {
	return (
		<div>
			<Seo title={title} />
			<h4>{title}</h4>
		</div>
	);
}

export async function getServerSideProps({ query: { params: params } }) {
	const [title, id] = params || [];

	return {
		props: { title, id },
	};
}
