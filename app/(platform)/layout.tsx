import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <div>{children}</div>
    </ClerkProvider>
  );
};

export default PlatformLayout;
