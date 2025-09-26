import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to SafeSupport</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* Wrap the button with Link instead of using asChild */}
          <Link href="/auth/login" passHref>
            <Button className="w-full">Login</Button>
          </Link>

          <Link href="/auth/register" passHref>
            <Button variant="outline" className="w-full">Register</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}