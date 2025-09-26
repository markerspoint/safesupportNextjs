import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <h1>Student Dashboard</h1>
      <Card>
        <CardHeader><CardTitle>Grades</CardTitle></CardHeader>
        <CardContent>Your content here (e.g., table or chart).</CardContent>
      </Card>
    </div>
  );
}