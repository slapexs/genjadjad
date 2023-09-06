import type { NextApiRequest, NextApiResponse } from "next"
import { v4 } from "uuid"

function handle(req: NextApiRequest, res: NextApiResponse) {
	const amount = parseInt(req.query.amount as string)
	const response = []
	if (amount <= 1000) {
		for (let i = 0; i < amount; i++) {
			const uuid = v4()
			response.push(uuid)
		}
		if (req.method === "GET") {
			res.status(200).json({ data: response })
		} else {
			res.status(400).json({ status: "This page only accepts method GET" })
		}
	} else {
		res.status(400).json({ status: "Limit number of UUIDs to 1000" })
	}
}
export default handle
