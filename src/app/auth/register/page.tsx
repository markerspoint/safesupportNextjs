"use client";

import { GalleryVerticalEnd } from "lucide-react";
import { RegisterForm } from "@/components/register-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.error || "Registration failed");
        setLoading(false);
        return;
      }

      // ✅ Success
      router.push("/auth/login");
    } catch (err) {
      console.error("Register error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-muted flex min-h-screen flex-col items-center justify-center p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="/" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          SafeSupport
        </a>

        {/* Pass down our submit handler */}
        <RegisterForm />

        {error && (
          <div className="text-red-600 text-center text-sm">{error}</div>
        )}
        {loading && (
          <div className="text-muted-foreground text-center text-sm">
            Creating your account...
          </div>
        )}
      </div>
    </div>
  );
}
