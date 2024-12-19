import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";
import AuthProvider from "../providers/auth-provider";

export default function RootLayout() {
  return (
    <ToastProvider>
      <AuthProvider>
      <Stack>
        <Stack.Screen
          name="(shop)"
          options={{
            headerShown: false,
            title: "gadgets wallah",
          }}
        />
        <Stack.Screen
          name="categories"
          options={{
            headerShown: false,
            title: "Categories",
          }}
        />
        <Stack.Screen
          name="product"
          options={{
            headerShown: true,
            title: "Product",
          }}
        />
        <Stack.Screen
          name="cart"
          options={{
            presentation: "modal",
            title: "Shopping Cart",
          }}
        />
        <Stack.Screen
          name="auth"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      </AuthProvider>
    </ToastProvider>
  );
}
