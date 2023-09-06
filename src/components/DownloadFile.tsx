import React, { useState } from "react"
import DownloadLineIcon from "remixicon-react/DownloadLineIcon"
import { ToastContainer, toast } from "react-toastify"
import DefaultButton from "./DefaultButton"
import ClipboardLineIcon from "remixicon-react/ClipboardLineIcon"

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
	const CopiedNotify = () => {
		toast("คัดลอกแล้ว !", {
			position: "top-center",
			theme: "dark",
			pauseOnFocusLoss: false,
			autoClose: 1500,
			pauseOnHover: false,
		})
	}

	const CopyAll = () => {
		navigator.clipboard.writeText(uuid.join("\n")).then((res) => CopiedNotify())
	}
	return (
		<>
			<ToastContainer />
			<section className="grid grid-cols-1 md:grid-cols-2 items-center">
				<div className="space-x-2 grid grid-cols-3 mt-2">
					<p>ประเภทไฟล์</p>
					<label htmlFor="txtFile">
						<input
							type="radio"
							name="fileType"
							id="txtFile"
							value="txt"
							className="mr-1"
							onChange={(e) => setFileType(e.target.value)}
						/>
						txt
					</label>

					<label htmlFor="csvFile">
						<input
							type="radio"
							name="fileType"
							id="csvFile"
							value="csv"
							className="mr-1"
							onChange={(e) => setFileType(e.target.value)}
						/>
						csv
					</label>
				</div>

				<section className="flex gap-4 mt-2">
					<button
						type="button"
						className="outline outline-purple-400 text-purple-400 rounded px-3 py-2 gap-x-2 flex text-sm hover:bg-purple-400 hover:text-white hover:outline-purple-400 transition "
						onClick={Download}
					>
						<DownloadLineIcon size={18} /> <span>ดาวน์โหลด</span>
					</button>
					<DefaultButton
						icon={<ClipboardLineIcon size={18} />}
						label="คัดลอก"
						onclickFunction={() => CopyAll()}
					/>
				</section>
			</section>
		</>
	)
}

export default DownloadFile
