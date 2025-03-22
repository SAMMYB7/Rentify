import { Card, CardContent } from "@/components/ui/Card";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-md bg-white rounded-lg">
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};

export default AuthLayout;
