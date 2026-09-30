import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[70vh] flex-col items-start justify-center py-24">
        <p className="eyebrow mb-3">404</p>
        <h1 className="text-4xl sm:text-5xl">Page not found</h1>
        <p className="prose-body mt-4">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary" withArrow>
            Back to home
          </Button>
        </div>
      </div>
    </Container>
  );
}
