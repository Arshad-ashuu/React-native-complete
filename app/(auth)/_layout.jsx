import { Stack } from "expo-router"


const authLayout = () => {
  return (
<Stack>
    <Stack.Screen name="signin" options={{headerShown:false,title:"signin"}} />
    <Stack.Screen name="login" options={{headerShown:false}}/>
</Stack>
  )
}

export default authLayout