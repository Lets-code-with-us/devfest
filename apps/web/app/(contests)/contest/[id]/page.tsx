import React from "react";

async function Page({ params }: { params: { id: string } }) {
	const id = params.id;

	return <div className="mt-16 bg-red-500">{JSON.stringify(id)}</div>;
}

export default Page;
