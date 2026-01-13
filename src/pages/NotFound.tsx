import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <main className="pt-16 md:pt-20 min-h-screen flex items-center justify-center bg-background">
      <div className="container-custom text-center py-20">
        <div className="animate-fade-in-up">
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="cta" size="lg">
                <Home className="w-5 h-5" />
                Go to Home
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
