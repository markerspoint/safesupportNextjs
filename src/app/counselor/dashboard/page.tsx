import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CounselorDashboard() {
  return (
    <div className="space-y-6 w-full h-full flex flex-col"> 
      <h1 className="text-2xl font-bold">Counselor Dashboard</h1>

      <div className="flex-1">
        <Card className="h-auto w-[5rem]">
          <CardHeader>
            <CardTitle>Grades</CardTitle>
          </CardHeader>
          <CardContent>Your content here (e.g., table or chart).</CardContent>
        </Card>

        <Card className="h-auto w-[5rem]">
          <CardHeader>
            <CardTitle>Attendance</CardTitle>
          </CardHeader>
          <CardContent>Another section content.</CardContent>
        </Card>
      </div>
    </div>
  );
}