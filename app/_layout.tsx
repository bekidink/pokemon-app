import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "@/global.css"
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { PaperProvider } from 'react-native-paper';



export default function RootLayout() {
  
  return (
   <QueryClientProvider client={queryClient}>
    <PaperProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="detail/[name]" options={{ headerShown: false }} />
      </Stack>
      </PaperProvider>
      </QueryClientProvider>
  );
}
