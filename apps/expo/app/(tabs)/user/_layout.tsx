import { Stack } from "expo-router"
import React from "react"

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen
				name="upload"
				options={{
					headerShown: true,
					title: "Upload files",
					presentation: "modal",
				}}
			/>
		</Stack>
	)
}
