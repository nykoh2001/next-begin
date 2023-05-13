import { useRouter } from "next/router";

export default function MovieDetail() {
	const router = useRouter();
	console.log(router);
	return <h4>{router.query.title || "Loading..."}</h4>;
}

// export async function getServerSideProps() {
// 	const { results } = await (
// 		await fetch(`http://localhost:3000/api/movies/`)
// 	).json();
// 	console.log(results);
// 	return {
// 		props: {
// 			results,
// 		},
// 	};
// }
