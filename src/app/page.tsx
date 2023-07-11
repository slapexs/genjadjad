"use client"
import React, { useState } from "react"
import { v1, v4, NIL } from "uuid"
import ClipboardLineIcon from "remixicon-react/ClipboardLineIcon"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

type Props = {}

function Home({}: Props) {
	const [uuid, setUuid] = useState<string>(
		"00000000-0000-0000-0000-000000000000"
	)
	const [isCopy, setIsCopy] = useState<boolean>(false)
	const [algorithm, setAlgorithm] = useState<string>("uuid V1")

	const GenUUIDV1 = () => {
		setAlgorithm("uuid v1")
		setUuid(v1())
	}
	const GenUUIDV4 = () => {
		setAlgorithm("uuid v4")
		setUuid(v4())
	}
	const GenNIL = () => {
		setAlgorithm("uuid NIL")
		setUuid(NIL)
	}
	const Notify = () => {
		toast("คัดลอกแล้ว !", {
			position: "top-center",
			theme: "dark",
			pauseOnFocusLoss: false,
			autoClose: 2000,
			pauseOnHover: false,
		})
	}
	const CopyToClipboard = () => {
		navigator.clipboard.writeText(uuid).then((res) => {
			setIsCopy(true)
			Notify()
		})
	}

	return (
		<main className="w-full h-screen flex justify-center items-center">
			<ToastContainer />
			<section className="w-11/12" id="container">
				<h1 className="text-xl text-violet-400">
					สุ่มด้วย:{" "}
					<span className="text-violet-600 text-2xl font-bold">
						{algorithm}
					</span>
				</h1>
				<div className="flex items-center gap-4 my-10 justify-center flex-col lg:flex-row">
					<p className="lg:text-5xl text-3xl text-center">{uuid}</p>
					<button
						type="button"
						className="flex gap-x-2 outline outline-1 outline-violet-300 hover:outline-violet-400 transition hover:bg-violet-400 hover:text-white p-2 rounded"
						onClick={CopyToClipboard}
					>
						<ClipboardLineIcon /> <span>คัดลอก</span>
					</button>
				</div>
				<div className="space-x-3 flex justify-center">
					<button
						type="button"
						className="bg-purple-200 hover:bg-purple-400 hover:text-white transition rounded p-2"
						onClick={GenUUIDV1}
					>
						uuid v1
					</button>
					<button
						type="button"
						className="bg-purple-200 hover:bg-purple-400 hover:text-white transition rounded p-2"
						onClick={GenUUIDV4}
					>
						uuid v4
					</button>
					<button
						type="button"
						className="bg-purple-200 hover:bg-purple-400 hover:text-white transition rounded p-2"
						onClick={GenNIL}
					>
						uuid NIL
					</button>
				</div>
			</section>
		</main>
	)
}

export default Home
