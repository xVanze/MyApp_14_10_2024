import { Stack } from "expo-router";
import index from "./index";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
    </Stack>
  );
}
