import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FloatingLabelInput from "../components/FloatingLabelInput";


const SignIn = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <FloatingLabelInput label="Email" type="email" />
            <FloatingLabelInput label="Password" type="password" />
            <Button className="w-full">Sign In</Button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
