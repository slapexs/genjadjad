import React from "react"

type IButtonProps = {
	label?: string
	icon?: any
	onclickFunction?: () => void
	isDisabled?: boolean
	type?: string
}

function DefaultButton({
	label,
	icon,
	onclickFunction,
	isDisabled = false,
	type = "primary",
}: IButtonProps) {
	return (
		<>
			{type == "primary" ? (
				<button
					type="button"
					className="flex items-center gap-x-2 justify-center btn-min-width bg-purple-400 hover:bg-purple-600 rounded text-white px-4 py-2 disabled:bg-purple-100 disabled:hover:bg-purple-100 disabled:cursor-not-allowed"
					onClick={onclickFunction}
					disabled={isDisabled}
				>
					{icon}
					{label}
				</button>
			) : (
				<button
					type="button"
					className="flex items-center gap-x-2 justify-center btn-min-width bg-zinc-400 hover:bg-zinc-600 rounded text-white px-4 py-2 disabled:bg-zinc-100 disabled:hover:bg-zinc-100 disabled:cursor-not-allowed"
					onClick={onclickFunction}
					disabled={isDisabled}
				>
					{icon}
					{label}
				</button>
			)}
		</>
	)
}

export default DefaultButton
