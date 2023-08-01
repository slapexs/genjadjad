/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from "react"
import { v1, v4, NIL } from "uuid"
import ClipboardLineIcon from "remixicon-react/ClipboardLineIcon"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import DownloadFile from "@/components/DownloadFile"
import DefaultButton from "@/components/DefaultButton"
import ShuffleLineIcon from "remixicon-react/ShuffleLineIcon"
import DeleteBinLineIcon from "remixicon-react/DeleteBinLineIcon"
import Image from "next/image"

function Home() {
	const [amount, setAmount] = useState<number>(1)
	const [listId, setListId] = useState<string[]>([])

	const CopiedNotify = () => {
		toast("คัดลอกแล้ว !", {
			position: "top-center",
			theme: "dark",
			pauseOnFocusLoss: false,
			autoClose: 1500,
			pauseOnHover: false,
		})
	}
	const ErrorNotify = (text: string) => {
		toast.error(text, {
			position: "top-center",
			theme: "dark",
			pauseOnFocusLoss: false,
			autoClose: 3000,
			pauseOnHover: false,
		})
	}
	const CopyToClipboard = (id: string) => {
		navigator.clipboard.writeText(id).then((res) => CopiedNotify())
	}
	const CopyAll = () => {
		navigator.clipboard
			.writeText(listId.join("\n"))
			.then((res) => CopiedNotify())
	}

	const GenerateListId = () => {
		if (amount > 1000) {
			ErrorNotify("สุ่มสูงสุดแค่ 1000 ก็พอเอาอะไรเยอะแยะ")
			setAmount(1000)
		}
		const temp = []
		for (let i = 0; i < amount; i++) {
			temp.push(v4())
		}
		setListId(temp)
	}

	return (
		<main className="w-full flex flex-col items-center">
			<ToastContainer />
			<article className="w-11/12 my-20 flex items-center justify-center">
				<Image
					src="/favicon.ico"
					alt="favicon"
					width={200}
					height={200}
					draggable={false}
				/>
				<div className="space-y-4">
					<h1 className="text-5xl font-bold">สุ่มรหัส UUID v4</h1>
					<p className="text-gray-400">ระบุจำนวนแล้วกด "สุ่มใหม่" ได้เลย!</p>
				</div>
			</article>
			<article className="w-11/12 mt-4">
				<section className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
					{/* Numbers of uuids */}
					<div>
						<div className="outline outline-neutral-100 rounded p-5 space-y-5 sticky top-4">
							<h1 className="text-xl font-semibold text-gray-500">
								จำนวนทีต้องการ
							</h1>

							<div className="flex flex-row gap-x-2">
								<input
									type="number"
									min={1}
									max={1000}
									placeholder="จำนวน 1-100"
									value={amount}
									className="w-7/12 rounded outline outline-purple-200 px-4 py-2"
									onChange={(e) => setAmount(parseInt(e.target.value))}
								/>
								<DefaultButton
									label="สุ่มใหม่"
									icon={<ShuffleLineIcon size={18} />}
									onclickFunction={() => GenerateListId()}
									isDisabled={amount <= 0 || Number.isNaN(amount)}
								/>
								<DefaultButton
									label="ล้างค่า"
									type="clear"
									icon={<DeleteBinLineIcon size={18} />}
									onclickFunction={() => {
										setListId([])
										setAmount(1)
									}}
								/>
							</div>
							{listId.length > 0 && (
								<div className="flex items-center gap-x-4">
									<DownloadFile uuid={listId} version="v4" />
									<DefaultButton
										icon={<ClipboardLineIcon size={18} />}
										label="คัดลอกทั้งหมด"
										onclickFunction={() => CopyAll()}
									/>
								</div>
							)}
						</div>
					</div>
					{/* Result */}
					<div className="outline outline-neutral-100 rounded p-5 space-y-2">
						<h1 className="text-xl font-semibold text-purple-400">
							ผลลัพธ์{" "}
							<small className="text-gray-500 text-xs font-light">
								คลิกเพื่อคัดลอก
							</small>
						</h1>

						{listId.map((elem, index) => (
							<p
								key={index}
								onClick={() => CopyToClipboard(elem)}
								className="hover:text-purple-400 hover:cursor-copy"
							>
								{elem}
							</p>
						))}
					</div>
				</section>
			</article>
		</main>
	)
}

export default Home
