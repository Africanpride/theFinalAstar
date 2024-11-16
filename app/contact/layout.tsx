
import GoogleCaptchaWrapper from "@/components/GoogleCaptchaWrapper"
import { Toaster } from "react-hot-toast"

export default function JOINLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <GoogleCaptchaWrapper>
                  <Toaster />
            {children}
        </GoogleCaptchaWrapper>
    )
}