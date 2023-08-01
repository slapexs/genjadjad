import React, { useState } from "react"
import DownloadLineIcon from "remixicon-react/DownloadLineIcon"
import { ToastContainer, toast } from "react-toastify"

type IDataInFile = {
	uuid: string[]
	version: string
}

function DownloadFile({ uuid, version }: IDataInFile) {
	const [fileType, setFileType] = useState<string>("")

	const Download = () => {
		const acceptType = ["txt", "csv"]
		if (fileType == "") {
			toast.error(`กรุณาระบุประเภทไฟล์ txt หรือ csv`, {
				autoClose: 2000,
				theme: "dark",
				pauseOnFocusLoss: false,
				pauseOnHover: false,
				position: "top-center",
			})
			return
		}
		if (!acceptType.includes(fileType)) {
			toast.error(`กรุณาระบุประเภทไฟล์ txt หรือ csv`, {
				autoClose: 2000,
				theme: "dark",
				pauseOnFocusLoss: false,
				pauseOnHover: false,
				position: "top-center",
			})
			return
		}
		const blob = new Blob([uuid.join("\n")], { type: "text/plain" })
		const url = URL.createObjectURL(blob)
		const filename = `uuid-${version}.${fileType}`
		const link = document.createElement("a")
		link.download = filename
		link.href = url
		link.click()
		toast.success(`ดาวน์โหลดไฟล์ ${filename} แล้ว`, {
			autoClose: 2000,
			theme: "dark",
			pauseOnFocusLoss: false,
			pauseOnHover: false,
			position: "top-center",
		})
	}
	return (
		<main className="">
			<section className="flex items-center gap-x-4">
				<p>ประเภทไฟล์</p>
				<div className="space-x-2">
					<input
						type="radio"
						name="fileType"
						id="txtFile"
						value="txt"
						onChange={(e) => setFileType(e.target.value)}
					/>
					<label htmlFor="txtFile">txt</label>
				</div>

				<div className="space-x-2">
					<input
						type="radio"
						name="fileType"
						id="csvFile"
						value="csv"
						onChange={(e) => setFileType(e.target.value)}
					/>
					<label htmlFor="csvFile">csv</label>
				</div>
				<button
					type="button"
					className="outline outline-purple-400 text-purple-400 rounded px-3 py-2 gap-x-2 flex text-sm hover:bg-purple-400 hover:text-white hover:outline-purple-400 transition "
					onClick={Download}
				>
					<DownloadLineIcon size={18} /> <span>ดาวน์โหลด</span>
				</button>
			</section>
		</main>
	)
}

export default DownloadFile
