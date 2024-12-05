import { Card, CardContent } from './ui/card';
import { Skeleton } from './ui/skeleton';

function LoadingContainer() {
  return (
    <div className="pt-5 grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
}

function LoadingProduct() {
  return (
    <Card className="w-full h-[22rem] lg:w-[90%]">
      <CardContent className="p-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-2 w-3/4 mt-4" />
        <Skeleton className="h-2 w-3/4 mt-4" />
        <Skeleton className="h-2 w-1/4 mt-4" />
        <Skeleton className="h-2 w-1/4 mt-4" />
        <Skeleton className="h-2 w-1/4 mt-4" />
      </CardContent>
    </Card>
  );
}

export default LoadingContainer;
