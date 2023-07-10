import "./globals.css"
import type { Metadata } from "next"
import { Inter, Prompt } from "next/font/google"

const promptFont = Prompt({
	subsets: ["latin", "thai"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
	title: "เจนจัดๆ | Gen Jad Jad",
	description:
		"Generate ข้อมูลได้แบบง่ายๆ แค่เลือกแล้วคลิก! ดูแค่ชื่อก็รู้แล้วว่าไม่เบาเพราะนี่คือเจนจัดๆ",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={promptFont.className}>{children}</body>
		</html>
	)
}
