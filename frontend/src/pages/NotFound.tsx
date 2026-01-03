import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <span className="font-display text-8xl md:text-9xl font-bold text-primary">
            404
          </span>
        </div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <Home size={20} />
              Return Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft size={20} />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
