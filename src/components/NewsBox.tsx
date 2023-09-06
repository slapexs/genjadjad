import Link from "next/link"
import React from "react"

function NewsBox() {
	return (
		<>
			<article className="outline outline-neutral-100 rounded p-5 my-5">
				<header className="flex">
					<strong className="mr-3">API</strong>
					<strong className="bg-green-600 rounded-md px-3 py-1 text-white text-xs">
						GET
					</strong>

					<p className="ml-5">/api/uuid/จำนวน</p>
				</header>

				<article className="mt-2">
					<p className="text-xs">
						<span className="font-light">ตัวอย่าง : </span>
						<span>
							<Link
								href={"https://genjadjad.vercel.app/api/uuid/10"}
								target="_blank"
								className="hover:text-blue-500"
							>
								genjadjad.vercel.app/api/uuid/10
							</Link>
						</span>
					</p>
				</article>
			</article>
		</>
	)
}

export default NewsBox
