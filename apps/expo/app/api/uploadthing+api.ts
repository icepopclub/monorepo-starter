import { isObject } from "@trpc/server/unstable-core-do-not-import"
import { z } from "zod"

import type { FileRouter } from "uploadthing/server"
import { createRouteHandler, createUploadthing } from "uploadthing/server"

const f = createUploadthing({
	errorFormatter: (err) => {
		console.log("Error uploading file", err.message)
		console.log("  - Above error caused by:", err.cause)

		return {
			message: err.message,
			reason:
				isObject(err.cause) && typeof err.cause.error === "string"
					? err.cause.error
					: null,
		}
	},
})

/**
 * This is your Uploadthing file router. For more information:
 * @see https://docs.uploadthing.com/api-reference/server#file-routes
 */
export const uploadRouter = {
	videoAndImage: f({
		image: {
			maxFileSize: "4MB",
			maxFileCount: 4,
		},
		video: {
			maxFileSize: "64MB",
			maxFileCount: 1,
		},
	}).onUploadComplete((data) => {
		console.log("upload completed", data)
	}),
	document: f({
		pdf: {
			maxFileSize: "64MB",
			maxFileCount: 1,
			contentDisposition: "inline",
		},
		audio: {
			maxFileSize: "64MB",
			maxFileCount: 1,
		},
	})
		.input(z.object({ foo: z.string() }))
		.middleware(({ input }) => {
			/**
			 * Note to readers: You should do auth here to prevent anyone from
			 * uploading a file
			 */
			return { input }
		})
		.onUploadComplete((data) => {
			console.log("upload completed", data)
		}),
} satisfies FileRouter

export const { GET, POST } = createRouteHandler({
	router: uploadRouter,
	config: { logLevel: "debug" },
})
